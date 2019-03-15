import React, { Component, Fragment } from 'react'
import { Typography, Button, FormControl, TextField } from '@material-ui/core'

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
    if(((this.state.email.length === 0) || (this.state.password.length === 0))){
      return false
    } else {
      return true
    }
    
  }

  handleChange = name => event => {
    // handles the change in the value of the dropdown
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    if (!(this.validateForm())) {
      console.log("fields are missing")
      this.setState({ errorText: "fields are missing" })
    } else {
      console.log("fields are not missing")
      this.setState({ errorText: "fields are not missing" })

    }

    console.log("submit button pressed")

  }

  render() {
    return (
      <Fragment>
        <div>
          <h1>this the login page</h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <FormControl >
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
