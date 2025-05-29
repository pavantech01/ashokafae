import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function AddBlog() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blogData = { title, desc, image };
        console.log('Submitting blog:', blogData);
        // Add submission logic here (e.g., API call)
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input
                    type="text"
                    placeholder="Blog Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                />

                <CKEditor
                    editor={ClassicEditor}
                    data={desc}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setDesc(data);
                    }}
                />

                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    accept="image/*"
                    className="block"
                    required
                />

                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    Submit Blog
                </button>
            </form>
        </div>
    );
}

export default AddBlog;
