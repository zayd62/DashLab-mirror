import React, { Component, Fragment } from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Button,
  TextField,
  AppBar,
  Toolbar,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import "./Registration.css";
import { FUNC_CREATEUSERMODEL, FUNC_CREATEUSERMODELTWO } from "./api";
export class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      fname: "",
      lname: "",
      password: "",
      errorText: "",
      dialogIsOpen: false, //used to control the dialog box because 
    };
  }

  // for dialog box
  handleClickOpen = () => {
    this.setState({ dialogIsOpen: true });
  };

  // for dialog box
  handleClose = () => {
    this.setState({ dialogIsOpen: false });
  };


  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = name => event => {
    // handles the change in the value of the dropdown
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log("in handlesubmit, checking for empty fields")

    // check if any field are empty. if they are, call return to stop execution of handle submit
    if (!(this.state.email && this.state.fname && this.state.lname && this.state.password)) {
      // if it goes here, that means that any fields are empty
      this.setState({ errorText: "Missing fields" })
      console.log("found missing fields")
      this.setState({ dialogIsOpen: true })
      return
    }
    console.log("no missing fields yay, creating a user model")

    // making post request to api server to create user model
    // the headers for creating a post
    var config = {
      headers: { "Content-Type": "application/json" }
    }

    // the body containing the email, username and password 
    var body = {
      email: this.state.email,
      username: this.state.email,
      password: this.state.password
    }

    FUNC_CREATEUSERMODEL()
    FUNC_CREATEUSERMODELTWO()



  }

  render() {
    return (
      <Fragment>
        <AppBar position="relative" color="default">
          <Toolbar>
            <Typography varian="h2" noWrap>
              DashLab
            </Typography>
          </Toolbar>
        </AppBar>

        <div className="Backbox2">
          <div className="Title1">
            <h1>Create Account</h1>
          </div>

          <form className="Regform" onSubmit={this.handleSubmit}>
            <RadioGroup
              className="Role"
              aria-label="Role"
              name="Role"
              value={this.state.value}
              onChange={this.handleChange('value')}
            >
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="Junior Media Manager"
              />
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="Administrator"
              />
              />
            </RadioGroup>

            <div className="data">
              <TextField
                className="fname"
                id="fname"
                label="First Name"
                type="fname"
                autoComplete="fname"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange("fname")}
                value={this.state.fname}
              />

              <TextField
                className="lname"
                id="lname"
                label="Last Name"
                type="lname"
                autoComplete="lname"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange("lname")}
                value={this.state.lname}
              />

              <TextField
                className="email"
                id="email"
                label="Email"
                type="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange("email")}
                value={this.state.email}
              />

              <TextField
                className="pass1"
                id="password"
                label="Password"
                type="text"
                autoComplete="password"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange("password")}
                value={this.state.password}
              />
            </div>

            <Button className="regbut" color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </div>

        <div>
          <Dialog open={this.state.dialogIsOpen} onClose={this.handleClose}>
            <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.errorText}
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                Ok
                        </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

export default Registration;
