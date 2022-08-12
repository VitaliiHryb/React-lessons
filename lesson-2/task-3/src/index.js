import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderSeconds = time => {
  const seconds = new Date().getSeconds();
  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const textColor = seconds % 2 !== 0 ? '#fff' : '#000';
  const styles = {
    color: textColor,
    backgroundColor,
  };

  const element = (
    <div className="seconds" style={styles}>
      {seconds}
    </div>
  );

  root.render(element);
};

renderSeconds(new Date());

setInterval(() => renderSeconds(new Date()), 1000);

// should render following html

// <h1 class="title">Todo List</h1>
