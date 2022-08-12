import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './search.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const style = { color: 'red', fontWeight: '700' };

const Search = props => {
  // console.log(props);
  return (
    <div className="search">
      <h1 className="search__title">
        {`Hello, ${props.name}. What to search for you?`}
      </h1>
      <div className="search__field">
        <input type="text" className="search__input" />
        <button className="search__button">Search</button>
      </div>
    </div>
  );
};

root.render(<Search name="Bob" />);
