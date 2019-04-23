import React, { Component } from 'react';
import ResistanceButton from "../ui/ResistanceButton";
import './InitialPage.css'
import ResistanceTextField from "../ui/ResistanceTextField";
import {connect} from "react-redux";

class InitialPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      readableGameId: ''
    };

    this.onReadableGameIdChange = this.onReadableGameIdChange.bind(this);
  }

  onReadableGameIdChange(event) {
    this.setState({readableGameId: event.value});
  }

  onJoinClick(event) {

  }

  render() {
    return (
      <div className="initial-page-container">
        <h1>Resistance</h1>
        <div className="initial-page-card-container">
          <ResistanceTextField value={this.state.readableGameId} onChange={this.onReadableGameIdChange} label="Hei" fullWidth/>
          <div className="button-container">
            <ResistanceButton fullWidth>
              join game
            </ResistanceButton>
            <ResistanceButton fullWidth>
              create game
            </ResistanceButton>
          </div>
        </div>
      </div>
    );
  }
}



export default connect()(InitialPage);
