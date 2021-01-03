import React from 'react';
import { connect } from 'react-redux';

import Keyboard from './Components/Keyboard/Keyboard';
import SoundDropDown from './Components/Sound/SoundDropDown';
import KeyboardLines from './Components/Keyboard/KeyboardLines';
import ADSRSliders from './Components/ADSR/ADSRSliders'


function App(props) {
  //hooks to hold sound
  return (
    <div className="App">
      <div className="synthBackground">
        <KeyboardLines/>
        <div className="keyboardPanelContainer">
          <div className="topPanel">
            <SoundDropDown/>
            <ADSRSliders/>
          </div>
          <Keyboard/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (props) => {
  return {
    currentSound: props.currentSound
  }
}

export default connect(mapStateToProps)(App);

