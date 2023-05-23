import { useState, useMemo } from 'react';
import { Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import Loading from 'components/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { Container } from 'components/App/App.styled';
import { BackLink, LinkDetails, LinksWrapper } from './MoviesDetails.styled';

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
      <Container>
        <BackLink to={backLink}>
          <span>Back to Movies</span>
        </BackLink>

        {status === 'Released' ? (
          <>
            <MovieDetails data={data} />
            <hr />
            <LinksWrapper>
              <LinkDetails to="cast" state={{ from: backLink }}>
                Cast
              </LinkDetails>
              <LinkDetails to="reviews" state={{ from: backLink }}>
                Reviews
              </LinkDetails>
            </LinksWrapper>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </>
        ) : (
          <p>Sorry, but page Not Found</p>
        )}
      </Container>
    </main>
  );
}
