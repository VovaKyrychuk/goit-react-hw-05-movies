import { useLocation } from 'react-router-dom';
import noImagePlaceholder from 'images/no-image-placeholder.jpg';
import PropTypes from 'prop-types';

export default function TrendingList({ items }) {
  const location = useLocation();

  return (
    <div>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <link to={`/movies/${item.id}`} state={{ from: location }}>
                <div>
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
                  <p>
                    {item.title ?? item.name ?? item.original_title ?? 'Title'}
                  </p>
                </div>
              </link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

TrendingList.propTypes = {
  items: PropTypes.array.isRequired,
};
