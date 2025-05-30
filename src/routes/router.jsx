import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Login from "../pages/auth/Login";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'jobs',
                element: <Jobs />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: '/auth',
                element: <AuthLayout />,
                children: [
                    {
                        path: 'login',
                        element: <Login />
                    },
                    {
                        path: 'register',
                        element: <div>Register Page</div>
                    },
                    {
                        path: 'forgot-password',
                        element: <div>Forgot Password Page</div>
                    }]
            }
        ],
        errorElement: <NotFound />
    },
]);




export default router