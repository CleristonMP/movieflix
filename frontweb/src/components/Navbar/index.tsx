import { AuthContext } from "AuthContext";
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated } from 'utils/auth';
import history from 'utils/history';
import { removeAuthData } from 'utils/storage';
import './styles.css';

const Navbar = () => {
  const {authContextData, setAuthContextData} = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({ authenticated: false });
    history.replace('/');
  };

  return (
    <nav className="navbar justify-content-between bg-primary custom-navbar px-2 px-md-4 px-xl-5">
      <div className="container-fluid custom-nav-container">
        <Link to="/movies" className="navbar-brand text-secondary custom-brand">
          MovieFlix
        </Link>
        {authContextData.authenticated ? (
          <button
            onClick={handleLogoutClick}
            className="btn btn-outline-secondary custom-btn"
            type="submit"
          >
            Sair
          </button>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
};

export default Navbar;
