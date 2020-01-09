const connection = require("./connection.js");


const orm = {
    selectAll: function(tableInput){
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, function(error, result){
            if(error){

                console.log(chalk.red(`All-SELECTION COULD NOT BE MADE:\b`));
                throw error;
                
            }

        });



    },
    insertOne: function(){



    },
    updateOne: function(){




    }



}



















module.exports = orm;