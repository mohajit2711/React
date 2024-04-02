import React from 'react'
import { Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { Dashboard } from './dashboard';

export const PrivateRoute = () => {
    return auth.currentUser !== null ? <Dashboard /> : <Navigate to="/admin" />;
}