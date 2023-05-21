import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from 'services/api';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  let count = 0;

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
    <div>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <img
                src={
                  item.author_details.avatar_path
                    ? item.author_details.avatar_path.includes('http')
                      ? `https://picsum.photos/200/300?random=${(count += 1)}`
                      : `https://image.tmdb.org/t/p/original${item.author_details.avatar_path}`
                    : `https://picsum.photos/200/300?random=${(count += 1)}`
                }
                alt={item.author}
                width="100"
              />
              <div>
                <p>{item.author ?? item.author_details.username ?? 'Author'}</p>
                <span>{item.content ?? 'No comments'}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, but the information is missing</p>
      )}
    </div>
  );
}
