var express = require("express");

var PORT = process.env.PORT || 8000;

var app = express();

app.use(express.static("public"));

//Parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set the handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes and give the server access to them
var routes = require("./controllers/burgerController.js");

app.use(routes);

//Listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  