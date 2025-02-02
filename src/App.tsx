import { useEffect, useState } from 'react';
import './App.scss';
import Header from './assets/components/Header';
import AppRoutes from './assets/utils/AppRoutes';

const API_URL = 'https://mammoth-testing-api.webinone.com/items';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных');
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  console.log(data.Items);

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
