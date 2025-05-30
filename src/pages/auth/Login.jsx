import React from 'react'
import StrongPassword from './re-components/StrongPassword'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <form className="w-full sm:w-[40%] mx-auto bg-white dark:bg-gray-800 rounded-lg sm:py-6 sm:px-8 p-4 flex items-center justify-center flex-col gap-5 shadow-md transition-colors duration-300">
                <h3 className="text-[1.8rem] font-[700] text-gray-900 dark:text-white transition-colors duration-300">Sign in</h3>
                {/* Email input */}
                <div className="w-full md:w-[80%]">
                    <label
                        htmlFor="email"
                        className="text-[15px] text-text dark:text-gray-300 font-[400] transition-colors duration-300"
                    >
                        Email <span className="text-red-500 dark:text-red-400">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your email"
                        className="border-border dark:border-gray-600 border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary dark:focus:border-primary-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                        required
                    />
                </div>

                <StrongPassword />

                <button className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors duration-300">
                    Login
                </button>                <div className="text-center mt-4">
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Don't have an account? <a href="/signup" className="text-primary-600 dark:text-primary-400 hover:underline transition-colors duration-300">Sign Up</a></p>
                </div>

                {/* Divider */}
                <div className="w-full my-1 flex items-center gap-3">
                    <hr className="w-[45%] bg-gray-300 dark:bg-gray-600 h-[2px] transition-colors duration-300" />
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">or</p>
                    <hr className="w-[45%] bg-gray-300 dark:bg-gray-600 h-[2px] transition-colors duration-300" />
                </div>

                <div>
                    <button className="flex items-center justify-center py-2 px-4 gap-4 border border-gray-300 dark:border-gray-600 rounded-lg w-full text-[1rem] font-[500] text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300">
                        <FcGoogle className="text-[2rem]" />
                        Login with Google
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login
