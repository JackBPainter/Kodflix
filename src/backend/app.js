const express = require('express')
const app = express()
const port = 3000
const tvShows = require('./tvShows.js');

app.get('/rest/tvShows', (req, res) => res.send(tvShows()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))