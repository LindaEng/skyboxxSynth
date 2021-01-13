const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'build')))

// static file-serving middleware
app.use(express.static(path.join(__dirname, '../', 'public')))

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})



app.listen(process.env.PORT || 8080, ()=>{
  console.log('poop listening in port 8080')
});

module.exports = app
