import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainSynth from './Components/MainSynth/MainSynth.js';
import DrumPad from './Components/DrumKit/DrumPad.js';


function App(props) {
  //hooks to hold sound
  return (
    <div>
      <Switch>
        <Route path='/' component={MainSynth} />
        <Route path='/drumpad' component={DrumPad} />
      </Switch>
    </div>
  )
}



export default App;

