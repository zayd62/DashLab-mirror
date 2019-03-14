import React, { Component, Fragment } from 'react'
import Typography from '@material-ui/core'
export class Admin extends Component {
  render() {
    return (
      <div>
        <Typography variant="h2">
            if you are seeing this, then you are an admin
            Your name is {this.props.data}
        </Typography>
      </div>
    )
  }
}

export default Admin
