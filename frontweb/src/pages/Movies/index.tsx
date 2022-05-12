import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'utils/requests';
import CardLoader from "./CardLoader";
import GenreFilter, { GenreFilterData } from './GenreFilter';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: GenreFilterData;
};

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
  const [isLoading, setIsLoading] = useState(false);

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { genre: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: GenreFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.filterData.genre?.id,
      },
    };

    setIsLoading(true);
    requestBackend(config)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [controlComponentsData]);

  return (
    <div>
      <div className="movies-page-ctr">
        <GenreFilter onSubmitFilter={handleSubmitFilter} />

        <div className="list-movies-ctr">
          <div className="row">
            {isLoading ? <CardLoader /> :
            page?.content.map((movie) => (
              <div key={movie.id} className="col-sm-6 col-xl-3">
                <Link to={`/movies/${movie.id}`}>
                  <MovieCard movie={movie} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Pagination
          forcePage={page?.number}
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Movies;
