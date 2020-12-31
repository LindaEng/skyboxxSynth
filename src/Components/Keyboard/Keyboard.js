import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import {keyToNotes, whiteNoteKeys, sharpNoteKeys} from './Notes'

function Keyboard(props) {
  let notes = ['C','D','E','F','G','A','B'];
  let octaves = [0,1];
  let synth = props.currentSound

  function noteDown(elem ,note) {
    elem.target.className = elem.target.className + ' active'
    synth.triggerAttackRelease(note, '16n')
  }

  function noteUp(elem) {
    elem.target.className = elem.target.className.slice(0,elem.target.className.indexOf(' '))
  }

  function keyDown(event, whiteNotes, sharpNotes) {
    let key = event.key.toUpperCase()
    if(whiteNoteKeys.indexOf(key) !== -1) {
      let indexOfWhiteKey = whiteNoteKeys.indexOf(key)
      whiteNotes[indexOfWhiteKey].classList.add('active')
    }
    else if (sharpNoteKeys.indexOf(key) !== -1) {
      let indexOfSharpKey = sharpNoteKeys.indexOf(key)
      sharpNotes[indexOfSharpKey].classList.add('active')
    }
    else {
      return
    }
    synth.triggerAttackRelease(keyToNotes[key], '16n')
  }

  function keyUp(elem, whiteNotes, sharpNotes) {
    let key = elem.key.toUpperCase()
    if(whiteNoteKeys.indexOf(key) !== -1) {
      let indexOfWhiteKey = whiteNoteKeys.indexOf(key)
      whiteNotes[indexOfWhiteKey].classList.remove('active')
    }
    else if (sharpNoteKeys.indexOf(key) !== -1) {
      let indexOfSharpKey = sharpNoteKeys.indexOf(key)
      sharpNotes[indexOfSharpKey].classList.remove('active')
    }
    else {
      return
    }
  }

  useEffect(() => {
    let whiteNotes = document.getElementsByClassName("whiteNote")
    let sharpNotes = document.getElementsByClassName("blackNote")
    window.addEventListener("keydown", (e) => {
      keyDown(e, whiteNotes, sharpNotes)
    })
    window.addEventListener("keyup", (e) => {
      keyUp(e, whiteNotes, sharpNotes)
    })
    return function cleanup() {
      window.removeEventListener("keydown", keyDown)
      window.removeEventListener("keyup", keyUp)
    }
  })

  return (
      <div className="container">
      { octaves.map(octave =>{
        return notes.map((note, id) =>{
            let hasSharp = true;
            if(note === 'E' || note === 'B') {
              hasSharp = false;
            }
            return(
              <div key={note + id} className="noteContainer">
              <div key={id}
                  className='whiteNote' data-note={`${note + (octave + 4)}`} onMouseDown={ e => noteDown(e,e.target.getAttribute("data-note"))} onMouseUp={e => noteUp(e)}></div>
              { (hasSharp) ?
                <div key={note} className='blackNote' data-note={`${note + '#' + (octave + 4)}`} onMouseDown={e => noteDown(e,e.target.getAttribute("data-note"))} onMouseUp={e => noteUp(e)}></div> : null
              }
              </div>
            )
        })

        })
      }
      </div>

  );
}

const mapStateToProps = (props) => {
  return {
    currentSound: props.currentSound
  }
}

export default connect(mapStateToProps)(Keyboard);

