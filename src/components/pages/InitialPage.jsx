import React, { Component } from 'react';
import ResistanceButton from "../ui/ResistanceButton";
import './InitialPage.css'
import {TextField} from "@material-ui/core";
import ResistanceTextField from "../ui/ResistanceTextField";

class InitialPage extends Component {



  render() {
    return (
      <div className="initial-page-container">
        <h1>Resistance</h1>
        <ResistanceTextField label="Hei"/>
        <div className="button-container">
          <ResistanceButton>
            join game
          </ResistanceButton>
          <ResistanceButton>
            create game
          </ResistanceButton>
        </div>
      </div>
    );
  }
}

export default InitialPage;
