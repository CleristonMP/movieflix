import { Link } from 'react-router-dom';

import './styles.css';

const Movies = () => {
  return (
    <div className="container px-3 mx-1 px-md-4 mx-md-3 px-xl-5">
      <div className="title-container">
        <h1>Tela listagem de filmes</h1>
      </div>
      <div className="list-movies-container">
        <Link to="/movies/1">Acessar /movies/1</Link>
        <Link to="/movies/2">Acessar /movies/2</Link>
      </div>
    </div>
  );
};

export default Movies;
