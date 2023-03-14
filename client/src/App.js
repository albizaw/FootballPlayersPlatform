import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import routes
import Homepage from './routes/Homepage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import PageNotFound from './routes/PageNotFound';

// router
const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/signin', element: <LoginPage /> },
  { path: '/signup', element: <RegisterPage /> },
  { path: '/*', element: <PageNotFound /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
