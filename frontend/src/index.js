import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CabinetPage from './pages/CabinetPage/CabinetPage';
import HomePage from './pages/HomePage/HomePage';
import TestPage from './pages/TestPage/TestPage';
import LabsPage from './pages/LabsPage/LabsPage';
import ActivitiesPage from './pages/ActivitiesPage/ActivitiesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/cab',
    element: <CabinetPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
  {
    path: '/labs',
    element: <LabsPage />,
  },
  {
    path: '/activities',
    element: <ActivitiesPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();