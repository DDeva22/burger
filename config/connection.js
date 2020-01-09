const mysql = require("mysql");
const chalk = require("chalk");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(error){
    if (error) throw error;
    console.log(chalk.green("MYSQL CONNECTION ESTABLISHED"));
})



module.exports = {
    connection
};