import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkMovie = styled(Link)`
  text-decoration: none;
  color: #242424;
  transition: color 250ms ease-in-out;
  &:hover {
    color: orangered;
  }
`;
