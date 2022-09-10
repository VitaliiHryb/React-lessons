import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dimentions from './Dimentions';
// import Home from './Home';

const Demo = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <div>
        <button className="btn" onClick={() => setIsVisible(true)}>
          Show
        </button>
        <button className="btn" onClick={() => setIsVisible(false)}>
          Hide
        </button>
      </div>
      {isVisible && <Dimentions />}
    </div>
  );
};

export default Demo;
