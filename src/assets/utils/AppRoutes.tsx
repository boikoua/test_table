import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Main from '../components/Main';
import ProductList from '../components/ProductList';
import MyAccount from '../components/MyAccount';
import ErrorPage from '../components/ErrorPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main content={<ProductList />} />} />
        <Route path="/account" element={<Main content={<MyAccount />} />} />
        <Route path="*" element={<Main content={<ErrorPage />} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
