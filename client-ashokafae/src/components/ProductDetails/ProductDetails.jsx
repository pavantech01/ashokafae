import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`/api/products/${id}`);
            setProduct(response.data);
            setLoading(false);
        };
        fetchProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Add functionality for updating or deleting the product */}
        </div>
    );
};

export default ProductDetails;
