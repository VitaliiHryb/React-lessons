//  отрисует компоненту из src/App.jsx в #root элемент

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './clock.scss';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
