var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
        var query = "SELECT * FROM "+ table;
        connection.query(query, function(error, results) {
            if(error) {
                throw error;
            }
            cb(results)
        });
    },

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " +table+" ("+cols.toString()+") VALUES(?)";

        connection.query(queryString, vals, function(error, result) {
            if(error) {
                throw error;
            }
            cb(result);
        });
    },

    updateOne: function(table, vals, condition, cb) {
          var query = "UPDATE "+table+" SET "+vals+" WHERE "+condition;
          console.log(query);
          connection.query(query, function(error, results) {
              if(error) 
                  throw error;
                  cb(results)
        });
    },

    deleteOne: function(table, condition, cb) {
        var query = "DELETE FROM "+ table + " WHERE " + condition;
        console.log(query)
        connection.query(query, condition, function(error, results) {
            if(error) throw error;
            cb(results);
        });
    }
};

//exports the orm object
module.exports = orm;