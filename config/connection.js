var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password29",
        database: "burgers_db"
    });
};

//make a connection
connection.connect(function(err) {
    if(err) {
        console.log(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connecting as id: ${connection.threadId}`);
});

//Exports connection for orm to use
module.exports = connection;