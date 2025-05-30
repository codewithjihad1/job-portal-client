import { Link, NavLink } from 'react-router';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md p-4 transition-colors duration-300">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">Job Portal</Link>
                <div className="flex items-center space-x-4">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-primary-600 dark:text-primary-400" : "hover:text-primary-600 dark:hover:text-primary-400"}>Home</NavLink>
                    <NavLink to="/jobs" className={({ isActive }) => isActive ? "text-primary-600 dark:text-primary-400" : "hover:text-primary-600 dark:hover:text-primary-400"}>Jobs</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary-600 dark:text-primary-400" : "hover:text-primary-600 dark:hover:text-primary-400"}>About</NavLink>
                    <NavLink to="/auth/login" className={({ isActive }) => isActive ? "text-primary-600 dark:text-primary-400" : "hover:text-primary-600 dark:hover:text-primary-400"}>Login</NavLink>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
