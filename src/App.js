import React, { Component } from 'react';

import io from 'socket.io-client';

import Chat from './components/Chat';
import Login from './components/Login';

class App extends Component {
  state = {
    userName: '',
    isUserLogged: false,
    isGoDisabled: true,
    socket: io('http://localhost:3333')
  };

  componentDidMount() {
    this.state.socket.on('success-login', ({user, connectedUsers}) => {
      console.log('on success-login', user, connectedUsers);
      this.setState({
        user: user,
        connectedUsers: connectedUsers,
        isUserLogged: true
      });
    });

  }

  handleUserNameChange = event => {
    const userName = event.target.value;
    this.setState({
      userName: userName,
      isGoDisabled: !(userName)
    });
  };

  handleGoClick = e => {
    e.preventDefault();
    this.state.socket.emit('user-login', this.state.userName);
  };

  render() {
    const content = this.state.isUserLogged ? (
      <Chat
        user={this.state.user}
        connectedUsers={this.state.connectedUsers}
        socket={this.state.socket}
      />
    ) : (
      <Login
        isGoDisabled={this.state.isGoDisabled}
        handleGoClick={this.handleGoClick}
        handleUserNameChange={this.handleUserNameChange}
        userName={this.state.userName}
      />
    );
    return <div className="container-fluid">{content}</div>;
  }
}

export default App;
