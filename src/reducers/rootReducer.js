//Action Creator
export const changeSound = (sound) => {
  return {
    type: 'CHANGE_SOUND',
    sound
  }
}

const initState = {
  currentSound: 'hihihi'
}

const rootReducer = (state = initState, action) => {

  return state;
}

export default rootReducer
