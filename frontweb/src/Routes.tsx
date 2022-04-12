import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Reviews from 'pages/Reviews';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <PrivateRoute path="/movies">
          <Movies />
        </PrivateRoute>
        <PrivateRoute path="/reviews">
          <Reviews />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
