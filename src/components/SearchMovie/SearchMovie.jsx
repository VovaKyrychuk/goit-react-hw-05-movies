import PropTypes from 'prop-types';
import { FormWrapper, Form, FormInput, Button } from './SearchMovie.styled';

export default function SearchMovie({ title, onChange, onSubmit }) {
  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
        <FormInput
          type="text"
          name="title"
          autoComplete="off"
          value={title}
          autoFocus
          onChange={onChange}
        />
        <Button type="submit">Search</Button>
      </Form>
    </FormWrapper>
  );
}

SearchMovie.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
