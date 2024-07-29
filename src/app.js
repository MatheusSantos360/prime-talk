const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(routes)

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});