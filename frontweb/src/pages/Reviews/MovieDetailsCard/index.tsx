import { Movie } from 'types/movie';

import './styles.css';

type Props = {
  movie: Movie;
};

const MovieDetailsCard = ({ movie }: Props) => {
  return (
    <div className="movie-details-ctr base-card">
      <div className="movie-details-img">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="movie-details-content">
        <div className="movie-details-infos">
          <h2>{movie.title}</h2>
          <p className="movie-details-year">{movie.year}</p>
          <p className="movie-details-subtitle">{movie.subTitle}</p>
        </div>
        <div className="movie-details-synopsis">
          <p>{movie.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
