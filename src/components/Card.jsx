import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, name, description, price, stock, category, image_url, onDelete }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit-product/${id}`);
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            onDelete(id);
        }
    };
    return (
        <div key={id} className='relative w-full bg-white hover:border hover:border-black shadow-lg'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={image_url || 'https://via.placeholder.com/150'} alt={name} className="w-full h-max" />
            <div className='p-4'>
                <p className="text-sm text-gray-500">Category: {category}</p>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-600 ">{description}</p>
                <p className="font-semibold mt-2">Price: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price)}</p>
                <p className="text-sm text-gray-500">Stock: {stock}</p>
            </div>
            {isHovered && (
                <div className="p-4 flex justify-between border-t">
                    <button
                        onClick={handleEdit}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    )
}

export default Card
