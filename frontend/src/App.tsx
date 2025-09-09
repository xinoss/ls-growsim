import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

const App = () => (
  <BrowserRouter basename="/">
    <AppRoutes />
  </BrowserRouter>
);

export default App;
