import { useEffect, useState } from 'react';
import * as API from 'services/api';
import TrendingList from 'components/Trending';

export default function Home() {
  // Створення стану для збереження списку популярних фільмів
  const [trendingMovies, setTrendingMovies] = useState([]);

  // Використання useEffect для виклику функції після монтування компонента
  useEffect(() => {
    // Створення асинхронної функції fetch для отримання популярних фільмів
    const fetch = async () => {
      try {
        // Виклик API.searchTrending() для отримання популярних фільмів
        const res = await API.searchTrending();
        // Оновлення стану trendingMovies зі списком популярних фільмів
        setTrendingMovies(res.results);
        return;
      } catch (error) {
        // Обробка помилки, якщо щось пішло не так під час отримання популярних фільмів
        console.log(error);
      }
    };
    // Виклик функції fetch для отримання популярних фільмів при завантаженні компонента
    fetch();
  }, []); // Порожній масив залежностей означає, що ефект буде викликаний лише раз після монтування компонента

  // Повернення JSX-розмітки компонента Home
  return (
    <>
      <TrendingList items={trendingMovies} />{' '}
      {/* Рендеринг компонента TrendingList з передачею списку популярних фільмів */}
    </>
  );
}
