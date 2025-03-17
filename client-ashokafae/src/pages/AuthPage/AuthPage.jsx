// import React, { useState } from "react";
// import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
// import { MdEmail, MdLock, MdPerson, MdPhone } from "react-icons/md";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Base_URL } from '../../utils/api';

// const AuthPage = () => {
//     const navigate = useNavigate();
//     const [isSignUp, setIsSignUp] = useState(false);
    
//     // Form state for controlled inputs
//     const [formData, setFormData] = useState({
//         fullName: '',
//         phone: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
    
//     // Error and success state
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     // Handle input changes
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     // Validate form fields
//     const validateForm = () => {
//         setError('');
        
//         if (isSignUp) {
//             // Signup validation
//             if (!formData.fullName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
//                 setError('All fields are required.');
//                 return false;
//             }
//             if (!/\S+@\S+\.\S+/.test(formData.email)) {
//                 setError('Invalid email format.');
//                 return false;
//             }
//             if (!/^\d{10}$/.test(formData.phone)) {
//                 setError('Phone number must be 10 digits.');
//                 return false;
//             }
//             if (formData.password.length < 8) {
//                 setError('Password must be at least 8 characters long.');
//                 return false;
//             }
//             if (formData.password !== formData.confirmPassword) {
//                 setError('Passwords do not match.');
//                 return false;
//             }
//         } else {
//             // Login validation
//             if (!formData.email || !formData.password) {
//                 setError('Email and password are required.');
//                 return false;
//             }
//         }
        
//         return true;
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
        
//         // Validate form
//         if (!validateForm()) {
//             return;
//         }
        
//         try {
//             if (isSignUp) {
//                 // Handle signup
//                 const response = await axios.post(`${Base_URL}/api/auth/register`, {
//                     fullName: formData.fullName,
//                     phone: formData.phone,
//                     email: formData.email,
//                     password: formData.password,
//                     confirmPassword: formData.confirmPassword
//                 });

//                 if (response.status === 201) {
//                     setSuccess('Registration successful! Redirecting to OTP verification...');
                    
//                     // Store email in sessionStorage for OTP verification page
//                     sessionStorage.setItem('registeredEmail', formData.email);
                    
//                     // Redirect to verify-otp page after successful registration
//                     setTimeout(() => {
//                         navigate('/verify-otp');
//                     }, 1000);
//                 }
//             } else {
//                 // Handle login
//                 const response = await axios.post(`${Base_URL}/api/auth/login`, {
//                     email: formData.email,
//                     password: formData.password,
//                 });
                
//                 if (response.status === 200) {
//                     setSuccess('Login successful! Redirecting to home...');
                    
//                     // Store token and user data
//                     localStorage.setItem('token', response.data.token);
//                     if (response.data.user) {
//                         localStorage.setItem('user', JSON.stringify(response.data.user));
//                     }
                    
//                     // Redirect to home page after successful login
//                     setTimeout(() => {
//                         navigate('/');
//                     }, 1000);
//                 }
//             }
//         } catch (error) {
//             console.error('Error during authentication:', error);
//             setError(error.response?.data?.message || `An error occurred during ${isSignUp ? 'registration' : 'login'}.`);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center sticky min-h-screen top-20 bg-gray-100">
//             {/* Main Container */}
//             <div className="flex flex-col lg:flex-row w-[90%] md:w-[80%] lg:w-[60%] shadow-lg rounded-lg overflow-hidden  bg-white">
//                 {/* Left Section */}
//                 <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[700px] bg-gray-100 relative">
//                     <div className="absolute inset-0">
//                         <img
//                             src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1737434635/samples/imagecon-group.jpg"
//                             alt="Birthday decoration"
//                             className="w-full h-full object-cover opacity-80"
//                         />
//                         <div className="absolute inset-0 bg-black/30"></div>
//                     </div>

