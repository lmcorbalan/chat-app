import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import ConnectedUsers from '../ConnectedUsers';
import MessagesList from '../MessagesList';
import MessageInput from '../MessageInput';

const date = new Date().getTime();
// const connectedUsers = [
//   {
//     id: date+1,
//     name: 'usuario 1'
//   },
//   {
//     id: date+2,
//     name: 'usuario 2'
//   },
//   {
//     id: date+3,
//     name: 'usuario 3'
//   },
//   {
//     id: date+4,
//     name: 'usuario 4'
//   },
//   {
//     id: date+5,
//     name: 'usuario 5'
//   }
// ];

let messages = []

class Chat extends Component {
  state = {
    mySelf: this.props.user,
    connectedUsers: this.props.connectedUsers,
    messages: [],
    currentMessage: '',
    isSendDisabled: true
  }

  componentDidMount() {
    console.log(this.state)
    const { socket } = this.props;
    socket.on('add-user', user => {
      const connectedUsers = [...this.state.connectedUsers, user];
      this.setState({ connectedUsers })
    });

    socket.on('remove-user', connectedUsers => {
      this.setState({ connectedUsers })
    });
  }

  handleMessageChange = (event) => {
    this.setState({
      currentMessage: event.target.value,
      isSendDisabled: !(event.target.value)
    });
  };

  handleSendClick = (event) => {
    const newMessage = {
      id: new Date().getTime(),
      user: this.props.user.name,
      content: this.state.currentMessage
    };
    const messages = [...this.state.messages, newMessage];
    this.setState({ messages: messages, currentMessage: '' });
  };

  render() {
    return (
      <div className="row">
        <ConnectedUsers users={this.state.connectedUsers} />
        <MessagesList messages={this.state.messages} />
        <MessageInput
          currentMessage={this.state.currentMessage}
          isSendDisabled={this.state.isSendDisabled}
          handleMessageChange={this.handleMessageChange}
          handleSendClick={this.handleSendClick}
        />
      </div>
    )
  }
};


export default Chat;
