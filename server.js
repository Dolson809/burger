var express = require("express");

var method = require('method-override');


var PORT = process.env.PORT || 3000;

var app = express();
app.use(method('_method'));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require('./controllers/burgers_controller')

app.use('/', routes)

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
