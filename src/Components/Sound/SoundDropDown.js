import React from 'react';
import { connect } from 'react-redux';
import { changeSound } from '../../reducers/rootReducer';
import './DropdownPanel.css';

function SoundDropDown (props) {
  const handleChange = (event) => {
    const sound = event.target.value
    props.changeSound(sound)
    event.target.blur()
  }
  return (

    <div className="dropdownPanel">
        <div className="dropdown">
          <select
            onChange={handleChange}
            className="sounds">
            <option value="PolySynth">Poly</option>
            <option value="AMSynth">AMSynth</option>
            <option value="FMSynth">FMSynth</option>
            <option value="MembraneSynth">Membrane</option>
          </select>
        </div>
    </div>
  )
}


const mapToDispatch = (dispatch) => {
  return {
    changeSound: (sound) => { dispatch(changeSound(sound))}
  }
}

export default connect(null,mapToDispatch)(SoundDropDown);
