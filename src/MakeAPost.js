import React, { Component, Fragment } from "react";
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
class MakeAPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post:"",
      Twitter: false,
      Facebook: false

    };
  }
  handleChange = name => event => {
    // handles the change in the value of the dropdown
    this.setState({ [name]: event.target.value });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
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
              <Button>My profile</Button>
              <Button>Log out</Button>
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

          <div>
            <dive className="e">
            <label>Twitter</label>
            <Checkbox
              label="Twitter"
              checked={this.state.checkedA}
              onChange={this.handleChange('Twitter')}
              value="Twitter"
              color="primary"
            />
            <label>Facebook</label>
            <Checkbox
              label="Facebook"
              checked={this.state.checkedB}
              onChange={this.handleChange('Facebook')}
              value="Facebook"
              color="primary"
            />
            </dive>
          </div>
          </div>
        </fragment>
        <button className="b">Publish</button>
      </bigfragment>
    );
  }
}

export default MakeAPost;
