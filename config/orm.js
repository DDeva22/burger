const connection = require("./connection.js");
const chalk = require("chalk");


const orm = {
    select: function(table, callB){
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(error, result){
            if(error){

                console.log(chalk.red(`All-SELECTION COULD NOT BE MADE:\b`));
                throw error;

            }
            callB(result);
        });



    },
    insert: function(table, column, val, callB){
        const queryString = `INSERT INTO ${table}`;


        queryString += ` (`;
        queryString += column.toString();
        queryString += `) `;
        queryString += `VALUES (`;
        queryString += printQuestionMarks(val.length);
        queryString += `) `;


        console.log(chalk.cyan(queryString));

        connection.query(queryString, val, function(error, result){

            if(error){
                console.log(chalk.red(`INSERT COULD NOT BE EXECUTED: \b`));
                throw error;
            }
            callB(result);
        });


    },
    update: function(table, objcolVal, condition, callB){
        const queryString = `UPDATE ${table}`;

        queryString += ` SET `;
        queryString += objToSql(objcolVal);
        queryString += ` WHERE `;
        queryString += condition;

        console.log(chalk.cyan(queryString));

        connection.query(queryString, function(error, result){
            if(error){
                console.log(chalk.red(`UPDATE COULD NOT BE EXECUTED: \b`));
                throw error;
            }
            callB(result);
        });
    }
};



module.exports = orm;