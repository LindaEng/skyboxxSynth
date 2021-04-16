const keyToNotes = {
  A: 'C4',
  S: 'D4',
  D: 'E4',
  F: 'F4',
  G: 'G4',
  H: 'A4',
  J: 'B4',
  Z: 'C5',
  X: 'D5',
  C: 'E5',
  V: 'F5',
  B: 'G5',
  N: 'A5',
  M: 'B5',
  Q: 'C#4',
  W: 'D#4',
  E: 'F#4',
  R: 'G#4',
  T: 'A#4',
  Y: 'C#5',
  U: 'D#5',
  I: 'F#5',
  O: 'G#5',
  P: 'A#5'
}

const whiteNoteKeys = Object.keys(keyToNotes).slice(0,14)
const sharpNoteKeys = Object.keys(keyToNotes).slice(14,Object.keys(keyToNotes).length)

module.exports = {
  keyToNotes,
  whiteNoteKeys,
  sharpNoteKeys
}
