import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Blog() {
    const navigate = useNavigate();
    //eslint-disable-next-line
    const [isAdmin, setIsAdmin] = useState(true); // replace with actual auth logic

    const handleAddBlog = () => {
        navigate('/add-blog');
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Blog</h1>
                {isAdmin && (
                    <button
                        onClick={handleAddBlog}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Add Blog
                    </button>
                )}
            </div>
            {/* Placeholder for Blog List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Replace with dynamic blog entries */}
                <div className="bg-white p-4 shadow rounded">
                    <img src="https://wallpaperaccess.com/full/2433830.jpg" alt="Blog Cover" className="w-full h-48 object-cover rounded" />
                    <h2 className="text-xl font-semibold mt-2">Sample Blog Title</h2>
                    <p className="text-gray-600">Short description of the blog goes here...</p>
                </div>
            </div>
        </div>
    );
}


export default Blog;
