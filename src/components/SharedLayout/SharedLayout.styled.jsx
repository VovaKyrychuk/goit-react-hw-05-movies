import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from 'components/Loader';

export default function SharedLayout() {
  return (
    <>
      <header>
        <div>
          <div>
            <title>Movie - DataBase</title>
          </div>
          <nav>
            <link to="/">Home</link>
            <link to="/movies">Movies</link>
          </nav>
        </div>
      </header>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}
