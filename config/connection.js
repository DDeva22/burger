const mysql = require("mysql");
const chalk = require("chalk");

let connection;

if (process.env.JAWSDB_URL){

    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
};











connection.connect(function(error){
    if (error) throw error;
    console.log(chalk.green("MYSQL CONNECTION ESTABLISHED"));
})



module.exports = connection;