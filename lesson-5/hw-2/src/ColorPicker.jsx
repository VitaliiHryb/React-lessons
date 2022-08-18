import React, { Component } from 'react';
import './index.scss';

/* <div>
  <div class="picker__title">Red</div>
  <div>
    <button class="picker__button picker__button_coral"></button>
    <button class="picker__button picker__button_aqua"></button>
    <button class="picker__button picker__button_bisque"></button>
  </div>
</div>; */

// coral, aqua, bisque.
const colors = {
  CORAL: 'Coral',
  AQUA: 'Aqua',
  BISQUE: 'Bisque',
};

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isColor: '',
    };
  }

  setValue = value => {
    this.setState({ isColor: value });
  };

  reset = () => {
    this.setState({
      isColor: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.isColor}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.setValue(colors.CORAL)}
            onMouseOut={this.reset}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.setValue(colors.AQUA)}
            onMouseOut={this.reset}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.setValue(colors.BISQUE)}
            onMouseOut={this.reset}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
