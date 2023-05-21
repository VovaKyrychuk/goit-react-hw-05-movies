import PropTypes from 'prop-types';
import noImagePlaceholder from 'images/no-image-placeholder.jpg';

export default function MovieDetailsComponent({ data }) {
  if (data) {
    return (
      <div>
        <div>
          <img
            src={
              data.poster_path
                ? `https://image.tmdb.org/t/p/original${data.poster_path}`
                : noImagePlaceholder
            }
            alt={data.title}
            width="300"
            height="450"
            loading="lazy"
          />
        </div>
        <div>
          <h2>{data.title ?? 'Name'}</h2>
          <p>Release date {data.release_date}</p>
          <p>User Score: {Math.round(data.vote_average * 10) ?? 0}%</p>
          <h3>Overview</h3>
          <p>{data.overview ?? 'Overview'}</p>
          <h3>Genres</h3>
          <p>{data.genres.map(item => item.name).join(' ') ?? 'Genres'}</p>
        </div>
      </div>
    );
  }
}

MovieDetailsComponent.propTypes = {
  data: PropTypes.object.isRequired,
};
