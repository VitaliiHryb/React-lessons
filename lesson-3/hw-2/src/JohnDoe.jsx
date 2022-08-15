import React from 'react';
import Profile from './Greeting';

const userData = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};

function GreetingJohnDoe() {
  return <Profile userData={userData} />;
}

export default GreetingJohnDoe;
