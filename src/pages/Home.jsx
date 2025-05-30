import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to Job Portal</h1>
            <p className="mb-4">Find your dream job or post job opportunities.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">For Job Seekers</h2>
                    <p>Browse thousands of job listings, create your profile, and apply with ease.</p>
                </div>
                <div className="p-4 border rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">For Employers</h2>
                    <p>Post job openings, review applications, and find the perfect candidates.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
