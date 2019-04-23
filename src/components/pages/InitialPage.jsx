import React, { Component } from 'react';
import ResistanceButton from "../ui/ResistanceButton";
import './InitialPage.css'
import ResistanceTextField from "../ui/ResistanceTextField";
import {connect} from "react-redux";
import {createGame, joinGame} from "../../reducers";

class InitialPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      readableGameId: ''
    };

    this.onReadableGameIdChange = this.onReadableGameIdChange.bind(this);
    this.onJoinClick = this.onJoinClick.bind(this);
    this.onCreateClick = this.onCreateClick.bind(this);
  }

  onReadableGameIdChange(event) {
    this.setState({readableGameId: event.value});
  }

  onJoinClick() {
    this.props.submitJoin(this.state.readableGameId);
  }

  onCreateClick() {
    this.props.submitCreate();
  }

  render() {
    return (
      <div className="initial-page-container">
        <h1>Resistance</h1>
        <div className="initial-page-card-container">
          <ResistanceTextField value={this.state.readableGameId} onChange={this.onReadableGameIdChange} label="Hei" fullWidth/>
          <div className="button-container">
            <ResistanceButton onClick={this.onJoinClick} fullWidth>
              join game
            </ResistanceButton>
            <ResistanceButton onClick={this.onCreateClick} fullWidth>
              create game
            </ResistanceButton>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitJoin: readableGameId => {
      dispatch(joinGame(readableGameId))
    },
    submitCreate: readableGameId => {
      dispatch(createGame(readableGameId))
    }
  }
};

export default connect(null, mapDispatchToProps)(InitialPage);