//                     <div className="relative z-10 flex flex-col justify-between h-full text-white text-center p-2 lg:p-4">
//                         {/* Text Content (Aligned to the top) */}
//                         <div className="mt-8 lg:mt-12">
//                             <h2 className="text-xl lg:text-4xl font-bold mb-2">
//                                 {isSignUp ? "Hello Friend!" : "Welcome Back!"}
//                             </h2>
//                             <p className="text-lg lg:text-base mb-4 max-w-md mx-auto">
//                                 {isSignUp
//                                     ? "Please Provide The Information To Register Your Account"
//                                     : "Please Sign In Into Your Account With The Given Details To Continue"}
//                             </p>
//                         </div>

//                         {/* Centered Button */}
//                         <div className="flex flex-col items-center justify-center flex-1">
//                             <button
//                                 onClick={() => {
//                                     setIsSignUp(!isSignUp);
//                                     setError('');
//                                     setSuccess('');
//                                 }}
//                                 className="w-36 h-12 bg-white text-black py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors mt-4 cursor-pointer"
//                             >
//                                 {isSignUp ? "Sign In" : "Sign Up"}
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Section */}
//                 <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 sm:px-6 py-4">
//                     <div className="w-full max-w-md flex flex-col items-center">
//                         <h2 className="text-lg lg:text-3xl font-bold text-gray-800 mb-4 text-center">
//                             {isSignUp ? "Register A New Account" : "Sign In To Your Account"}
//                         </h2>

//                         {/* Error and Success Messages */}
//                         {error && <p className="text-red-500 mb-3 text-center w-full">{error}</p>}
//                         {success && <p className="text-green-500 mb-3 text-center w-full">{success}</p>}

//                         {/* Social Login */}
//                         <div className="flex justify-center gap-2 lg:gap-4 mb-4">
//                             <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
//                                 <FaFacebook className="text-gray-600 text-lg" />
//                             </button>
//                             <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
//                                 <FaGoogle className="text-gray-600 text-lg" />
//                             </button>
//                             <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
//                                 <FaTwitter className="text-gray-600 text-lg" />
//                             </button>
//                         </div>

//                         <p className="text-center text-gray-500 mb-4 text-sm">
//                             Or {isSignUp ? "Register" : "Sign In"} With Your Email ID
//                         </p>

//                         <form className="space-y-3 flex flex-col items-center w-full" onSubmit={handleSubmit}>
//                             {isSignUp && (
//                                 <div className="relative w-2/3">
//                                     <MdPerson className="absolute left-3 top-2 text-gray-400 text-lg" />
//                                     <input
//                                         type="text"
//                                         name="fullName"
//                                         value={formData.fullName}
//                                         onChange={handleChange}
//                                         placeholder="Full Name"
//                                         className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
//                                     />
//                                     <div className="relative w-full mt-3">
//                                         <MdPhone className="absolute left-3 top-3 text-gray-400 text-lg" />
//                                         <input
//                                             type="text"
//                                             name="phone"
//                                             value={formData.phone}
//                                             onChange={handleChange}
//                                             placeholder="Phone Number"
//                                             className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
//                                         />
//                                     </div>
//                                 </div>
//                             )}

//                             <div className="relative w-2/3">
//                                 <MdEmail className="absolute left-3 top-2 text-gray-400 text-lg" />
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     placeholder="Email Address"
//                                     className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
//                                 />
//                             </div>

//                             <div className="relative w-2/3">
//                                 <MdLock className="absolute left-3 top-2 text-gray-400 text-lg" />
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     placeholder="Password"
//                                     className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
//                                 />
//                             </div>

//                             {!isSignUp && (
//                                 <button 
//                                     type="button"
//                                     className="text-emerald-500 bg-transparent border-none hover:underline text-sm"
//                                 >
//                                     Forgot Password?
//                                 </button>
//                             )}

//                             {isSignUp && (
//                                 <div className="relative w-2/3">
//                                     <MdLock className="absolute left-3 top-2 text-gray-400 text-lg" />
//                                     <input
//                                         type="password"
//                                         name="confirmPassword"
//                                         value={formData.confirmPassword}
//                                         onChange={handleChange}
//                                         placeholder="Confirm Password"
//                                         className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
//                                     />
//                                 </div>
//                             )}
//                             <button 
//                                 type="submit"
//                                 className="w-36 h-12 bg-emerald-400 text-white py-2 rounded-lg text-sm font-medium hover:bg-emerald-500 transition-colors mt-6 cursor-pointer"
//                             >
//                                 {isSignUp ? "Sign Up" : "Sign In"}
//                             </button>
//                         </form>

