import React, {useState} from 'react';
import { connect } from 'react-redux';
import './ADSRSliders.css'

function ADSRSliders (props) {
  const [adsr, setValue] = useState({
    attack: 0,
    decay: 0,
    sustain: 0,
    release: 0
  })

  const envelopes = ['attack','decay','sustain','release']

 //polysynth doesnt have direct access to envelope
 //polySynth -> options -> envelope
  function updateEnvelope(synth, envelopeType, value) {
    console.log('UPDATE ENVELOPE SYNTH', synth)
    if(synth.name === 'PolySynth') {
        synth.options.envelope[envelopeType] = value
    } else {
        synth.envelope[envelopeType] = value
    }
  }

  const sliderFunc = (event) => {
    const envelopeType = event.target.getAttribute('data-type')
    setValue({
      ...adsr,
      [envelopeType]: Number(event.target.value)
    })
    updateEnvelope(props.currentSound, envelopeType, Number(event.target.value))
  }


  return(
    <div className="ADSRSliders">
      {envelopes.map((envelope,idx) => {
        return(
          <input
            key={envelope}
            data-type={envelope}
            type="range"
            min="0"
            max="1"
            value={adsr.envelope}
            onChange={sliderFunc}
            step="0.005"/>
        )
      })}
    </div>
  )
}

const mapStateToProps = (props) => {
  return {
    currentSound: props.currentSound
  }
}


export default connect(mapStateToProps)(ADSRSliders)
