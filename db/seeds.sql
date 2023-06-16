-- Insert data into the department table
INSERT INTO department (name) VALUES
    ("DepartmentA"),
    ("DepartmentB"),
    ("DepartmentC");
SELECT * FROM department;
-- Insert data into the role table
INSERT INTO role (title, salary, department_id) VALUES
    ("Role1", 50000, 1),
    ("Role2", 60000, 2),
    ("Role3", 70000, 3);
SELECT * FROM role;

INSERT INTO employee (firstname, lastname, role_id, manager_id) VALUES
('mike', 'anderson', 1, NULL),
('ryan', 'bolen', 2, 1);