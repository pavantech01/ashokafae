// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Upload, LoaderCircle } from 'lucide-react';
// import { Base_URL } from '../../../../utils/api';

// const AddEventForm = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         description: '',
//         status: 'draft',
//         category: '',
//     });
//     const [imageFile, setImageFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const fileInputRef = useRef(); // 👈 for resetting file input

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) setImageFile(file);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!formData.title || !formData.description || !formData.category) {
//             toast.error('Please fill all required fields');
//             return;
//         }

//         setLoading(true);
//         try {
//             const form = new FormData();
//             form.append('title', formData.title);
//             form.append('description', formData.description);
//             form.append('status', formData.status);
//             form.append('category', formData.category);
//             if (imageFile) form.append('image', imageFile);

//             await axios.post(`${Base_URL}/api/events`, form, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//                 withCredentials: true
//             });

//             toast.success('Event created successfully!');

//             // ✅ Reset form fields
//             setFormData({ title: '', description: '', status: 'draft', category: '' });
//             setImageFile(null);
//             fileInputRef.current.value = ''; // 👈 Reset file input manually

//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Something went wrong');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-2xl shadow-lg mt-10">
//             <h2 className="text-3xl font-semibold mb-6 text-white text-center">Add New Event</h2>
//             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Title *"
//                     value={formData.title}
//                     onChange={handleChange}
//                     className="border-2 border-green-500 focus:border-green-700 rounded-xl px-4 py-3 text-green-800 focus:ring-2 focus:ring-green-700 transition"
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="category"
//                     placeholder="Category *"
//                     value={formData.category}
//                     onChange={handleChange}
//                     className="border-2 border-green-500 focus:border-green-700 rounded-xl px-4 py-3 text-green-800 focus:ring-2 focus:ring-green-700 transition"
//                     required
//                 />
//                 <select
//                     name="status"
//                     value={formData.status}
//                     onChange={handleChange}
//                     className="border-2 border-green-500 focus:border-green-700 rounded-xl px-4 py-3 text-green-800 focus:ring-2 focus:ring-green-700 transition"
//                 >
//                     <option value="draft">Draft</option>
//                     <option value="live">Live</option>
//                     <option value="cancelled">Cancelled</option>
//                 </select>
//                 <input
//                     type="file"
//                     accept="image/*"
//                     ref={fileInputRef} // 👈 Connect the ref
//                     onChange={handleImageChange}
//                     className="border-2 border-green-500 rounded-xl px-4 py-3 text-green-800 focus:ring-2 focus:ring-green-700 transition"
//                 />
//                 <textarea
//                     name="description"
//                     placeholder="Description *"
//                     value={formData.description}
//                     onChange={handleChange}
//                     rows={5}
//                     className="md:col-span-2 border-2 border-green-500 focus:border-green-700 rounded-xl px-4 py-3 text-green-800 focus:ring-2 focus:ring-green-700 transition"
//                     required
//                 />
//                 <button
//                     type="submit"
//                     className="md:col-span-2 bg-green-600 text-white py-3 px-6 rounded-xl hover:bg-green-700 flex items-center justify-center transition ease-in-out duration-300"
//                     disabled={loading}
//                 >
//                     {loading ? <LoaderCircle className="animate-spin w-6 h-6 mr-2" /> : <Upload className="w-6 h-6 mr-2" />}
//                     Submit Event
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default AddEventForm;

import React, { useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Upload, LoaderCircle } from 'lucide-react';
import { Base_URL } from '../../../../utils/api';

const AddEventForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        status: 'draft',
    });
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) setImageFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title || !formData.category || !formData.description) {
            toast.error('Please fill all required fields');
            return;
        }

        setLoading(true);
        try {
            const form = new FormData();
            form.append('title', formData.title);
            form.append('category', formData.category);
            form.append('description', formData.description);
            form.append('status', formData.status);
            if (imageFile) form.append('image', imageFile);

            await axios.post(`${Base_URL}/api/events`, form, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true,
            });

            toast.success('Event created successfully!');

            // Reset form fields
            setFormData({ title: '', category: '', description: '', status: 'draft' });
            setImageFile(null);
            fileInputRef.current.value = '';

        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto p-6 bg-sky-200 rounded-2xl shadow-lg mt-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">Add New Event</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                <input
                    type="text"
                    name="title"
                    placeholder="Event Title *"
                    value={formData.title}
                    onChange={handleChange}
                    className="border-2 border-green-500 rounded-xl px-4 py-3"
                    required
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category *"
                    value={formData.category}
                    onChange={handleChange}
                    className="border-2 border-green-500 rounded-xl px-4 py-3"
                    required
                />
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="border-2 border-green-500 rounded-xl px-4 py-3"
                >
                    <option value="draft">Draft</option>
                    <option value="live">Live</option>
                    <option value="cancelled">Cancelled</option>
                </select>
                <textarea
                    name="description"
                    placeholder="Description *"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="border-2 border-green-500 rounded-xl px-4 py-3"
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="border-2 border-green-500 rounded-xl px-4 py-3 cursor-pointer"
                />
                <button
                    type="submit"
                    className="bg-green-600 text-white py-2 px-4 rounded-xl flex justify-center"
                    disabled={loading}
                >
                    {loading ? <LoaderCircle className="animate-spin w-6 h-6 mr-2" /> : <Upload className="w-6 h-6 mr-2" />}
                    Submit Event
                </button>
            </form>
        </div>
    );
};

export default AddEventForm;