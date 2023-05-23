import styled from 'styled-components';

export const ReviewsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  list-style: none;
  max-width: 100%;
`;

export const ReviewsItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  box-shadow: 0px 0px 4px #242424;
  overflow: hidden;
  border-radius: 5px;
  padding: 5px;
`;

export const ReviewsContainer = styled.div`
  padding: 0 20px 10px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ReviewAuthor = styled.span`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const NoRequest = styled.p`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;
