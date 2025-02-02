import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Main from '../components/Main';
import ProductList from '../components/ProductList';
import MyAccount from '../components/MyAccount';
import NotFoundPage from '../components/NotFoundPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main content={<ProductList />} />} />
        <Route path="/account" element={<Main content={<MyAccount />} />} />
        <Route path="*" element={<Main content={<NotFoundPage />} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
