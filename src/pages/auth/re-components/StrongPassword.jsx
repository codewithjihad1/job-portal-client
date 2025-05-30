
import React, { useState } from "react";

// react icons
import { IoCheckmarkDoneCircleSharp, IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

const StrongPassword = () => {

    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [StrongPassword, setStrongPassword] = useState("");
    const [signal, setSignal] = useState("");

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setStrongPassword(password);

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (!hasLowerCase) {
            setSignal("lowercase-error");
        } else if (!hasUpperCase) {
            setSignal("uppercase-error");
        } else if (!hasNumber) {
            setSignal("number-error");
        } else if (!hasSymbol) {
            setSignal("symbol-error");
        } else if (password.length < 8) {
            setSignal("length-error");
        } else {
            setSignal("strong");
        }
    };

    const getErrorText = () => {
        switch (signal) {
            case "length-error":
                return "Password must be at least 8 characters long.";
            case "uppercase-error":
                return "Password must contain at least one uppercase letter.";
            case "lowercase-error":
                return "Password must contain at least one lowercase letter.";
            case "number-error":
                return "Password must contain at least one number.";
            case "symbol-error":
                return "Password must contain at least one special character.";
            default:
                return "Wow! Very strong password.";
        }
    }; return (
        <div className="w-full md:w-[80%]">
            <label
                htmlFor="password"
                className="text-[15px] text-text dark:text-gray-300 font-[400] transition-colors duration-300"
            >
                Password <span className="text-red-500 dark:text-red-400">*</span>
            </label>
            <div className="w-full relative">
                <input
                    type={isEyeOpen ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    className="peer border-border dark:border-gray-600 border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-primary-600 dark:focus:border-primary-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                    required
                />                {StrongPassword !== "" && (
                    <p
                        className={`${signal === "normal"
                                ? "text-red-500 dark:text-red-400"
                                : "text-green-600 dark:text-green-400"
                            } text-[0.9rem] mt-1 transition-colors duration-300`}
                    >
                        {signal === "strong" ? (
                            <p className="text-green-600 dark:text-green-400 flex items-center gap-[5px] transition-colors duration-300">
                                <IoCheckmarkDoneCircleSharp className="text-[1.1rem]" />
                                {getErrorText()}
                            </p>
                        ) : (
                            <p className="text-red-500 dark:text-red-400 flex items-center gap-[5px] transition-colors duration-300">
                                <MdErrorOutline className="text-[1.1rem]" />
                                {getErrorText()}
                            </p>
                        )}
                    </p>
                )}

                {isEyeOpen ? (
                    <IoEyeOutline
                        className="absolute top-4 right-4 text-[1.5rem] text-gray-500 dark:text-gray-400 cursor-pointer transition-colors duration-300"
                        onClick={() => setIsEyeOpen(false)}
                    />
                ) : (
                    <IoEyeOffOutline
                        className="absolute top-4 right-4 text-[1.5rem] text-gray-500 dark:text-gray-400 cursor-pointer transition-colors duration-300"
                        onClick={() => setIsEyeOpen(true)}
                    />
                )}
            </div>
        </div>
    );
};

export default StrongPassword;
