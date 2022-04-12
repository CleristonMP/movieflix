import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated, TokenData } from 'utils/auth';
import history from 'utils/history';
import { removeAuthData } from 'utils/storage';
import './styles.css';

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

const Navbar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({ authenticated: false });
    history.replace('/');
  };

  return (
    <nav className="navbar justify-content-between bg-primary custom-navbar px-2 px-md-4 px-xl-5">
      <div className="container-fluid custom-nav-container">
        <Link to="/movies" className="navbar-brand text-secondary custom-brand">
          MovieFlix
        </Link>
        {authData.authenticated ? (
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
