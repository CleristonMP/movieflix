import './styles.css';

const Movies = () => {
  return (
    <div className="container px-3 mx-1 px-md-4 mx-md-3 px-xl-5">
      <div className="title-container">
        <h1>Tela listagem de filmes</h1>
      </div>
      <div className="list-movies-container">
          <p>Acessar /movies/1</p>
          <p>Acessar /movies/2</p>
      </div>
    </div>
  );
};

export default Movies;
