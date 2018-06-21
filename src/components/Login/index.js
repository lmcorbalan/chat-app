import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Login = props => (
  <div className="text-center login">
    <form className="form-signin" onSubmit={props.handleLogin}>
      <h1 className="h3 mb-3 font-weight-normal">
        Enter your name to join the Chat
      </h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          placeholder="name"
          onChange={props.handleUserNameChange}
          value={props.userName}
        />
      </div>
      <button
        className="btn btn-lg btn-primary btn-block"
        type="submit"
        disabled={props.isGoDisabled}
      >
        GO!
      </button>
    </form>
  </div>
);

Login.propTypes = {
  isGoDisabled: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleUserNameChange: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
}

export default Login;
