import PropTypes from 'prop-types';

export default function SearchMovie({ title, onChange, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          autoComplete="off"
          value={title}
          autoFocus
          onChange={onChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

SearchMovie.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
