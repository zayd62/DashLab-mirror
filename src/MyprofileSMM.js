import React, { Component, Fragment } from "react";
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
import "./MyprofileSMM.css";
export class MyprofileSMM extends Component {
  constructor(props) {
    super(props);

    this.state = {
      platform: "",
      name: "",
    };
    this.handleClick.bind(this);
  }


  handleChange = name => event => {
    // handles the change in the value of the dropdown
    this.setState({ [name]: event.target.value });
  };

  handleClick() {
    console.log(this.state);
    console.log("Clicked...");
  }

  render() {
    return (
      <Fragment>
        <AppBar position="relative" color="default">
          <Toolbar>
            <Typography varian="h2" noWrap>
              DashLab
            </Typography>
            <div className="Barbutton1">
              <Button>Create Social Media Account</Button>
              <Button>Create posts</Button>
              <Button>Remove accounts</Button>
              <Button>Log out</Button>
            </div>
          </Toolbar>
        </AppBar>
        </Fragment>
    );
  }
}

export default MyprofileSMM;
