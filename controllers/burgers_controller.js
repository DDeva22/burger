const express = require("express");
const router = express.Router();


const burger = require("../models/burger.js");



router.get("/", function(req, res){
    burger.allSelect(function(data){
        const resObject = {
            burgers: data
        };
        console.log(resObject);
        res.render("index", resObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insert(["burger_name", "devoured"], [req.body.burger, req.body.devoured], function(result){
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res){
    const condition = `id = ${req.params.id}`;
    console.log(`condition, ${condition}`);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result){
            if (result.changedRows === 0){
                return res.status(404).end();
            }


            res.status(200).end();
        }
    );

});
















module.exports = router;