import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import User from './User';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<User userId="facebook" />);
