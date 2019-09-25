const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;
const TvShows = require("./tvShows.js");

app.use(express.static(path.join(__dirname, "../../build")));

app.get("/rest/tvShows", (req, res) => res.send(TvShows()));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../../build/", "index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//express.static is a built in express middleware middleware function which is used to serve static files (images, css files and js files)
