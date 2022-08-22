import React from 'react';

function Logout({ onLogout }) {
  return (
    <button className="btn logout" onClick={onLogout}>
      Logout
    </button>
  );
}

export default Logout;
