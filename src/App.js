import React, { Component } from 'react';

import Chat from './components/Chat';
import Login from './components/Login';

class App extends Component {
  state = {
    user: null
  };

  handleLogin = name => {
    this.setState({ user: { name } });
  };

  render() {
    const content = this.state.user ? <Chat /> : <Login onLogin={this.handleLogin} />;
    return (
      <div className="container-fluid">
        {content}
      </div>
      );
  }
}

export default App;
