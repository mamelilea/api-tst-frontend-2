import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/create-product" element={<CreateProduct />} />
                <Route path="/edit-product/:id" element={<EditProduct />} />
            </Routes>
        </div>
    );
}

export default App;
