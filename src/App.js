import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import MainSynth from './Components/MainSynth/MainSynth.js';
import DrumPad from './Components/DrumKit/DrumPad.js';


function App(props) {
  //hooks to hold sound
  return (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={MainSynth} />
        <Route path='/drumpad' component={DrumPad} />
      </Switch>
    </div>
  </Router>
  )
}



export default App;

