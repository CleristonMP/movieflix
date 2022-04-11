import { Link } from 'react-router-dom';

import './styles.css';

const Movies = () => {
  /*
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/movies',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);
  */

  return (
    <div className="container px-3 mx-1 px-md-4 mx-md-3 px-xl-5">
      <div className="title-container">
        <h1>Tela listagem de filmes</h1>
      </div>
      <div className="list-movies-container">
        <Link to="link">Acessar /movies/1</Link>
        <Link to="link">Acessar /movies/2</Link>
      </div>
    </div>
  );
};

export default Movies;
