import { useLocation } from 'react-router-dom';
import noImagePlaceholder from 'images/no-image-placeholder.jpg';
import PropTypes from 'prop-types';
import { Container } from 'components/App/App.styled';
import {
  MoviesList,
  MoviesItem,
  LinkMovie,
  MovieWrapper,
  MovieText,
} from './Trending.styled';

export default function TrendingList({ items }) {
  const location = useLocation();

  return (
    <Container>
      <MoviesList>
        {items.map(item => {
          return (
            <MoviesItem key={item.id}>
              <LinkMovie to={`/movies/${item.id}`} state={{ from: location }}>
                <MovieWrapper>
                  <div>
                    <img
                      loading="lazy"
                      src={
                        item.poster_path
                          ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                          : noImagePlaceholder
                      }
                      alt={item.title ?? item.name ?? item.original_title}
                      width="200"
                      height="300"
                    />
                  </div>
                  <MovieText>
                    {item.title ?? item.name ?? item.original_title ?? 'Title'}
                  </MovieText>
                </MovieWrapper>
              </LinkMovie>
            </MoviesItem>
          );
        })}
      </MoviesList>
    </Container>
  );
}

TrendingList.propTypes = {
  items: PropTypes.array.isRequired,
};
