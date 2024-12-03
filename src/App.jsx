import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={
                    <ProtectedRoute>
                        <ProductList />
                    </ProtectedRoute>
                } />
                <Route
                    path="/create"
                    element={
                        <ProtectedRoute>
                            <CreateProduct />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/edit/:id"
                    element={
                        <ProtectedRoute>
                            <EditProduct />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div >
    );
}

export default App;
