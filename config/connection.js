var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password29",
    database: "burgers_db"
});

//make a connection
connection.connect(function(error) {
    if(error) {
        console.log(`Error connecting: ${error.stack}`);
        return;
    }
    console.log(`Connecting as id: ${connection.threadId}`);
});

//Exports connection for orm to use
module.exports = connection;