import { Route, Routes } from 'react-router-dom';
import DashBoard from 'containers/DashBoard';
import Products from 'containers/Products';

export const AppRoutes = (
  <Routes>
    <Route path="/" element={<DashBoard />} />
    <Route path="/:other" element={<DashBoard />} />
    <Route path="/products" element={<Products />} />
  </Routes>);