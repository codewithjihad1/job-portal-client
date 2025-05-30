import React from 'react'

const Signup = () => {
    return (
        <div>
            {/* Name input */}
            <div className="w-full md:w-[80%]">
                <label
                    htmlFor="name"
                    className="text-[15px] text-text font-[400]"
                >
                    Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    className="border-border border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
                    required
                />
            </div>

            {/* Photo Url */}
            <div className="w-full md:w-[80%]">
                <label
                    htmlFor="photoUrl"
                    className="text-[15px] text-text font-[400]"
                >
                    Photo URL <span className="text-red-500">*</span>
                </label>
                <input
                    type="url"
                    name="photoUrl"
                    id="photoUrl"
                    placeholder="Your photo URL"
                    className="border-border border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
                    required
                />
            </div>

            {/* Email input */}
            <div className="w-full md:w-[80%]">
                <label
                    htmlFor="email"
                    className="text-[15px] text-text font-[400]"
                >
                    Email <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    className="border-border border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
                    required
                />
            </div>

            {/* password */}
            <StrongPassword />

            {/* Signup button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Sign Up
            </button>
        </div>
    )
}

export default Signup
