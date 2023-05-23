import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const ImgThumb = styled.div`
  border-radius: 10px;
  overflow: hidden;
  flex: 0 0 300px;
`;

export const MovieTitle = styled.h2`
  margin: 0;
  font-size: 36px;
  text-align: center;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 30px 0;
`;

export const LinkDetails = styled(Link)`
  position: relative;
  text-decoration: none;
  font-size: 16px;
  padding: 5px 15px 5px 15px;
  background-color: #f8f8f8;
  border-radius: 10px;
  color: #242424;
  &:hover {
    color: teal;
  }
`;

export const BackLink = styled(Link)`
  display: inline-block;
  position: relative;
  text-decoration: none;
  padding: 5px 15px 5px 15px;
  margin: 15px 0;
  background-color: #f8f8f8;
  border-radius: 10px;
  color: #242424;
  &:hover {
    color: teal;
  }
`;
