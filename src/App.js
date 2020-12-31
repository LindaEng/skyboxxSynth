import React from 'react';
import { connect } from 'react-redux';

import Keyboard from './Components/Keyboard/Keyboard';
import SoundDropDown from './Components/Sound/SoundDropDown';

import './sound.css';


function App(props) {
  //hooks to hold sound
  return (
    <div className="App">
      <div className="instrument">
        <SoundDropDown/>
        <Keyboard/>
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

