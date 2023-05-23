import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noImagePlaceholder from 'images/no-image-placeholder.jpg';
import * as API from 'services/api';
import {
  CastList,
  CastInfo,
  CastInfoConteiner,
  CastTitle,
  CastName,
} from './Cast.styled';

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
        <CastList>
          {cast.map(item => (
            <CastInfo key={item.cast_id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                    : noImagePlaceholder
                }
                alt={item.character ? item.character : item.original_name}
                style={{ width: '150px', height: '225px' }}
              />
              <CastInfoConteiner>
                <CastTitle>Name</CastTitle>
                <CastName>{item.name ?? item.original_name ?? 'Name'}</CastName>
                <CastTitle>Character</CastTitle>
                <CastName>
                  {item.character
                    ? item.character
                    : item.original_name ?? 'Character'}
                </CastName>
              </CastInfoConteiner>
            </CastInfo>
          ))}
        </CastList>
      ) : (
        <p>Sorry, but the information is missing</p>
      )}
    </div>
  );
}
