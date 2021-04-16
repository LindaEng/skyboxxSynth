import React from 'react';
import { connect } from 'react-redux';


import Keyboard from '../Keyboard/Keyboard';
import SoundDropDown from '../Sound/SoundDropDown';
import KeyboardLines from '../Keyboard/KeyboardLines';
import ADSRSliders from '../ADSR/ADSRSliders'


function MainSynth(props) {
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

export default connect(mapStateToProps)(MainSynth);
