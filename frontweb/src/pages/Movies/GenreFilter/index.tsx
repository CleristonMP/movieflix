import './styles.css';

const GenreFilter = () => {
  return (
    <div className="genre-filter-ctr base-card">
      <select name="genres" id="genres">
        <option value="action">Ação</option>
        <option value="adventure">Aventura</option>
        <option value="sci-fi">Ficção científica</option>
      </select>
    </div>
  );
};

export default GenreFilter;
