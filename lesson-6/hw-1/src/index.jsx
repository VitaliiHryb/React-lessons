import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Status from './Status';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Status isOnline={true} />);
