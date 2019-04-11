import React, { Component } from 'react';
import ResistanceButton from "../ui/ResistanceButton";
import './InitialPage.css'
import ResistanceTextField from "../ui/ResistanceTextField";
import {Card} from "@material-ui/core";

class InitialPage extends Component {



  render() {
    return (
      <div className="initial-page-container">
        <h1>Resistance</h1>
        <Card className="initial-page-card-container">
          <ResistanceTextField label="Hei" fullWidth/>
          <div className="button-container">
            <ResistanceButton fullWidth>
              join game
            </ResistanceButton>
            <ResistanceButton fullWidth>
              create game
            </ResistanceButton>
          </div>
        </Card>
      </div>
    );
  }
}

export default InitialPage;
