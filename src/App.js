import React, { Component } from 'react';
import io from 'socket.io-client';

import Chat from './components/Chat';
import Login from './components/Login';

class App extends Component {
  state = {
    userName: '',
    isUserLogged: false,
    isGoDisabled: true,
    socket: io()
  };

  componentDidMount() {
    this.state.socket.on('success-login', ({ user, connectedUsers, lastTenMessages }) => {
      this.setState({
        user: user,
        connectedUsers: connectedUsers,
        lastTenMessages: lastTenMessages,
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

  handleLogin = event => {
    event.preventDefault();
    const userName = this.state.userName.trim();
    this.state.socket.emit('user-login', userName);
  };

  render() {
    const content = this.state.isUserLogged ? (
      <Chat
        user={this.state.user}
        connectedUsers={this.state.connectedUsers}
        socket={this.state.socket}
        lastTenMessages={this.state.lastTenMessages}
      />
    ) : (
      <Login
        isGoDisabled={this.state.isGoDisabled}
        handleLogin={this.handleLogin}
        handleUserNameChange={this.handleUserNameChange}
        userName={this.state.userName}
      />
    );
    return <div className="container-fluid">{content}</div>;
  }
}

export default App;
