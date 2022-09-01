import React from 'react';

const UserMenu = ({ userData }) => {
  // если данные еще не подгрузились
  if (!userData) {
    return null;
  }

  const { name, avatar_url } = userData;

  // если данные подгрузились
  return (
    <div className="menu">
      <span className="menu__greeting">{name}</span>
      <img src={avatar_url} alt="User avatar" className="menu__avatar" />
    </div>
  );
};

export default UserMenu;
