import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import "./makeapost.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ListItemText,
  ListItem,
  Drawer,
  List,
  Divider,
  Typography,
  Button,
  Select,
  Grid,
  InputLabel,
  Input,
  NativeSelect,
  FormControl,
  FormHelperText,
  TextField,
  AppBar,
  Theme,
  CssBaseline,
  styles,
  Toolbar,
  Checkbox
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { FUNC_GETSOCIALMODEL, FUNC_CREATEPOST, FUNC_LOGOUT } from "./api";
class MakeAPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: "",
      Twitter: false,
      Facebook: false,
      resData: "",
      optionsToRender: "",

    };
  }

  componentDidMount() {
    FUNC_GETSOCIALMODEL().then(res => {
      // resdata contains the social media accounts
      console.log("this is GETTING ALL SOCIAL MEDIA ACCOUNTS registrations.js")
      console.log(res)

      // filter out so that we only have the id belonging to the user
      var accountinprofile = JSON.parse(sessionStorage.profile).account_permission //accounts user can post to
      var arrOfAccount = []
      res.data.filter(res => {
        if(accountinprofile.includes(res.id)){
          arrOfAccount.push(res)
        }
      })

      // filtered specific to the user
      this.setState({ resData: arrOfAccount })
      console.log("the state is")
      console.log(this.state.resData)
      this.setState({ optionsToRender: this.generateDropdown() })
    })
  }

  handleLogout = () => {
    var config = {
        headers: { "Authorization": `Token ${sessionStorage.token}` }
      }
    var body = {}
    FUNC_LOGOUT(body, config).then( res => {
      console.log("logging out ");
      this.setState({newLocation: <Redirect push to="/"/> });
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

  handleSubmit = event => {
    // event.preventDefault();
    console.log("in handlesubmit, checking for empty fields")
    if (!(this.state.post && this.state.profileID)) {
      this.setState({ errorText: "Missing fields. Check that you have filled in every input" })
      console.log("found missing fields")
      this.setState({ dialogIsOpen: true })

    }
    console.log("fields arenot empty, making posts")


    var config = {
      headers: { "Content-Type": "application/json" }
    }

    var body = {
      text_content: this.state.post,
      profile: JSON.parse(sessionStorage.profile).id,
      account: this.state.profileID.map(Number)
    }
    console.log("the body is", body)

    FUNC_CREATEPOST(body, config).then(res => {
      console.log("create post response")
      console.log(res)
      alert("post successful")
    })
    

  }

  // used for the select
  handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      profileID: value,
    });
  };

  generateDropdown() {
    var names = this.state.resData
    console.log("in generate dropdown")
    console.log(names)

    return (
      <div>
        <Select multiple native value={this.state.profileID}
          onChange={this.handleChangeMultiple}
          inputProps={
            { id: 'select-multiple-native', }
          }>
          {names.map(name => (
            <option key={name.id} value={name.id}>
              {(name.name + ": " + name.platform.charAt(0).toUpperCase() + name.platform.slice(1))}
            </option>
          ))}
        </Select>
      </div>
    )
  }
  handleChange = name => event => {
    // handles the change in the value of the dropdown
    this.setState({ [name]: event.target.value });
  };

  handleLogout(){
    FUNC_LOGOUT(sessionStorage.token).then( res => {
      console.log("logging out ")
      console.log(res.status)
    } )
  }

  render() {
    return (
      <bigfragment>
        <fragment className="container">
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
          <div className="backbox">
            <div>
              <diva className="a">Create Post</diva>
            </div>

            <div>
              <TextField
                id="postdetails"
                label="Post"
                multiline
                rows="10"
                className="entry"
                margin="normal"
                variant="filled"
                onChange={this.handleChange("post")}
                value={this.state.post}
              />
            </div>

            <div>
              <divc className="c">I want to publish this post to:</divc>
            </div>
            {this.state.optionsToRender}
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

        </fragment>

        <button className="b" onClick={this.handleSubmit}>Publish</button>

      </bigfragment>
    );
  }
}

export default MakeAPost;
