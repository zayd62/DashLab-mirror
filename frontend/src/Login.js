import React, { Component, Fragment } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Button, Grid, InputLabel, Input, NativeSelect, FormControl, FormHelperText, TextField } from '@material-ui/core'

export class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorText: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = name => event => {
    // handles the change in the value of the dropdown
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.validateForm) {
      this.setState({ errorText: "Email or password is incorrect" })
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <h1>thi is the login page</h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <FormControl required error={this.state.error}>
            <TextField
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange('email')}
              value={this.state.email}
            />

            <TextField
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange('password')}
              value={this.state.password}
            />

            <Button variant="contained" color="primary" type="submit" >
              Submit
            </Button>
            <Typography variant = "body2" color = "error">
              {this.state.errorText}
            </Typography>
          </FormControl>



        </form>

      </Fragment>
    )
  }
}

export default Login
