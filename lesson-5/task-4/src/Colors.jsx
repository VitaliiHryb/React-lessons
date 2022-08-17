import React, { Component } from 'react';
import './index.scss';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

// class GoodButton extends React.Component
class Colors extends Component {
  setBodyColor = color => {
    // console.log(e);
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          style={{ backgroundColor: RED }}
          onClick={() => this.setBodyColor(RED)}
          className="colors-button"
        />
        <button
          style={{ backgroundColor: GREEN }}
          onClick={() => this.setBodyColor(GREEN)}
          className="colors-button"
        />
        <button
          style={{ backgroundColor: BLUE }}
          onClick={() => this.setBodyColor(BLUE)}
          className="colors-button"
        />
      </div>
    );
  }
}

export default Colors;
