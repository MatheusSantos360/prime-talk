const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "/views"));
app.use(routes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});