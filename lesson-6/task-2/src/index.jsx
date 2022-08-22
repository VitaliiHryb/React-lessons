import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Mailbox from './Mailbox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Mailbox unreadMessages={[]} />);
