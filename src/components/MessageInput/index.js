import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const MessageInput = props => {
  return (
    <footer className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 footer">
      <div className="container">
        <div className="input-group input-group-sm mb-3">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="message"
            onChange={props.handleMessageChange}
            value={props.currentMessage}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              disabled={props.isSendDisabled}
              onClick={props.handleSendClick}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
};

MessageInput.propTypes = {
  currentMessage: PropTypes.string.isRequired,
  isSendDisabled: PropTypes.bool.isRequired,
  handleMessageChange: PropTypes.func.isRequired,
  handleSendClick: PropTypes.func.isRequired
};

export default MessageInput;
