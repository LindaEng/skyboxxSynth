import React from 'react';
import { connect } from 'react-redux';
import { changeSound } from '../../reducers/rootReducer'

function SoundDropDown (props) {
  const handleChange = (event) => {
    const sound = event.target.value
    props.changeSound(sound)
    event.target.blur()
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


const mapToDispatch = (dispatch) => {
  return {
    changeSound: (sound) => { dispatch(changeSound(sound))}
  }
}

export default connect(null,mapToDispatch)(SoundDropDown);
