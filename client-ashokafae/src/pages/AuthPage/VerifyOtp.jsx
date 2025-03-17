import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Base_URL } from '../../utils/api';

const VerifyOtp = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    // Get email from sessionStorage on component mount
    useEffect(() => {
        const registeredEmail = sessionStorage.getItem('registeredEmail');
        if (registeredEmail) {
            setEmail(registeredEmail);
        }
    }, []);

    const handleVerify = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!email) {
            setError('Email is required.');
            return;
        }

        if (!otp) {
            setError('OTP is required.');
            return;
        }

        try {
            const response = await axios.post(`${Base_URL}/api/auth/verify-otp`, {
                email,
                otp
            });

            if (response.status === 200) {
                setSuccess('OTP verified successfully! Redirecting to login...');
                
                // Clear the stored email after successful verification
                sessionStorage.removeItem('registeredEmail');
                
                // Redirect to login page after successful verification
                setTimeout(() => {
                    navigate('/authUser', { replace: true });
                }, 1500);
            }
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred during OTP verification.');
        }
    };

    const handleResendOTP = async () => {
        setError('');
        setSuccess('');
        
        if (!email) {
            setError('Email is required to resend OTP.');
            return;
        }
        
        try {
            const response = await axios.post(`${Base_URL}/api/auth/resend-otp`, { email });
            if (response.status === 200) {
                setSuccess('OTP resent successfully. Please check your email.');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to resend OTP.');
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100 relative top-20'>
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Verify OTP</h2>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                {success && <p className="text-green-500 mb-4 text-center">{success}</p>}
                
                <form onSubmit={handleVerify} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition duration-300"
                    >
                        Verify OTP
                    </button>
                    
                    <p className="text-center text-sm text-gray-600 mt-2">
                        Didn't receive OTP? <button 
                            type="button" 
                            className="text-emerald-500 hover:underline"
                            onClick={() => {
                                // Logic to resend OTP would go here
                                handleResendOTP();
                                setSuccess('OTP resent successfully!');
                            }}

                            // onClick={handleResendOTP}
                        >
                            Resend
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default VerifyOtp;