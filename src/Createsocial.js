import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  RadioGroup,
  FormControlLabel,
  Radio,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Button,
  Grid,
  InputLabel,
  Input,
  NativeSelect,
  FormControl,
  FormHelperText,
  TextField,
  AppBar,
  Toolbar
} from "@material-ui/core";
import "./Createsocial.css";
import { FUNC_CREATESOCIALMODEL, FUNC_LOGOUT } from './api'

import { resolve4 } from "dns";
export class Createsocial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      platform: "",
      name: "",
      errorText: "",
      dialogIsOpen: false //used to control the dialog box because
    };
  }

  handleLogout = () => {
    var config = {
      headers: { "Authorization": `Token ${sessionStorage.token}` }
    }
    var body = {}
    FUNC_LOGOUT(body, config).then(res => {
      console.log("logging out ");
      this.setState({ newLocation: <Redirect push to="/" /> });
    })
  }


  // for dialog box
  handleClickOpen = () => {
    this.setState({ dialogIsOpen: true });
  };

  // for dialog box
  handleClose = () => {
    this.setState({ dialogIsOpen: false });
  };

  handleChange = name => event => {
    // handles the change in the value of the dropdown
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // check if any field are empty. if they are, call return to stop execution of handle submit
    if (!(this.state.name && this.state.platform)) {
      // if it goes here, that means that any fields are empty
      this.setState({
        errorText: "Missing fields. Check that you have filled in every input"
      });
      console.log("found missing fields");
      this.setState({ dialogIsOpen: true });
      return;
    }

    console.log("no missing fields yay, creating a social media account model");

    // making post request to api server to create user model
    // the headers for creating a post
    var config = {
      headers: { "Content-Type": "application/json" }
    };

    // the body containing the email, username and password
    var body = {
      name: this.state.name,
      platform: this.state.platform
    };

    FUNC_CREATESOCIALMODEL(body, config).then(res => {
      console.log("this is the response in registrations.js");
      console.log(res);
      if (!(res[0] === 201)) {
        // unsuccessful social media profile creation
        // highly unlikely to fail
        console.log(resolve4);
      } else {
        // successful user creation
        console.log("eyy user was made")
        console.log(res)
        alert("The social media account was made")
        // create profile
      }
    });
  };

  render() {
    return (
      <Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography varian="h2" noWrap>
              DashLab
            </Typography>
            <div className="Barbuttonsss">
              <Button onClick={this.handleLogout}>Log out</Button>
            </div>
          </Toolbar>
        </AppBar>
        <div className="Backbox1">
          <div className="Title1">
            <h1>Create Social Media Account</h1>
          </div>
          <form className="Regform" onSubmit={this.handleSubmit}>
            <TextField
              className="name"
              id="name"
              label="Name"
              type="name"
              autoComplete="name"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange("name")}
              value={this.state.name}
            />
            <div>
              <FormControl>
                <InputLabel shrink htmlFor="platformselect">
                  Platform
                </InputLabel>
                <NativeSelect
                  value={this.state.platform}
                  onChange={this.handleChange("platform")}
                  input={<Input name="platform" id="platformselect" />}
                >
                  <option value="" disabled />
                  <option value={"twitter"}>twitter</option>
                  <option value={"facebook"}>facebook</option>
                </NativeSelect>
                <FormHelperText>Use the dropdown to select </FormHelperText>
              </FormControl>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>

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
        {this.state.newLocation}
      </Fragment>
    );
  }
}

export default Createsocial;
