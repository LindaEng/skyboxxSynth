import './App.css';
import * as Tone from 'tone';
import React, {useState, useEffect} from 'react';

import {keyToNotes} from './Notes'

function App() {
  // [activeNotes, noteState] = useState({
  //   whiteNote: 'whiteNote',
  //   blackNote: 'blackNote'
  // })
  let synth = new Tone.PolySynth().toDestination();
  let notes = ['C','D','E','F','G','A','B'];
  let octaves = [0,1];


  function noteDown(elem ,note) {
    elem.target.className = elem.target.className + ' active'
    synth.triggerAttackRelease(note, '16n')
  }

  function noteUp(elem) {
    elem.target.className = elem.target.className.slice(0,elem.target.className.indexOf(' '))
  }

  function keyDown(elem) {
    let key = elem.key.toUpperCase()
    synth.triggerAttackRelease(keyToNotes[key], '16n')

  }

 useEffect(() => {
  let test = document.getElementsByClassName("whiteNote")

   window.addEventListener("keydown", (e) => {
     keyDown(e)
   })

 })

  return (
    <div className="App">
      <div id="container">
      { octaves.map(octave =>{
        return notes.map((note, id) =>{
            let hasSharp = true;
            if(note === 'E' || note === 'B') {
              hasSharp = false;
            }
            return(
              <div id ="innerContainer">
              <div key={id} className='whiteNote' data-note={`${note + (octave + 4)}`} onMouseDown={ e => noteDown(e,e.target.getAttribute("data-note"))} onMouseUp={e => noteUp(e)}></div>
              { (hasSharp) ?
                <div key={note} className='blackNote' data-note={`${note + '#' + (octave + 4)}`} onMouseDown={e => noteDown(e,e.target.getAttribute("data-note"))} onMouseUp={e => noteUp(e)}></div> : null
              }
              </div>
            )
        })

        })
      }
      </div>
    </div>
  );
}

export default App;

