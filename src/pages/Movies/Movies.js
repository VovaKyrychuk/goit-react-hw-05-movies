import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchMovie from 'components/SearchMovie';
import TrendingList from 'components/Trending';
import * as API from 'services/api';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get('title') ?? '';
  const [title, setTitle] = useState(() => movieTitle ?? '');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!movieTitle) return;
    const fetch = async () => {
      try {
        const res = await API.searchMovieTitle(movieTitle);
        if (res.total_results === 0) {
          setMovies([]);
          return;
        }
        setMovies(res.results);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [movieTitle]);

  const onSubmit = e => {
    e.preventDefault();
    if (!title.trim()) {
      setMovies([]);
      return;
    }
    const nextParams = title !== '' ? { title } : {};
    setSearchParams(nextParams);
  };

  const onChange = e => {
    setTitle(e.target.value);
  };

  return (
    <main>
      <div>
        <SearchMovie title={title} onChange={onChange} onSubmit={onSubmit} />
        {movies.length > 0 ? (
          <TrendingList items={movies} />
        ) : (
          <p>Please, enter your request.</p>
        )}
      </div>
    </main>
  );
}
