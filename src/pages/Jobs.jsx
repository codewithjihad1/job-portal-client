import React from 'react';

const Jobs = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Available Jobs</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search jobs..."
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="grid grid-cols-1 gap-4">
                {/* Sample job listings */}
                <div className="p-4 border rounded shadow">
                    <h2 className="text-xl font-semibold">Frontend Developer</h2>
                    <p className="text-gray-600">TechCorp Inc.</p>
                    <p className="mt-2">A great opportunity for an experienced frontend developer...</p>
                    <div className="mt-3 flex justify-between">
                        <span className="text-blue-600">$80k-$100k</span>
                        <button className="px-4 py-1 bg-blue-500 text-white rounded">Apply</button>
                    </div>
                </div>
                <div className="p-4 border rounded shadow">
                    <h2 className="text-xl font-semibold">Backend Engineer</h2>
                    <p className="text-gray-600">DataSystems Ltd.</p>
                    <p className="mt-2">Looking for a skilled backend engineer to join our team...</p>
                    <div className="mt-3 flex justify-between">
                        <span className="text-blue-600">$90k-$120k</span>
                        <button className="px-4 py-1 bg-blue-500 text-white rounded">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
