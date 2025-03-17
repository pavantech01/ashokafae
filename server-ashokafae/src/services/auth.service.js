const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer'); // Import Nodemailer
const { User } = require('../models/user.model');
const admin = require('firebase-admin');
require('dotenv').config();
const crypto = require('crypto');
const catchAsync = require('../utils/catchAsync');

const authService = {
    register: async (fullName, phoneNumber, email, password, role) => {
        try {
            const existingUser = await User.findOne({ email: email.toLowerCase() });
            if (existingUser) throw new Error('User already exists');

            let firebaseUser;
            try {
                firebaseUser = await admin.auth().createUser({
                    email: email.toLowerCase(),
                    password,
                    displayName: fullName,
                    emailVerified: false,
                });
            } catch (firebaseError) {
                console.error('Firebase Error:', firebaseError.code, firebaseError.message);
                throw new Error(`Firebase error: ${firebaseError.message}`);
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Generate OTP
            const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
            const otpExpiry = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

            console.log('Generated OTP:', otp); // Log the generated OTP
            console.log('OTP Expiry Time:', otpExpiry); // Log the OTP expiry time

            const user = new User({
                fullName,
                phoneNumber,
                email: email.toLowerCase(),
                password: hashedPassword,
                role,
                isEmailVerified: false,
                firebaseUid: firebaseUser.uid,
                otp, // Store OTP
                otpExpiry // Store OTP expiry
            });

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
                subject: 'Your OTP Code',
                text: `Your OTP code is ${otp}. It is valid for 10 minutes.`
            });

            const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '24h' });
            const userResponse = user.toObject();
            delete userResponse.password;

            return { user: userResponse, token };
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    },

    login: async (email, password) => {
        try {
            const user = await User.findOne({ email: email.toLowerCase() });
            if (!user) throw new Error('User not found');
            if (!user.isEmailVerified) throw new Error('Email not verified');
            if (!user.isOtpVerified) throw new Error('OTP not verified');

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) throw new Error('Invalid credentials');

            const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '24h' });
            const userResponse = user.toObject();
            delete userResponse.password;

            return { user: userResponse, token };
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    verifyOtp: async (email, otp) => {
        const user = await User.findOne({ email });
        if (!user || user.otp !== otp || user.otpExpiry < Date.now()) {
            throw new Error('Invalid or expired OTP');
        }
        user.otp = undefined; // Clear OTP after verification
        user.otpExpiry = undefined; // Clear OTP expiry
        user.isOtpVerified = true; // Set OTP verified status
        user.isEmailVerified = true; // Set email verified status
        await user.save();
    },

};

module.exports = { authService };
