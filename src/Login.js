import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import {
  Dialog,
  DialogActions,
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
import style from "./Login.css";
import * as urls from "./api";
import MyprofileJMM from "./MyprofileJMM";
import { FUNC_LOGIN, FUNC_GETUSERUSINGTOKEN, FUNC_GETPROFILEUSINGTOKEN, FUNC_GETPROFILEUSINGID } from "./api";
import { resolve } from "path";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorText: "",
      dialogIsOpen: false, //used to control the dialog box 
    };
  }

  // tesitng the urls resolve correctly
  componentDidMount() {
    // console.log(urls.createuser);
    // console.log()
  }
  getErrorMessageArray(errmsg) {
    var errors;
    Object.keys(errmsg[1]).forEach(function eachKey(key) {
      errors = errmsg[1][key];
    });
    return errors;
  }

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

    if (!(this.state.email && this.state.password)) {
      // if it goes here, that means that any fields are empty
      this.setState({ errorText: "Missing fields. Check that you have filled in every input" })
      console.log("found missing fields")
      this.setState({ dialogIsOpen: true })
      return
    }

    console.log("all field full, sending post request")

    var config = {
      headers: { "Content-Type": "application/json" }
    }

    // the body containing the email, username and password 
    var body = {
      username: this.state.email,
      password: this.state.password
    }

    FUNC_LOGIN(JSON.stringify(body), config).then(res => {
      if (res[0] === 200) {
        // successful login
        console.log("successful login")
        console.log(res[1].auth_token)
        this.decideuser(res[1].auth_token)
      } else if (!(res[0] === 201)) {
        console.log(res)
        var todisplay = (this.generateUnorderedList(this.getErrorMessageArray(res), 1))
        this.setState({ errorText: todisplay })
        this.setState({ dialogIsOpen: true })
      } else {
        console.log(res)
 
      }
    })
  };

  decideuser(token){
    sessionStorage.clear()
    sessionStorage.token = token
    // get userid
    var config = {
      headers: { "Authorization": `Token ${token}` }
    }

    FUNC_GETUSERUSINGTOKEN(config).then( res => {
      console.log("getting profile using token")
      console.log(res.data)
      sessionStorage.user = JSON.stringify(res.data)

      // get profile

      FUNC_GETPROFILEUSINGID(res.data.id).then(res => {
        console.log("getting profile using id",)
        console.log(res)
        sessionStorage.profile = JSON.stringify(res.data)
        console.log("dashlab admin", res.data.dashlab_admin)
        if(!(res.data.dashlab_admin)){
          console.log("here")
          this.setState({newLocation: <Redirect push to="jmm/createPost"/> })

        } else{
          this.setState({newLocation: <Redirect push to="admin/"/> })

        }


      })
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
        <div className="Backbox3">
          <div>
            <h1>Login</h1>
          </div>

          <form onSubmit={this.handleSubmit}>
            <FormControl required error={this.state.error}>
              <TextField
                id="email"
                label="Username"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange("email")}
                value={this.state.email}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange("password")}
                value={this.state.password}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                // component={Link}
                // to="/JMM"
                >

                Log in
              </Button>
              {this.state.newLocation}
            </FormControl>
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

export default Login;
