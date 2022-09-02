import React from 'react';
import Dialog from './Dialog';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  showDialog = () => {
    this.setState({ isOpen: true });
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const elem = (
      <p>
        Use immutable array methods to work with data. It will help to avoid
        bugs
      </p>
    );

    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>
          Show dialog
        </button>
        {this.state.isOpen && (
          <Dialog onClose={this.onClose} title={'Recommendation'}>
            {elem}
          </Dialog>
        )}
      </div>
    );
  }
}

export default App;

/*
<!-- App -->
<div class="app">
  <button class="btn">Show dialog</button>
  <!-- Dialog -->
  <div class="dialog">
    <div class="dialog__heading">
      <h4 class="dialog__title">Recommendation</h4>
      <button class="dialog__close-btn">+</button>
    </div>
    <div class="dialog__content">
      <!-- Dialog children -->
      <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
    </div>
  </div>
</div>
*/
