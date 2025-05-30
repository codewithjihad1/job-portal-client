import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Job Portal</Link>
                <div className="space-x-4">
                    <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
                    <NavLink to="/jobs" className="hover:text-gray-300">Jobs</NavLink>
                    <NavLink to="/about" className="hover:text-gray-300">About</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
