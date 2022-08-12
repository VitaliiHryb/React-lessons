import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const style = { color: 'red', fontWeight: '700' };

const element = (
  <main className="page">
    <form className="login-htmlForm">
      <h1 className="htmlForm-title">Profile</h1>
      <div className="htmlForm-control">
        <label className="htmlForm-label" htmlFor="name">
          Name
        </label>
        <input
          className="htmlForm-input"
          type="text"
          id="name"
          name="name"
          value="anonymous"
        />
      </div>
      <div className="htmlForm-control">
        <label className="htmlForm-label" id="age" htmlFor="age">
          Age
        </label>
        <input className="htmlForm-input" type="number" value="17" name="age" />
        <span style={{ style }}>To young</span>
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  </main>
);

root.render(element);
