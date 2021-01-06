import React, { Component } from "react";
import { Button } from '@material-ui/core';
export default class ButtonDat extends Component {

  render() {
    return (
      <div>
        <Button variant="contained">Default</Button>
        <br/>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <br/>
        <Button variant="contained" color="secondary">
          Secondary 
        </Button>
        <br/>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <br/>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </div>
    );
  }
}