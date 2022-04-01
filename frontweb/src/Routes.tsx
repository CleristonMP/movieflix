import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Movies from "pages/Movies";
import Reviews from "pages/Reviews";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
