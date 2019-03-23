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
import "./Createsocial.css";
export class Createsocial extends Component {
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
            <div className="Barbuttons">
              <Button>My profile</Button>
              <Button>Log out</Button>
            </div>
          </Toolbar>
        </AppBar>
      <div className="Backbox1">
        <div className="Title1">
          <h1>Create Social Media Account</h1>
        </div>
        <form className="Regform">

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
                <InputLabel shrink htmlFor="platformselect">Platform</InputLabel>
                <NativeSelect
                    value={this.state.platform}
                    onChange={this.handleChange('platform')}
                    input={<Input name="platform" id="platformselect" />}>
                    <option value="" disabled ></option>
                    <option value={"twitter"}>twitter</option>
                    <option value={"facebook"}>facebook</option>                </NativeSelect>
                <FormHelperText>Use the dropdown to select </FormHelperText>
            </FormControl>
            </div>
        <Button onClick={() => {this.handleClick();}}>
            Submit
          </Button>
        </form>
      </div>
      </Fragment>
    );
  }
}

export default Createsocial;
