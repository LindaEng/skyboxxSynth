import './App.css';
import * as Tone from 'tone';

function App() {
  let synth = new Tone.PolySynth().toDestination();
  let notes = ['C','D','E','F','G','A','B'];
  let octaves = [1,2]
  function noteDown(note) {
     synth.triggerAttackRelease(note, '16n')
  }

  return (
    <div className="App">
      <div id="container">
        
        {notes.map((note, id) =>{
          let hasSharp = true;
          if(note === 'E' || note === 'B') {
            hasSharp = false;
          }
          return(
            <div id ="innerContainer">
              <div key={id} className='whiteNote' data-note={`${note + '4'}`} onMouseDown={ e => noteDown(e.target.getAttribute("data-note"))}></div>
              { (hasSharp) ?
                <div className='blackNote' data-note={`${note + '#4'}`} onMouseDown={e => noteDown(e.target.getAttribute("data-note"))}></div> : null
              }
            </div>
          )}
        )}
      </div>
    </div>
  );
}

export default App;
