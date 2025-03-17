import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ product, onSubmit }) => {
    const [name, setName] = useState(product ? product.name : '');
    const [description, setDescription] = useState(product ? product.description : '');
    const [price, setPrice] = useState(product ? product.price : '');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        if (image) {
            formData.append('image', image);
        }
        await axios.post('/api/products', formData);
        onSubmit(); // Callback to refresh the product list or redirect
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Product Description"
                required
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Product Price"
                required
            />
            <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ProductForm;
