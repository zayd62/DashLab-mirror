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
import "./MyprofileJMM.css";
export class MyprofileJMM extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="relative" color="default">
          <Toolbar>
            <Typography varian="h2" noWrap>
              DashLab
            </Typography>
            <div className="Barbutton2">
              <Button>Create Social Media Account</Button>
              <Button>Create posts</Button>
              <Button>Log out</Button>
            </div>
          </Toolbar>
        </AppBar>
        </Fragment>
    );
  }
}

export default MyprofileJMM;
