const orm = require("../config/orm.js");


const burgerFunction = {
    allSelect: function(callB){
        orm.selectAll("burgers", function(response){
            callB(response);
        });
    },
    insert: function(cols, vals, callB){
        orm.insert("burgers", cols, vals, function(response){
            callB(response);
        });
    },
    update: function(objcolVal, condition, callB){
        orm.update("burgers", objcolVal, condition, function(response){
            callB(response);
        });
    }





};

module.exports = burgerFunction;