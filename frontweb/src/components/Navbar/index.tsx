import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar justify-content-between bg-primary custom-navbar px-2 px-md-4 px-xl-5">
      <div className="container-fluid">
        <h4 className="navbar-brand text-secondary custom-brand">MovieFlix</h4>
        <button className="btn btn-outline-secondary custom-btn" type="submit">Sair</button>
      </div>
    </nav>
  );
};

export default Navbar;
