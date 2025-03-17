const catchAsync = require('../utils/catchAsync');
const { authService } = require('../services/auth.service');
const { User } = require('../models/user.model'); // Import User model

const authController = {
    register: catchAsync(async (req, res) => {
        const { fullName, phone, email, password, confirmPassword, role } = req.body;

        // Check password and confirmPassword
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        try {
            const { fullName, phone, email, password, confirmPassword, role } = req.body;

            // Check password and confirmPassword
            if (password !== confirmPassword) {
                return res.status(400).json({ message: 'Passwords do not match' });
            }

            const { user, token } = await authService.register(fullName, phone, email, password, role);
            console.log('User:', user);
            res.status(201).json({ user, token, message: 'Registration successful! An OTP has been sent to your email.' });
        } catch (error) {
            console.error('Registration error:', {
                message: error.message,
                stack: error.stack,
                code: error.code
            });

            if (error.code === 11000) {
                return res.status(400).json({ message: 'Email is already registered' });
            }

            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }),

    login: catchAsync(async (req, res) => {
        try {
            const { email, password } = req.body;

            const { user, token } = await authService.login(email, password);
            if (!user.isOtpVerified) {
                return res.status(403).json({ message: 'OTP not verified' });
            }

            res.status(200).json({ user, token });
        } catch (error) {
            if (error.code === 404) {
                res.status(404).json({ message: 'User not found' });
            } else if (error.code === 401) {
                res.status(401).json({ message: 'Invalid credentials' });
            } else if (error.code === 403) {
                res.status(403).json({ message: 'Email not verified' });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }),
    googleAuth: catchAsync(async (req, res) => {
        try {
            const { idToken } = req.body;
            const { user, token } = await authService.googleAuth(idToken);
            res.status(200).json({ user, token });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }),

    verifyOtp: catchAsync(async (req, res) => {
        const { email, otp } = req.body;
        try {
            const user = await User.findOne({ email });
            
            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }
            
            if (user.otp !== otp) {
                return res.status(400).json({ message: 'Invalid OTP' });
            }
            
            if (new Date(user.otpExpiry) < new Date()) {
                return res.status(400).json({ message: 'OTP has expired' });
            }
    
            // Update using findOneAndUpdate to avoid validation issues
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { 
                    $set: { 
                        isOtpVerified: true,
                        isEmailVerified: true  // Also mark email as verified since OTP was sent to email
                    },
                    $unset: { otp: "", otpExpiry: "" }
                },
                { new: true }
            );
            
            console.log('User after OTP verification:', {
                id: updatedUser._id,
                email: updatedUser.email,
                isOtpVerified: updatedUser.isOtpVerified,
                isEmailVerified: updatedUser.isEmailVerified
            });
            
            return res.status(200).json({ message: 'OTP verified successfully' });
        } catch (error) {
            console.error('OTP verification error:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }),

    verifyEmail: async (req, res) => {
        try {
            const { token } = req.query;

            if (!token) {
                return res.status(400).json({ success: false, message: 'Token is required' });
            }

            const user = await User.findOne({ verificationToken: token, verificationTokenExpiry: { $gt: Date.now() - 5 * 60 * 1000 } });
            if (!user) {
                return res.status(400).json({ success: false, message: 'Invalid or expired token' });
            }

            user.isEmailVerified = true;
            user.verificationToken = undefined;
            user.verificationTokenExpiry = undefined;
            await user.save();

            res.status(200).json({ success: true, message: 'Email verified successfully' });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },

    // Add this function to your authController
resendOtp: catchAsync(async (req, res) => {
    const { email } = req.body;
    
    try {
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        // Generate new OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now
        
        // Update user with new OTP
        user.otp = otp;
        user.otpExpiry = otpExpiry;
        await user.save();
        
        // Send OTP via email
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            to: email,
            subject: 'Your New OTP Code',
            text: `Your new OTP code is ${otp}. It is valid for 10 minutes.`
        });
        
        return res.status(200).json({ message: 'OTP resent successfully' });
    } catch (error) {
        console.error('Resend OTP error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}),
};

module.exports = { authController };
