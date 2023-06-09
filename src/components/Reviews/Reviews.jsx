import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noImagePlaceholder from 'images/no-image-placeholder.jpg';
import * as API from 'services/api';
import {
  ReviewsWrapper,
  ReviewsList,
  ReviewsItem,
  ReviewsContainer,
  ReviewAuthor,
} from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await API.reviewsMovie(id);
        setReviews(res.results);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id]);

  return (
    <ReviewsWrapper>
      {reviews.length !== 0 ? (
        <ReviewsList>
          {reviews.map(item => (
            <ReviewsItem key={item.id}>
              <img
                src={
                  item.author_details.avatar_path
                    ? item.author_details.avatar_path.includes('http')
                      ? noImagePlaceholder
                      : `https://image.tmdb.org/t/p/original${item.author_details.avatar_path}`
                    : noImagePlaceholder
                }
                alt={item.author}
                width="100"
              />
              <ReviewsContainer>
                <ReviewAuthor>
                  {item.author ?? item.author_details.username ?? 'Author'}
                </ReviewAuthor>
                <span>{item.content ?? 'No comments'}</span>
              </ReviewsContainer>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <p>Sorry, but the information is missing</p>
      )}
    </ReviewsWrapper>
  );
}
