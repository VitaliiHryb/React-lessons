import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Products from './Products';
import Home from './Home';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/products">Products</Link>
          </li>
        </ul>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products" component={Products} />
      </BrowserRouter>
    </div>
  );
};

export default App;

// "TypeError: Cannot read property 'textContent' of null\n

/*
<Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/products">
    <Products />
  </Route>
</Switch>;
*/
