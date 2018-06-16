import React, { Component } from 'react';
import './login.css';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component {
  state = {
    name: ''
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleGoClick = () => {
    this.props.onLogin(this.state);
  };

  shouldDisableButton = () => {
    return !Boolean(this.state.name);
  };

  render() {
    return (
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
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </FormGroup>
          <Button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            disabled={this.shouldDisableButton()}
            onClick={this.handleGoClick}
          >
            GO!
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
