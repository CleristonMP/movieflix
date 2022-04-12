import { Link } from "react-router-dom";
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar justify-content-between bg-primary custom-navbar px-2 px-md-4 px-xl-5">
      <div className="container-fluid custom-nav-container">
        <Link to="/movies" className="navbar-brand text-secondary custom-brand">MovieFlix</Link>
        <button className="btn btn-outline-secondary custom-btn" type="submit">Sair</button>
      </div>
    </nav>
  );
};

export default Navbar;
