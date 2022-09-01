import React from 'react';
import UserForm from './UserForm';

function Profile({ userData, handleChange }) {
  return (
    <div className="column">
      <UserForm userData={userData} handleChange={handleChange} />
    </div>
  );
}

export default Profile;

// В файле src/Profile.jsx, опиши компоненту,
// которая принимает объект пользователя в свойстве userData
// ({ firstName: 'John', lastName: 'Doe' }) и отрисовует компоненту UserForm
