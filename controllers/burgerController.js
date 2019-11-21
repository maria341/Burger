var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgerObject = {
            burgers: data
        }
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/", function(req, res) {
    burger.create(["burger_name"], [req.body.name],function(data) {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id ="+req.params.id;

    burger.update(condition, function() {
        res.redirect('/');
    });
});

router.delete("/:id", function(req, res) {
    var condition = "id ="+req.params.id;

    burger.delete(condition, function() {
        res.redirect("/");
    });
});

module.exports = router;