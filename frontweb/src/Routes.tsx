import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Movies from "pages/Movies";
import Reviews from "pages/Reviews";
import { Router, Route, Switch } from 'react-router-dom';
import history from "utils/history";

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies" exact>
          <Movies/>
        </Route>
        <Route path="/reviews" exact>
          <Reviews />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
