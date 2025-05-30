import { RouterProvider } from 'react-router';
import router from './routes/router';
import ThemeProvider from './context/ThemeProvider';

function App() {
  return <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>;
}

export default App;
