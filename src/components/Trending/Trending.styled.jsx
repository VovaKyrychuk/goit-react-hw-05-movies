import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkMovie = styled(Link)`
  text-decoration: none;
  color: #242424;
  transition: color 250ms ease-in-out;
  &:hover {
    color: teal;
  }
`;

export const MoviesList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  margin: 0;
`;

export const MoviesItem = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  text-align: center;
`;
export const MovieWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 250ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 15px teal;
  }
`;

export const MovieText = styled.p`
  padding: 10px;
  margin: 0;
  background-color: #f8f8f8;
`;
