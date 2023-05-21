import { useState, useMemo } from 'react';
import { Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import Loading from 'components/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';

import * as API from 'services/api';

export default function MoviesDetails() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('');

  const { id } = useParams();

  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useMemo(() => {
    const fetch = async () => {
      try {
        const res = await API.searchMovieId(id);
        setData(res);
        setStatus(res.status);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id]);

  return (
    <main>
      <div>
        <link to={backLink}>
          <span>Back to Movies</span>
        </link>

        {status === 'Released' ? (
          <>
            <MovieDetails data={data} />
            <hr />
            <div>
              <link to="cast" state={{ from: backLink }}>
                Cast
              </link>
              <link to="reviews" state={{ from: backLink }}>
                Reviews
              </link>
            </div>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </>
        ) : (
          <p>Sorry, but page Not Found</p>
        )}
      </div>
    </main>
  );
}
