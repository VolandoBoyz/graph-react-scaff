const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.resolve(__dirname, 'build/')));

app.get('/api/example', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src/assets/fire.json'));
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build/index.html'));
});

app.listen(port);
console.log(`Server started: http://localhost:${port}`); // eslint-disable-line
