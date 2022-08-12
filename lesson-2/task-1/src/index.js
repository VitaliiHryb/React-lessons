import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const element = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Submit</button>
    </div>
  </>
);

root.render(element);

{
  /* <h1>Search Form</h1>
<div>
  <input type="text" />
  <button>Search</button>
</div> */
}
