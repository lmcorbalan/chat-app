import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Login = props => (
  <div className="text-center login">
    <Form className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal">
        Enter your name to join the Chat
      </h1>
      <FormGroup>
        <Input
          type="text"
          className="form-control"
          name="name"
          id="name"
          placeholder="name"
          onChange={props.handleUserNameChange}
          value={props.userName}
        />
      </FormGroup>
      <Button
        className="btn btn-lg btn-primary btn-block"
        type="submit"
        disabled={props.isGoDisabled}
        onClick={props.handleGoClick}
      >
        GO!
      </Button>
    </Form>
  </div>
);

Login.propTypes = {
  isGoDisabled: PropTypes.bool.isRequired,
  handleGoClick: PropTypes.func.isRequired,
  handleUserNameChange: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
}

export default Login;
