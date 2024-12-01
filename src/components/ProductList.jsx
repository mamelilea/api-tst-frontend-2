import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { useNavigate } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products', {
            headers: { 'ngrok-skip-browser-warning': 'true' }
        })
            .then(response => setProducts(response.data))
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl mb-4 text-red-300">Product</h2>
            <button
                onClick={() => navigate('/create-product')}
                className="bg-green-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-green-600"
            >
                Add Product
            </button>

            {/* Product Cards */}
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {isLoading ? (
                    <div className="text-center">Loading...</div>
                ) : (
                    products.map(product => (
                        <Card key={product.id} {...product} onDelete={handleDelete} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;
