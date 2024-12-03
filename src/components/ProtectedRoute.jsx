import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const admin = JSON.parse(sessionStorage.getItem('admin'));
    return admin ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
