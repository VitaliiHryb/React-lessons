import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Tom',
  author: 'Github',
  avatarUrl: 'https://miro.medium.com/max/555/1*Om2kCjnIJM4QT0wPqgdp2g.png',
};

const App = () => {
  return (
    <Comment
      author={userInfo}
      text="Good job"
      date={new Date('2019-01-01T11:32:19.566Z')}
    />
  );
};

export default App;
