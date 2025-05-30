

import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
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
      ],
      errorElement: <NotFound />
    } 
  ]);

  return <RouterProvider router={router} />;
}

export default App;
