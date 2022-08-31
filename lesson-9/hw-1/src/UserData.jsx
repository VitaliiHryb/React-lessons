import React from 'react';
import UserList from './UsersList';

const users = [
  { id: 'id-0', name: 'John', age: 29 },
  { id: 'id-1', name: 'Andrii', age: 17 },
  { id: 'id-2', name: 'Vitalii', age: 27 },
  { id: 'id-3', name: 'Vasylii', age: 37 },
  { id: 'id-4', name: 'Mary', age: 22 },
  { id: 'id-5', name: 'Vlad', age: 20 },
];

const UserData = () => {
  return <UsersList users={users} />;
};

export default UserData;
