import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noImagePlaceholder from 'images/no-image-placeholder.jpg';

import * as API from 'services/api';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.castMovie(id);
        setCast(res.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map(item => (
            <li key={item.cast_id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                    : noImagePlaceholder
                }
                alt={item.character ? item.character : item.original_name}
                width="150"
              />
              <div>
                <p>Name</p>
                <p>{item.name ?? item.original_name ?? 'Name'}</p>
                <p>Character</p>
                <p>
                  {item.character
                    ? item.character
                    : item.original_name ?? 'Character'}
                </p>
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
