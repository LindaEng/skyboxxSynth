import * as Tone from 'tone';

//Action type
const CHANGE_SOUND = 'CHANGE_SOUND'
const CHANGE_ENVELOPE = 'CHANGE_ENVELOPE'

//Action Creator
export const changeSound = (sound) => {
  return {
    type: CHANGE_SOUND,
    sound
  }
}

export const changeEnvelope = (envelope, value) => {
  return {
    type: CHANGE_ENVELOPE,
    envelope,
    value
  }
}

//initial state
const initState = {
  currentSound: new Tone.PolySynth().toDestination()
}

//reducer
const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case CHANGE_SOUND:
      state.currentSound.disconnect()
      return {...state, currentSound: action.sound}
    default:
      return state;
  }
}

export default rootReducer
