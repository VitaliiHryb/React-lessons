import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import UsersList from './UsersList';

const root = ReactDOM.createRoot(document.getElementById('root'));

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
];

// const element = <User users={users} />;
// const element = <div>Hello</div>;

// root.render(<UserList users={users} />);
root.render(<UsersList users={users} />);
