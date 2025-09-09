import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/LoginPage';
import PrivateRoute from './PrivateRoute';
import DashboardLayout from '../components/layout/DashboardLayout';
import EquipmentPage from '../pages/EquipmentPage';
import Register from '../pages/RegisterPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin/*"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<EquipmentPage />} />
        <Route path="equipment" element={<EquipmentPage />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;