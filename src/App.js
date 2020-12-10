import './App.css';
import * as Tone from 'tone';
import React, {useState} from 'react';

function App() {
  // [activeNotes, noteState] = useState({
  //   whiteNote: 'whiteNote',
  //   blackNote: 'blackNote'
  // })
  let synth = new Tone.PolySynth().toDestination();
  let notes = ['C','D','E','F','G','A','B'];
  let octaves = [0,1];


  function noteDown(elem ,note, isSharp) {
    console.log(elem.target.className)
    synth.triggerAttackRelease(note, '16n')
    return true
  }

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
              <div key={id} className='whiteNote' data-note={`${note + (octave + 4)}`} onMouseDown={ e => noteDown(e,e.target.getAttribute("data-note"),false)}></div>
              { (hasSharp) ?
                <div className='blackNote' data-note={`${note + '#' + (octave + 4)}`} onMouseDown={e => noteDown(e,e.target.getAttribute("data-note"),true)}></div> : null
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

