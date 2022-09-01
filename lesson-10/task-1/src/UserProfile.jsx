import React from 'react';

class UserProfile extends React.Component {
  render() {
    if (!this.props.userData) {
      return null;
    }
    const { name, location, avatar_url } = this.props.userData;

    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default UserProfile;

/*
<div className="page">
  <header className="header">
    <!-- UserMenu -->
    <div className="menu">
      <span className="menu__greeting">
        Hello, GitHub
      </span>
      <img
        alt="User Avatar"
        src="https://avatars1.githubusercontent.com/u/9919?v=4"
        className="menu__avatar"
      >
    </div>
  </header>
  <!-- UserProfile -->
  <div className="user">
    <img
      alt="User Avatar"
      src="https://avatars1.githubusercontent.com/u/9919?v=4"
      className="user__avatar"
    >
    <div className="user__info">
      <span className="user__name">GitHub</span>
      <span className="user__location">San Francisco, CA</span>
    </div>
  </div>
</div>
*/
