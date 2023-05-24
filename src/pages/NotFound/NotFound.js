import { ErrorWrapper, ErrorText, ErrorLink } from './NotFound.styled';

export default function NotFound() {
  return (
    <ErrorWrapper>
      <ErrorText>
        Sorry, but page Not Found,{' '}
        <ErrorLink to="/">&gt;click here&lt;</ErrorLink> to return.{' '}
      </ErrorText>
    </ErrorWrapper>
  );
}
