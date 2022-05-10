import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'utils/requests';
import GenreFilter from './GenreFilter';
import MovieCard from './MovieCard';
import Pagination from "./Pagination";

import './styles.css';

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div>
      <div className="movies-page-ctr">
        <GenreFilter />

        <div className="list-movies-ctr">
          <div className="row">
            {page?.content.map((movie) => (
              <div key={movie.id} className="col-sm-6 col-xl-3">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Movies;
