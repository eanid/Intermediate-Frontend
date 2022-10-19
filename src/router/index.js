import React from "react";
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import LoginNew from '../pages/LoginNew';
import Notfound from "../pages/NotFound";

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (token) {
        return children
    } else {
        return <Navigate to='/login' />
    }
}

const PrivateRouteDua = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return <Outlet />
    } else {
        return <Navigate to='/login' />
    }

}

const router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRouteDua />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/about" element={<PrivateRouteDua />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/login">
                    <Route index element={<Login />} />
                </Route>
                <Route path="/loginnew">
                    <Route index element={<LoginNew />} />
                </Route>
                <Route path="/register">
                    <Route index element={<Register />} />
                </Route>
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter >
    )
}

export default router;