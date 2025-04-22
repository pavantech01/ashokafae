import React, { useRef, useState } from "react";
import { UploadCloud, ChevronDown } from "lucide-react";

const AddServiceForm = () => {
    const [serviceName, setServiceName] = useState("");
    const [description, setDescription] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [icon, setIcon] = useState(null);

    const fileInputRef = useRef();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setIcon(file);
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Service submitted!");
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto mt-16 p-6 bg-teal-50 rounded-xl shadow-md w-full"
            >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Services</h2>

                {/* Service Name */}
                <label className="block mb-2 text-sm font-medium text-gray-700">Services Name</label>
                <div className="relative mb-4">
                    <select
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 appearance-none"
                    >
                        <option value="" disabled='true'>Select service</option>
                        <option value="Plumbing">Baby Shower</option>
                        <option value="Electrician">Birthday </option>
                        <option value="Cleaning">Wedding Party</option>
                    </select>
                    <ChevronDown className="absolute top-2.5 right-3 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                {/* Description */}
                <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="3"
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="Describe the service..."
                />

                {/* Price Range */}
                <label className="block mb-2 text-sm font-medium text-gray-700">Price Range</label>
                <input
                    type="text"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="$50 - $100"
                />

                {/* Icon Upload */}
                <label className="block mb-2 text-sm font-medium text-gray-700">Upload Icon</label>
                <div
                    onClick={triggerFileInput}
                    className="border-2 border-dashed border-teal-400 p-4 rounded-md mb-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-teal-100"
                >
                    <UploadCloud className="w-6 h-6 text-teal-600 mb-2" />
                    <span className="text-sm text-teal-700 mb-2">Click to upload</span>
                    {icon && <p className="text-xs text-gray-500 mt-2">{icon.name}</p>}
                </div>
                <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                />

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-teal-400 text-white py-2 rounded-md hover:bg-teal-500 transition"
                >
                    Confirm
                </button>
            </form>
        </div>
    );
};

export default AddServiceForm;