//                         <p className="text-center text-gray-500 mt-4 text-xs">
//                             {isSignUp ? "Already Have An Account?" : "New Here?"}{" "}
//                             <button
//                                 className="text-emerald-500 font-normal hover:underline bg-transparent border-none cursor-pointer"
//                                 onClick={() => {
//                                     setIsSignUp(!isSignUp);
//                                     setError('');
//                                     setSuccess('');
//                                 }}
//                             >
//                                 {isSignUp ? "Sign In" : "Create A New Account"}
//                             </button>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AuthPage;

import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLock, MdPerson, MdPhone } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Base_URL } from '../../utils/api';
import OtpVerificationModal from "./OtpVerificationModal"; // Import the new OTP modal component

const AuthPage = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    
    // Form state for controlled inputs
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    // Error and success state
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    // OTP verification modal state - NEW STATE
    const [showOtpModal, setShowOtpModal] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Validate form fields
    const validateForm = () => {
        setError('');
        
        if (isSignUp) {
            // Signup validation
            if (!formData.fullName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
                setError('All fields are required.');
                return false;
            }
            if (!/\S+@\S+\.\S+/.test(formData.email)) {
                setError('Invalid email format.');
                return false;
            }
            if (!/^\d{10}$/.test(formData.phone)) {
                setError('Phone number must be 10 digits.');
                return false;
            }
            if (formData.password.length < 8) {
                setError('Password must be at least 8 characters long.');
                return false;
            }
            if (formData.password !== formData.confirmPassword) {
                setError('Passwords do not match.');
                return false;
            }
        } else {
            // Login validation
            if (!formData.email || !formData.password) {
                setError('Email and password are required.');
                return false;
            }
        }
        
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        try {
            if (isSignUp) {
                // Handle signup
                const response = await axios.post(`${Base_URL}/api/auth/register`, {
                    fullName: formData.fullName,
                    phone: formData.phone,
                    email: formData.email,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword
                });

                if (response.status === 201) {
                    setSuccess('Registration successful! Please verify your phone number.');
                    
                    // Store email in sessionStorage for OTP verification
                    sessionStorage.setItem('registeredEmail', formData.email);
                    
                    // Show OTP modal instead of redirecting - MODIFIED
                    setShowOtpModal(true);
                    // No longer navigate to /verify-otp
                }
            } else {
                // Handle login
                const response = await axios.post(`${Base_URL}/api/auth/login`, {
                    email: formData.email,
                    password: formData.password,
                });
                
                if (response.status === 200) {
                    setSuccess('Login successful! Redirecting to home...');
                    
                    // Store token and user data
                    localStorage.setItem('token', response.data.token);
                    if (response.data.user) {
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                    }
                    
                    // Redirect to home page after successful login
                    setTimeout(() => {
                        navigate('/');
                    }, 1000);
                }
            }
        } catch (error) {
            console.error('Error during authentication:', error);
            setError(error.response?.data?.message || `An error occurred during ${isSignUp ? 'registration' : 'login'}.`);
        }
    };

    // Handle OTP verification success - NEW FUNCTION
    const handleOtpVerificationSuccess = () => {
        setShowOtpModal(false);
        navigate('/authUser', { replace: true });
    };

    return (
        <div className="flex items-center justify-center sticky min-h-screen top-20 bg-gray-100">
            {/* Main Container */}
            <div className="flex flex-col lg:flex-row w-[90%] md:w-[80%] lg:w-[60%] shadow-lg rounded-lg overflow-hidden bg-white">
                {/* Left Section */}
                <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[700px] bg-gray-100 relative">
                    <div className="absolute inset-0">
                        <img
                            src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1737434635/samples/imagecon-group.jpg"
                            alt="Birthday decoration"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>

                    <div className="relative z-10 flex flex-col justify-between h-full text-white text-center p-2 lg:p-4">
                        {/* Text Content (Aligned to the top) */}
                        <div className="mt-8 lg:mt-12">
                            <h2 className="text-xl lg:text-4xl font-bold mb-2">
                                {isSignUp ? "Hello Friend!" : "Welcome Back!"}
                            </h2>
                            <p className="text-lg lg:text-base mb-4 max-w-md mx-auto">
                                {isSignUp
                                    ? "Please Provide The Information To Register Your Account"
                                    : "Please Sign In Into Your Account With The Given Details To Continue"}
                            </p>
                        </div>

                        {/* Centered Button */}
                        <div className="flex flex-col items-center justify-center flex-1">
                            <button
                                onClick={() => {
                                    setIsSignUp(!isSignUp);
                                    setError('');
                                    setSuccess('');
                                }}
                                className="w-36 h-12 bg-white text-black py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors mt-4 cursor-pointer"
                            >
                                {isSignUp ? "Sign In" : "Sign Up"}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 sm:px-6 py-4">
                    <div className="w-full max-w-md flex flex-col items-center">
                        <h2 className="text-lg lg:text-3xl font-bold text-gray-800 mb-4 text-center">
                            {isSignUp ? "Register A New Account" : "Sign In To Your Account"}
                        </h2>

                        {/* Error and Success Messages */}
                        {error && <p className="text-red-500 mb-3 text-center w-full">{error}</p>}
                        {success && <p className="text-green-500 mb-3 text-center w-full">{success}</p>}

                        {/* Social Login */}
                        <div className="flex justify-center gap-2 lg:gap-4 mb-4">
                            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
                                <FaFacebook className="text-gray-600 text-lg" />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
                                <FaGoogle className="text-gray-600 text-lg" />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
                                <FaTwitter className="text-gray-600 text-lg" />
                            </button>
                        </div>

                        <p className="text-center text-gray-500 mb-4 text-sm">
                            Or {isSignUp ? "Register" : "Sign In"} With Your Email ID
                        </p>

                        <form className="space-y-3 flex flex-col items-center w-full" onSubmit={handleSubmit}>
                            {isSignUp && (
                                <div className="relative w-2/3">
                                    <MdPerson className="absolute left-3 top-2 text-gray-400 text-lg" />
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                                    />
                                    <div className="relative w-full mt-3">
                                        <MdPhone className="absolute left-3 top-3 text-gray-400 text-lg" />
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="relative w-2/3">
                                <MdEmail className="absolute left-3 top-2 text-gray-400 text-lg" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                                />
                            </div>

                            <div className="relative w-2/3">
                                <MdLock className="absolute left-3 top-2 text-gray-400 text-lg" />
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                                />
                            </div>

                            {!isSignUp && (
                                <button 
                                    type="button"
                                    className="text-emerald-500 bg-transparent border-none hover:underline text-sm"
                                >
                                    Forgot Password?
                                </button>
                            )}

                            {isSignUp && (
                                <div className="relative w-2/3">
                                    <MdLock className="absolute left-3 top-2 text-gray-400 text-lg" />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm Password"
                                        className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                                    />
                                </div>
                            )}
                            <button 
                                type="submit"
                                className="w-36 h-12 bg-emerald-400 text-white py-2 rounded-lg text-sm font-medium hover:bg-emerald-500 transition-colors mt-6 cursor-pointer"
                            >
                                {isSignUp ? "Sign Up" : "Sign In"}
                            </button>
                        </form>

                        <p className="text-center text-gray-500 mt-4 text-xs">
                            {isSignUp ? "Already Have An Account?" : "New Here?"}{" "}
                            <button
                                className="text-emerald-500 font-normal hover:underline bg-transparent border-none cursor-pointer"
                                onClick={() => {
                                    setIsSignUp(!isSignUp);
                                    setError('');
                                    setSuccess('');
                                }}
                            >
                                {isSignUp ? "Sign In" : "Create A New Account"}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            
            {/* OTP Verification Modal - NEW COMPONENT */}
            <OtpVerificationModal
                isOpen={showOtpModal}
                onClose={() => setShowOtpModal(false)}
                email={formData.email}
                onVerificationSuccess={handleOtpVerificationSuccess}
            />
        </div>
    );
};

export default AuthPage;