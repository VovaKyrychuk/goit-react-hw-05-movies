import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ErrorWrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

export const ErrorText = styled.span`
  font-size: 18px;
  font-weight: 300;
`;

export const ErrorLink = styled(Link)`
  color: blue;
  &:hover {
    color: teal;
  }
`;
