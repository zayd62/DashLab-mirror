import React, { Component } from 'react'
import { Typography, Button, AppBar, Toolbar } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { FUNC_LOGOUT } from "./api";
export class AdminHome extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            newLocation:"",

        };
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

    render() {
        return (
            
            <div>
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
                <Typography variant="h3">
                    Welcome to adminpage. what would you like to to
                </Typography>
                <br />
                <br />
                <br />
                <Button component={Link} to="createUser/" color="primary" variant="contained" style={{ marginRight: 15 }}>
                    Create User
                </Button>

                <Button component={Link} to="createSocial/" color="primary" variant="contained">
                    Create Social Media Account
                </Button>
                {this.state.newLocation}
            </div>
        )
    }
}

export default AdminHome
