import React, { Component } from 'react';

import Chat from './components/Chat';
import Login from './components/Login';

class App extends Component {
  state = {
    user: '',
    isUserLogged: false,
    isGoDisabled: true
  };

  handleUserNameChange = event => {
    const userName = event.target.value;
    this.setState({
      user: userName,
      isGoDisabled: !(userName)
    });
  };

  handleGoClick = () => {
    this.setState({ isUserLogged: true });
  };

  render() {
    const content = this.state.isUserLogged ? (
      <Chat userName={this.state.user} />
    ) : (
      <Login
        isGoDisabled={this.state.isGoDisabled}
        handleGoClick={this.handleGoClick}
        handleUserNameChange={this.handleUserNameChange}
        userName={this.state.user}
      />
    );
    return <div className="container-fluid">{content}</div>;
  }
}

export default App;
