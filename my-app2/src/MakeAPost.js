import React, { Component, Fragment } from "react";
import "./makeapost.css";
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
  Toolbar,
  Checkbox
} from "@material-ui/core";

class MakeAPost extends Component {
  //  state = {
  //   postcontent=""
  // }
  render() {
    return (
      <bigfragment>
        <fragment className="container">
          <AppBar position="relative" color="default">
            <Toolbar>
              <Typography varian="h2" noWrap>
                DashLab
              </Typography>
              <Button>My profile</Button>
              <Button>Log out</Button>
            </Toolbar>
          </AppBar>

          <div>
            <diva className="a">Write your post here</diva>
          </div>

          <div>
            <textarea className="textarea" />
          </div>

          <div>
            <divc className="c">I want to publish this post to:</divc>
          </div>

          <div>
            <divd className="d">
              <input type="checkbox" id="twitter" value="Twitter" />
              <label for="twitter">Twitter</label>
            </divd>
          </div>

          <div>
            <dive className="e">
              <input type="checkbox" id="facebook" value="Facebook" />
              <label for="facebook">Facebook</label>
            </dive>
          </div>
        </fragment>
        <button className="b">Publish</button>
      </bigfragment>
    );
  }
}

export default MakeAPost;
