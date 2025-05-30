import React from 'react';

const NotFound = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <h2 className="text-2xl mb-4">Page Not Found</h2>
            <p className="mb-6">The page you are looking for doesn't exist or has been moved.</p>
            <a href="/" className="px-4 py-2 bg-blue-500 text-white rounded">
                Go Home
            </a>
        </div>
    );
};

export default NotFound;
