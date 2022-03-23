import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar justify-content-between bg-primary py-2 px-2">
      <div className="container-fluid">
        <h4 className="navbar-brand text-secondary custom-brand">MovieFlix</h4>
        <button className="btn btn-outline-secondary custom-btn" type="submit">Sair</button>
      </div>
    </nav>
  );
};

export default Navbar;
