import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const response = await axios.get('/api/products');
    //         setProducts(response.data);
    //         setLoading(false);
    //     };
    //     fetchProducts();
    // }, []);

    // if (loading) return <div>Loading...</div>;

    return (
        <div className='container mx-auto p-4'>
            <h1>Product List</h1>
            {/* <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default ProductList;
