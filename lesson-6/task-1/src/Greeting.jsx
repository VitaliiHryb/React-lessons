import React, { Component } from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

// check login user or not
const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default Greeting;

// const Greeting = props => {
//   const { isLoggedIn } = props;
//   // if (props.isLoggedIn) {
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// };
