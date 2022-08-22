import React from 'react';

function Login({ onLogin }) {
  return (
    <button className="btn login" onClick={onLogin}>
      Login
    </button>
  );
}

export default Login;
