import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavWrapper, Nav, Title, Link } from './SharedLayout.styled';

import Loading from 'components/Loader';

export default function SharedLayout() {
  return (
    <>
      <Header>
        <div>
          <NavWrapper>
            <div>
              <Title>Movie - DataBase</Title>
            </div>
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
            </Nav>
          </NavWrapper>
        </div>
      </Header>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}
