const express = require('express')
const app = express()
const port = 3001
const tvShows = require('./tvShows.js');

app.get('/rest/tvShows', (req, res) => res.send(tvShows()));
app.get('/', (req, res) => res.send('Please enter the correct URL (/localhost3001/rest/tvShows'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))