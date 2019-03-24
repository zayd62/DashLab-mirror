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
  FormHelperText,
  Input,
  NativeSelect,
} from "@material-ui/core";
import "./Registration.css";
import { FUNC_CREATEUSERMODEL, FUNC_GETSOCIALMODEL } from "./api";
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

  componentDidMount(){
    FUNC_GETSOCIALMODEL().then(res => {
      console.log("this is GETTING ALL SOCIAL MEDIA ACCOUNTS registrations.js")
      console.log(res)
      this.setState({allSocialAccount: res.data})
      
    })
  };

  generateUnorderedList(listitems, key) {
    // generates unordered list to render
    console.log("in generate")
    console.log(listitems)
    return (<ul>
      {listitems.map(function (listValue) {
        return <li>{listValue}</li>;
      })}
    </ul>)

  }

  getErrorMessageArray(errmsg) {
    var errors;
    Object.keys(errmsg[1]).forEach(function eachKey(key) {
      errors = errmsg[1][key];
    });
    return errors;
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
    console.log("in handlesubmit, checking for empty fields")

    // check if any field are empty. if they are, call return to stop execution of handle submit
    if (!(this.state.email && this.state.fname && this.state.lname && this.state.password)) {
      // if it goes here, that means that any fields are empty
      this.setState({ errorText: "Missing fields. Check that you have filled in every input" })
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

    FUNC_CREATEUSERMODEL(body, config).then(res => {
      console.log("this is the response in registrations.js")
      console.log(res)
      if (!(res[0] === 201)) {
        // unsuccessful user creation 

        var todisplay = (this.generateUnorderedList(this.getErrorMessageArray(res), 1))
        this.setState({ errorText: todisplay })
        this.setState({ dialogIsOpen: true })
      } else {
        // successful user creation
        console.log("eyy user was made")
        console.log(res)

        // create profile
      }
    })

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

              <NativeSelect
                  value={this.state.platform}
                  onChange={this.handleChange('platform')}
                  input={<Input name="platform" id="platformselect" />}>
                  <option value="" disabled ></option>
                  <option value={"twitter"}>twitter</option>
                  <option value={"facebook"}>facebook</option>               
                </NativeSelect>
              <FormHelperText>Use the dropdown to select </FormHelperText>
            </div>

            <Button className="regbut" color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </form>

          <Typography variant = "body2">
            Account Creation successful.
          </Typography>
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
