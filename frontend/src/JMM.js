import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
export class JMM extends Component {
  render() {
    return (
      <div>
        <Typography variant="h2">
            if you are seeing this, then you are an junior media manager
            Your name is {this.props.data}
        </Typography>
      </div>
    )
  }
}

export default JMM
