// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import App from './App'; // Import the App component
import Projects from './Projects';
import Contact from './Contact';
import './index.css'; // Assuming you have some CSS to style your app

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <App /> }, // Home page
      { path: '/projects', element: <Projects /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
