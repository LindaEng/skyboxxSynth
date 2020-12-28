import React from 'react';
import * as Tone from 'tone';
import { connect } from 'react-redux';
import changeSound from '../../reducers/rootReducer'

function SoundDropDown (props) {
  const handleChange = (event) => {
    console.log(event.target.value,'HANDLE CHANGE')
  }
  return (
    <div className="dropdown">
      <select
        onChange={handleChange}>
        <option value="PolySynth">PolySynth</option>
        <option value="AMSynth">AMSynth</option>
        <option value="FMSynth">FMSynth</option>
        <option value="MembraneSynth">MembraneSynth</option>
      </select>
    </div>
  )
}

const mapStateToProps = (props) => {
  return {
    currentSound: props.currentSound
  }
}

const mapToDispatch = (dispatch) => {
  return {
    changeSound: (sound) => { dispatch(changeSound(sound))}
  }
}

export default connect(mapStateToProps, mapToDispatch)(SoundDropDown);
