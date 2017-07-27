'use strict';

const express = require('express');
const proxy = require('express-request-proxy');

const app = express();
const PORT = process.env.PORT || 3000;
const githubToken = process.env.GITHUB_TOKEN;

app.use(express.static('./public'));

/* -------- Handle GET request for Github -------- */
app.get('/github/*', function (req, res) {
  (
    proxy({
      url: `https://api.github.com/${req.params[0]}`,
      headers: {Authorization: `token ${githubToken}`}
    })
  )(req, res);
});

app.listen(PORT, function () {
  console.log('Listening on PORT: ' + PORT);
});
