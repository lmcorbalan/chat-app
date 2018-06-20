import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class MessageInput extends Component {
  textInput = React.createRef();

  onFormSubmit = event => {
    event.preventDefault();
    this.props.handleSend();
    this.focusInput();
  };

  focusInput = () => {
    this.textInput.current.focus();
  };

  componentDidMount() {
    this.focusInput();
  };

  render() {
    return (
      <footer className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 footer">
        <div className="container">
          <form onSubmit={this.onFormSubmit}>
            <div className="input-group input-group-sm mb-3">
                <input
                  type="text"
                  ref={this.textInput}
                  className="form-control form-control-sm"
                  placeholder="message"
                  onChange={this.props.handleMessageChange}
                  value={this.props.currentMessage}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    disabled={this.props.isSendDisabled}
                  >
                    Send
                  </button>
                </div>
            </div>
          </form>
        </div>
      </footer>
    )
  };
};

MessageInput.propTypes = {
  currentMessage: PropTypes.string.isRequired,
  isSendDisabled: PropTypes.bool.isRequired,
  handleMessageChange: PropTypes.func.isRequired,
  handleSend: PropTypes.func.isRequired
};

export default MessageInput;
