const inquirer = require('inquirer');
const mysql = require('mysql2');


const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL Username
        user: 'root',
        // TODO: Add MySQL Password
        password: '',
        database: 'employee_db'
    },
);

async function handleOptions() {
    const options = [
        'View all Departments',
        'View all Roles',
        'View all Employees',
        'Add a Department',
        'Add a Role',
        'Add an Employee',
        'Update Employee Role'
    ]

    const results = await inquirer.prompt([{
        message: 'What would you like to do?',
        name: 'command',
        type: 'list',
        choices: options,
    }]);
    if (results.command == 'View all Departments') {
        displayDepartments();
        handleOptions();
    } else if (results.command == 'View all Roles') {
        displayRoles();
        handleOptions();
    } else if (results.command == 'View all Employees') {
        displayEmployees();
        handleOptions();
    } else if (results.command == 'Add a Department') {
        addDepartment();
        handleOptions();
    } else if (results.command == 'Add a Role') {
        addRole();
        handleOptions();
    } else if (results.command == 'Add an Employee') {
        addEmployee();
        handleOptions();
    } else if (results.command == 'Update Employee Role') {
        updateEmployee();
        handleOptions();
    } else {
        console.log('error');
    }

}

connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

  function displayDepartments(results) {

    }

handleOptions();