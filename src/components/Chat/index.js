import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import ConnectedUsers from '../ConnectedUsers';
import MessagesList from '../MessagesList';
import MessageInput from '../MessageInput';

class Chat extends Component {
  state = {
    mySelf: this.props.user,
    connectedUsers: this.props.connectedUsers,
    messages: this.props.lastTenMessages.length ? this.props.lastTenMessages : [],
    currentMessage: '',
    isSendDisabled: true
  };

  handleMessageChange = (event) => {
    this.setState({
      currentMessage: event.target.value,
      isSendDisabled: !(event.target.value)
    });
  };

  handleSend = () => {
    const newMessage = {
      id: new Date().getTime(),
      user: this.state.mySelf.name,
      content: this.state.currentMessage.trim()
    };
    const messages = [...this.state.messages, newMessage];

    this.props.socket.emit('new-message', newMessage);
    this.setState({
      messages: messages,
      currentMessage: '',
      isSendDisabled: true
    });
  };

  componentDidMount() {
    const { socket } = this.props;
    socket.on('add-user', user => {
      const connectedUsers = [...this.state.connectedUsers, user];
      this.setState({ connectedUsers })
    });

    socket.on('new-message', message => {
      const messages = [...this.state.messages, message];
      this.setState({ messages: messages });
    });

    socket.on('remove-user', connectedUsers => {
      this.setState({ connectedUsers })
    });
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
          handleSend={this.handleSend}
        />
      </div>
    )
  };
};

Chat.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired,
  connectedUsers: PropTypes.array.isRequired,
  socket: PropTypes.object.isRequired,
  lastTenMessages: PropTypes.array.isRequired,
}

export default Chat;
