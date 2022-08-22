import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isSpinner: false,
    };
  }

  login = () => {
    this.setState({
      isLoggedIn: true,
    });
    this.showSpinner();
  };

  logout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  showSpinner = () => {
    this.setState({
      isSpinner: true,
    });
    setTimeout(
      () =>
        this.setState({
          isSpinner: false,
        }),
      2000,
    );
  };

  render() {
    let button = this.state.isLoggedIn ? (
      <Logout onLogout={this.logout} />
    ) : (
      <Login onLogin={this.login} />
    );

    return (
      <div className="main">
        {this.state.isSpinner ? <Spinner size={100} /> : button}
      </div>
    );
  }
}

export default Auth;

// Algo
// 1. Login.jsx (is a function)
// input: onLogin
// output: show login btn with text Login
// 2. Logout.jsx (is a function)
// input: property onLogout
// output: show logout btn with text Logout
// 3. Spinner.jsx (is a function)
// input: property size
// output: round Spinner with needed size
// 4. Auth.jsx (is a Component)
// show Login by default
// input: this.state
// output: <Login /> | <Spinner /> | <Logout />
// onClick Login => Spinner (2 sec) => Logout
// onClick Logout => Login
// 4a. as default state we have isLoggedIn: false, and isSpinner: false,
// setState =>
//              login  => isLoggedIn: true
//              logout => isLoggedIn: false
//
// but in action login => isSpinner: true (for 2 sec) => function showSpinner
// to choose Login or Logout btn => button
//                                          if(isLoggedIn: true) => Logout
//                                          if(isLoggedIn: false) => Login
//
// as Spinner by default => false we will have in return => button (with logic)
// onClick we will have out Spinner (2s)
