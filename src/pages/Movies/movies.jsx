import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
        <form onSubmit={onSubmit}>
          <input type="text" value={title} onChange={onChange} />
          <button type="submit">Search</button>
        </form>
        {movies.length > 0 ? (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        ) : (
          <p>Please enter your request.</p>
        )}
      </div>
    </main>
  );
}
