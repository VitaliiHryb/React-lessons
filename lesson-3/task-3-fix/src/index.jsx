import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

import './index.scss';
import Comment from './Comment.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const userInfo = {
  name: 'Tom',
  avatarUrl:
    'https://www.looper.com/img/gallery/20-epic-movies-like-avatar-you-need-to-watch-next/l-intro-1645555067.jpg',
};

root.render(
  <Comment
    user={userInfo}
    text="Good job"
    date={new Date('2019-01-01T11:32:19.566Z')}
  />,
);
