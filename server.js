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
        inquirer.prompt([
            {
                message: 'enter the department name',
                name: 'name',
                type: 'input',
            }
        ]).then((departmentData) => {
            addDepartment(departmentData);
            handleOptions();
        });

    } else if (results.command == 'Add a Role') {
        inquirer.prompt([
            {
                message: 'enter the role name',
                name: 'name',
                type: 'input',
            }
        ]).then((roleData) => {
            addRole(roleData);
            handleOptions();
        });

    } else if (results.command == 'Add an Employee') {
        inquirer.prompt([
            {
                message: 'enter employee name',
                name: 'name',
                type: 'input',
            }
        ]).then((employeeData) => {
            addEmployee(employeeData);
            handleOptions();
        });

    } else if (results.command == 'Update Employee Role') {
        inquirer.prompt([
            {
                message: 'enter employee name and new role',
                name: 'name',
                type: 'input',
            }
        ]).then((updatedRoleData) => {
            updateEmployee(updatedRoleData);
            handleOptions();
        });
    } else {
        console.log('error');
    }

}



function displayDepartments(results) {
    connection.query(
        'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );
}

function addDepartment() {
    connection.query('INSERT INTO employees SET ?', employee, (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return;
        }
        console.log('Data inserted successfully!');
        console.log('Inserted row ID:', results.insertId);
    });

}

handleOptions();