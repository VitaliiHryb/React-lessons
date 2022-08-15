import React from 'react';
import Greeting from './Greeting';

function userJohnDoe() {
  return (
    <Greeting
      firstName="John"
      lastName="Doe"
      birthDate={new Date('2001-01-01T11:11:11.819Z')}
    />
  );
}

export default userJohnDoe;
