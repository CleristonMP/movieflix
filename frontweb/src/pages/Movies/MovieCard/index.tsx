import { Movie } from 'types/movie';
import './styles.css';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="moviecard-ctr base-card">
      <div className="moviecard-img-ctr">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="moviecard-txt-ctr">
        <h2>{movie.title}</h2>
        <p className="moviecard-year">{movie.year}</p>
        <p className="moviecard-subtitle">O olho do inimigo está se movendo.</p>
      </div>
    </div>
  );
};

export default MovieCard;
