import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';

const AddEventForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
        capacity: '',
        price: '',
        category: '',
        status: 'draft',
        image: null
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prev) => ({
            ...prev,
            image: file
        }));
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            payload.append(key, value);
        });
        console.log('Form Submitted', formData);
        // Send via Axios if needed
    };

    return (
        <div className="min-h-screen bg-[#f0fdfa] flex justify-center items-center p-6">
            <div className="bg-[#d1f4ec] p-8 rounded-xl shadow-lg w-full max-w-6xl">
                <h2 className="text-2xl font-semibold mb-6 text-center">Add New Event</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-6">
                    {/* First Column */}
                    <div className="flex flex-col col-span-1">
                        <label className="mb-1 font-medium">Event Title</label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} className="p-2 rounded border" required />
                    </div>

                    <div className="flex flex-col col-span-1">
                        <label className="mb-1 font-medium">Date</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-2 rounded border" required />
                    </div>

                    <div className="flex flex-col col-span-1">
                        <label className="mb-1 font-medium">Location</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} className="p-2 rounded border" required />
                    </div>

                    {/* Second Row */}
                    <div className="flex flex-col col-span-1">
                        <label className="mb-1 font-medium">Capacity</label>
                        <input type="number" name="capacity" value={formData.capacity} onChange={handleChange} className="p-2 rounded border" required />
                    </div>

                    <div className="flex flex-col col-span-1">
                        <label className="mb-1 font-medium">Price</label>
                        <input type="number" name="price" value={formData.price} onChange={handleChange} className="p-2 rounded border" required />
                    </div>

                    <div className="flex flex-col col-span-1">
                        <label className="mb-1 font-medium">Category</label>
                        <input type="text" name="category" value={formData.category} onChange={handleChange} className="p-2 rounded border" required />
                    </div>

                    {/* Third Row */}
                    <div className="flex flex-col col-span-1">
                        <label className="mb-1 font-medium">Status</label>
                        <select name="status" value={formData.status} onChange={handleChange} className="p-2 rounded border">
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                            <option value="cancelled">Cancelled</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    <div className="flex flex-col col-span-2">
                        <label className="mb-1 font-medium">Description</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} className="p-2 rounded border h-24 resize-none" required />
                    </div>

                    {/* Image Upload */}
                    <div className="col-span-3">
                        <label className="mb-2 block font-medium">Event Image</label>
                        <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-md bg-white hover:bg-gray-50 cursor-pointer">
                            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                            {imagePreview ? (
                                <img src={imagePreview} alt="Preview" className="h-40 object-contain" />
                            ) : (
                                <div className="flex flex-col items-center">
                                    <UploadCloud className="w-6 h-6 text-gray-500" />
                                    <span className="text-gray-500 text-sm mt-2">Click to upload image</span>
                                </div>
                            )}
                        </label>
                    </div>

                    <div className="col-span-3">
                        <button type="submit" className="w-full bg-[#5dd5b3] hover:bg-[#3cb797] text-white py-3 rounded-md text-lg">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEventForm;
