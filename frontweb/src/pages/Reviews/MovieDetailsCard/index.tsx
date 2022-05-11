import './styles.css';

const MovieDetailsCard = () => {
  return (
    <div className="movie-details-ctr base-card">
      <div className="movie-details-img">
        <img src="https://picsum.photos/260/163" alt="Foto aleatória" />
      </div>
      <div className="movie-details-infos">
        <h2>O Retorno do Rei</h2>
        <p className="movie-details-year">2013</p>
        <p className="movie-details-subtitle">
          O olho do inimigo está se movendo.
        </p>
      </div>
      <div className="movie-details-synopsis">
        <p>
          O confronto final entre as forças do bem e do mal que lutam pelo
          controle do futuro da Terra Média se aproxima. Sauron planeja um
          grande ataque a Minas Tirith, capital de Gondor, o que faz com que
          Gandalf e Pippin partam para o local na intenção de ajudar a
          resistência. Um exército é reunido por Theoden em Rohan, em mais uma
          tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e
          Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o
          anel.
        </p>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
