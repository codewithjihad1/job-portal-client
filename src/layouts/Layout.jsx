import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <div className="container mx-auto">
                    <p>© {new Date().getFullYear()} Job Portal. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
