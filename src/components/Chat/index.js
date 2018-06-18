import React, { Component } from 'react';
import './chat.css';

import ConnectedUsers from '../ConnectedUsers';
import Messages from '../Messages';

const connectedUsers = [
  {
    name: 'usuario 1'
  },
  {
    name: 'usuario 2'
  },
  {
    name: 'usuario 3'
  },
  {
    name: 'usuario 4'
  },
  {
    name: 'usuario 5'
  }
];

const messages = [
  {
    user: 'usuario 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
  },
  {
    user: 'usuario 1',
    content: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    user: 'usuario 2',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
  },
  {
    user: 'usuario 3',
    content: 'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  },
  {
    user: 'usuario 1',
    content: ' in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
]

const Chat = () => (
  <div className="row">
    <ConnectedUsers users={connectedUsers} />
    <Messages messages={messages} />
    <footer className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 footer">
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  </div>
)

export default Chat;
