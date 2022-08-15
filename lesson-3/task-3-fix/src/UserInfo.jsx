import React from 'react';
import Avatar from './Avatar';

const UserInfo = props => {
  return (
    <div className="user-info">
      <Avatar avatarUrl={props.user.avatarUrl} author={props.user.author} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
};

export default UserInfo;
