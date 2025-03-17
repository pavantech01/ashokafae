import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Base_URL } from '../../utils/api';

const OtpVerificationModal = ({ isOpen, onClose, email, onVerificationSuccess }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timeLeft, setTimeLeft] = useState(60);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    // Timer for OTP expiration
    useEffect(() => {
        if (!isOpen) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isOpen]);

    // Focus first input when modal opens
    useEffect(() => {
        if (isOpen && inputRefs[0].current) {
            setTimeout(() => {
                inputRefs[0].current.focus();
            }, 100);
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOpen]);

    // Handle OTP input change
    const handleOtpChange = (e, index) => {
        const value = e.target.value;

        // Only allow numbers
        if (value && !/^\d+$/.test(value)) return;

        setOtp(prev => {
            const newOtp = [...prev];
            // Take only the last character if multiple are pasted
            newOtp[index] = value.slice(-1);
            return newOtp;
        });

        // Auto focus next input
        if (value && index < 5) {
            inputRefs[index + 1].current.focus();
        }
    };

    // Handle key down events for backspace navigation
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    // Handle paste event
    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        if (!/^\d+$/.test(pastedData)) return;

        const otpDigits = pastedData.slice(0, 6).split('');
        const newOtp = [...otp];

        otpDigits.forEach((digit, index) => {
            if (index < 6) {
                newOtp[index] = digit;
            }
        });

        setOtp(newOtp);

        // Focus the appropriate input after paste
        if (otpDigits.length < 6 && otpDigits.length > 0) {
            inputRefs[otpDigits.length].current.focus();
        }
    };

    // Verify OTP
    const handleVerify = async () => {
        setError('');
        setSuccess('');
        setIsLoading(true);

        const otpValue = otp.join('');

        if (otpValue.length !== 6) {
            setError('Please enter all 6 digits of the OTP');
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.post(`${Base_URL}/api/auth/verify-otp`, {
                email,
                otp: otpValue
            });

            if (response.status === 200) {
                setSuccess('OTP verified successfully!');

                // Clear the stored email after successful verification
                sessionStorage.removeItem('registeredEmail');

                setTimeout(() => {
                    onVerificationSuccess();
                }, 1000);
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Invalid or expired OTP. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // Resend OTP
    const handleResendOTP = async () => {
        if (timeLeft > 0) return;

        setError('');
        setSuccess('');
        setIsLoading(true);

        try {
            const response = await axios.post(`${Base_URL}/api/auth/resend-otp`, { email });

            if (response.status === 200) {
                setSuccess('OTP resent successfully. Please check your phone.');
                setTimeLeft(60);
                setOtp(['', '', '', '', '', '']);
                inputRefs[0].current.focus();
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to resend OTP.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    // Format time left
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 m-4 relative animate-fadeIn">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Verification</h2>
                    <p className="text-gray-600 mt-2">
                        Enter The 6 Digit Code We Sent You
                    </p>
                    <p className="text-gray-600">
                        Via Your Phone Number
                    </p>
                </div>

                {error && (
                    <div className="mb-4 text-center">
                        <p className="text-red-500">{error}</p>
                    </div>
                )}

                {success && (
                    <div className="mb-4 text-center">
                        <p className="text-green-500">{success}</p>
                    </div>
                )}

                <div className="flex justify-center space-x-3 mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={inputRefs[index]}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleOtpChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onPaste={index === 0 ? handlePaste : undefined}
                            className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                    ))}
                </div>

                <div className="text-center mb-6">
                    <p className="text-gray-600">
                        Code Expires In <span className="text-red-500 font-medium">{formatTime(timeLeft)}</span>
                    </p>
                </div>

                <button
                    onClick={handleVerify}
                    disabled={isLoading || otp.join('').length !== 6}
                    className="w-full py-3 bg-emerald-400 text-white rounded-lg font-medium hover:bg-emerald-500 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Verifying...' : 'Confirm'}
                </button>

                <div className="mt-4 text-center">
                    <p className="text-gray-600 text-sm">
                        Didn't receive code?{' '}
                        <button
                            onClick={handleResendOTP}
                            disabled={timeLeft > 0 || isLoading}
                            className={`font-medium ${timeLeft > 0 ? 'text-gray-400' : 'text-emerald-500 hover:underline'}`}
                        >
                            {timeLeft > 0 ? `Resend in ${formatTime(timeLeft)}` : 'Resend'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OtpVerificationModal;