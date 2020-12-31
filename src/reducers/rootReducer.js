import * as Tone from 'tone';

//Action type
const CHANGE_SOUND = 'CHANGE_SOUND'

//Action Creator
export const changeSound = (sound) => {
  return {
    type: CHANGE_SOUND,
    sound
  }
}

//initial state
const initState = {
  currentSound: new Tone.PolySynth().toDestination()
}

//synth
function getCurrentSound(synth) {
  switch(synth) {
    case 'PolySynth':
      return new Tone.PolySynth().toDestination()
    case 'AMSynth':
      return new Tone.AMSynth().toDestination()
    case 'FMSynth':
      return new Tone.FMSynth().toDestination()
    case 'MembraneSynth':
      return new Tone.MembraneSynth().toDestination()
    default:
      return new Tone.PolySynth().toDestination()
  }
}

//reducer
const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case CHANGE_SOUND:
      state.currentSound.disconnect()
      console.log('synth disconnected')
      return {...state, currentSound: getCurrentSound(action.sound)}
    default:
      return state;
  }
}

export default rootReducer
