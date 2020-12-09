import './App.css';
import * as Tone from 'tone';

function App() {
  let synth = new Tone.PolySynth().toDestination();
  let notes = ['C','D','E','F','G','A','B'];

  function noteDown(note) {
     synth.triggerAttackRelease(note, '16n')
  }

  return (
    <div className="App">
      <div id="container">
        {notes.map((note, id) =>{
          return(
            <div key={id} className='whiteNote' data-note={`${note + '4'}`} onMouseDown={ e => noteDown(e.target.getAttribute("data-note"))}>hello</div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
