import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const MessagesList = props => {
  return (
    <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 messages-list">
      {props.messages.map(message => (
        <div key={`${message.id}`} className="row message">
          <div className="col-sm-2 col-md-2 message-user">
            {message.user}
          </div>
          <div className="col-sm-10 col-md-10 message-content">
            <p className="lead">
              {message.content}
            </p>
          </div>
        </div>
      ))}
    </main>
  )
}

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired
}

export default MessagesList;
