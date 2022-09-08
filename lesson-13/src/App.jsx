import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './Contacts';
import Products from './Products';
import Home from './Home';
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
