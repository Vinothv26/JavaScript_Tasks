/*JavaScript Practical Task – Employee Management System
Task
Create a JavaScript Employee Management System using only JavaScript.
Create an array containing at least 8 employees. Each employee should have:
id
name
department
salary
experience
skills
Example structure:
let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"]
    }
];*/


let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 35000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 102,
        name: "Bala",
        department: "HR",
        salary: 40000,
        experience: 3,
        skills: ["Communication", "Recruitment", "Excel"]
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 60000,
        experience: 5,
        skills: ["JavaScript", "React", "Node.js"]
    },
    {
        id: 104,
        name: "Priya",
        department: "Finance",
        salary: 55000,
        experience: 4,
        skills: ["Accounting", "Excel", "Tally"]
    },
    {
        id: 105,
        name: "Divya",
        department: "IT",
        salary: 50000,
        experience: 3,
        skills: ["C#", "ASP.NET", "SQL"]
    },
    {
        id: 106,
        name: "Ravi",
        department: "Marketing",
        salary: 42000,
        experience: 2,
        skills: ["SEO", "Content Writing", "Social Media"]
    },
    {
        id: 107,
        name: "Sneha",
        department: "IT",
        salary: 70000,
        experience: 6,
        skills: ["Angular", "TypeScript", "JavaScript"]
    },
    {
        id: 108,
        name: "Vijay",
        department: "HR",
        salary: 48000,
        experience: 4,
        skills: ["Recruitment", "Communication", "Management"]
    }
];

/*
Requirements
1. Students must implement the following:
Display all employees
Use forEach().
*/

function AllEmployees(){
    employees.forEach(currentvalue=>{
        console.log(
            `ID: ${currentvalue.id}, Name: ${currentvalue.name},Department: ${currentvalue.department},Salary: ₹${currentvalue.salary}, Experience: ${currentvalue.experience} years, Skills : ${currentvalue.skills}`);
    });
}
AllEmployees();

/*
2. Find employees
Find employees whose salary is greater than ₹40,000.
Use filter().
*/

function Filterdata(){
    let filteFunction=employees.filter(ce=>ce.salary>=40000);
    filteFunction.forEach(ce=>{
        console.log(`Name : ${ce.name}, Salary : ${ce.salary}`);
    });
}

Filterdata();

/*
3. Find a particular employee
Search employee using id.
Use find().
*/

function FindUsingID(id){
    let findUsingId = employees.find(cv=>cv.id===id);
    console.log(`ID: ${findUsingId.id}, Name: ${findUsingId.name},Department: ${findUsingId.department},Salary: ₹${findUsingId.salary}, Experience: ${findUsingId.experience} years, Skills : ${findUsingId.skills}`);
}

FindUsingID(102);

/*
4. Calculate total salary
   - Calculate the total salary of all employees.
   - Use reduce().
*/

function TotalSalary() {
    let total = employees.reduce((total, employee) => {
        return total + employee.salary;
    }, 0);

    console.log(`Total Salary : ₹${total}`);
}

TotalSalary();


/*
2. Check salary condition
   - Check whether at least one employee has salary above ₹1,00,000.
   - Use some().
*/

function CheckHighSalary() {
    let result = employees.some(employee => employee.salary > 100000);

    console.log(`Employee salary above ₹1,00,000 : ${result}`);
}

CheckHighSalary();


/*
3. Check experience
   - Check whether every employee has at least 1 year of experience.
   - Use every().
*/

function CheckExperience() {
    let result = employees.every(employee => employee.experience >= 1);

    console.log(`Every employee has at least 1 year experience : ${result}`);
}

CheckExperience();


/*
4. Sort employees
   - Sort employees by salary from highest to lowest.
*/

function SortEmployees() {

    let sortedEmployees = [...employees].sort((a, b) => {
        return b.salary - a.salary;
    });

    sortedEmployees.forEach(employee => {
        console.log(
            `ID: ${employee.id}, Name: ${employee.name}, Salary: ₹${employee.salary}`
        );
    });
}

SortEmployees();


/*
5. Array manipulation

   - Add a new employee using push().
   - Remove the last employee using pop().
   - Add an employee at the beginning using unshift().
   - Remove the first employee using shift().
*/

function ArrayManipulation() {

    // Add employee using push()

    let newEmployee = {
        id: 109,
        name: "Suresh",
        department: "IT",
        salary: 52000,
        experience: 3,
        skills: ["JavaScript", "SQL", "Angular"]
    };

    employees.push(newEmployee);

    console.log("After Push:");
    console.log(employees);


    // Remove last employee using pop()

    let removedLast = employees.pop();

    console.log("Removed Last Employee:");
    console.log(removedLast);


    // Add employee at beginning using unshift()

    let firstEmployee = {
        id: 110,
        name: "Meena",
        department: "Finance",
        salary: 58000,
        experience: 5,
        skills: ["Excel", "Tally", "Accounting"]
    };

    employees.unshift(firstEmployee);

    console.log("After Unshift:");
    console.log(employees);


    // Remove first employee using shift()

    let removedFirst = employees.shift();

    console.log("Removed First Employee:");
    console.log(removedFirst);
}

ArrayManipulation();


/*
6. Destructuring

   - Use object destructuring to extract:
     name
     department
     salary

   - Use array destructuring for employee's skills.
*/

function DestructuringExample() {

    let employee = employees[0];

    // Object destructuring

    let { name, department, salary } = employee;

    console.log(`Name : ${name}`);
    console.log(`Department : ${department}`);
    console.log(`Salary : ₹${salary}`);


    // Array destructuring

    let [skill1, skill2, skill3] = employee.skills;

    console.log(`Skill 1 : ${skill1}`);
    console.log(`Skill 2 : ${skill2}`);
    console.log(`Skill 3 : ${skill3}`);
}

DestructuringExample();


/*
7. Spread operator

   - Create a new employee array using spread operator
     without directly modifying the original array.
*/

function SpreadExample() {

    let newEmployeeArray = [...employees];

    console.log("Original Employee Array:");
    console.log(employees);

    console.log("New Employee Array:");
    console.log(newEmployeeArray);
}

SpreadExample();


/*
8. Rest operator

   - Create a function that accepts an employee name
     and multiple skill values using rest operator.
*/

function AddSkills(employeeName, ...skills) {

    console.log(`Employee Name : ${employeeName}`);
    console.log(`Skills : ${skills}`);
}

AddSkills(
    "Arun",
    "HTML",
    "CSS",
    "JavaScript",
    "React"
);


/*
9. Functions

   - Add employee
   - Delete employee
   - Search employee
   - Calculate total salary
   - Display employees
*/


// Add Employee

function AddEmployee(employee) {

    employees.push(employee);

    console.log("Employee Added Successfully");
    console.log(employee);
}


// Delete Employee

function DeleteEmployee(id) {

    let index = employees.findIndex(employee => employee.id === id);

    if (index !== -1) {

        let deletedEmployee = employees.splice(index, 1);

        console.log("Employee Deleted Successfully");
        console.log(deletedEmployee[0]);

    } else {

        console.log("Employee Not Found");

    }
}


// Search Employee

function SearchEmployee(id) {

    let employee = employees.find(employee => employee.id === id);

    if (employee) {

        console.log(
            `ID: ${employee.id}, Name: ${employee.name}, Department: ${employee.department}, Salary: ₹${employee.salary}`
        );

    } else {

        console.log("Employee Not Found");
    }
}


// Calculate Total Salary

function CalculateTotalSalary() {

    let total = employees.reduce((total, employee) => {
        return total + employee.salary;
    }, 0);

    console.log(`Total Salary : ₹${total}`);
}


// Display Employees

function DisplayEmployees() {

    employees.forEach(employee => {

        console.log(
            `ID: ${employee.id}, Name: ${employee.name}, Department: ${employee.department}, Salary: ₹${employee.salary}`
        );

    });
}


// Calling functions

let employee109 = {
    id: 109,
    name: "Suresh",
    department: "IT",
    salary: 52000,
    experience: 3,
    skills: ["JavaScript", "SQL", "Angular"]
};

AddEmployee(employee109);

SearchEmployee(109);

CalculateTotalSalary();

DisplayEmployees();

DeleteEmployee(109);


/*
10. Conditional statements

   Salary Category:

   ₹0 – ₹30,000       → Junior
   ₹30,001 – ₹60,000  → Mid Level
   Above ₹60,000      → Senior
*/

function SalaryCategory() {

    employees.forEach(employee => {

        if (employee.salary >= 0 && employee.salary <= 30000) {

            console.log(`${employee.name} : Junior`);

        }
        else if (employee.salary >= 30001 && employee.salary <= 60000) {

            console.log(`${employee.name} : Mid Level`);

        }
        else {

            console.log(`${employee.name} : Senior`);

        }

    });
}

SalaryCategory();


/*
11. Date

   - Add joiningDate to every employee.
   - Display joining year using getFullYear().
   - Display joining month using getMonth().
*/

employees.forEach((employee, index) => {

    employee.joiningDate = new Date(2020 + index, index % 12, 10);

});


function DisplayJoiningDate() {

    employees.forEach(employee => {

        let year = employee.joiningDate.getFullYear();

        // getMonth() returns 0 for January and 11 for December
        let month = employee.joiningDate.getMonth();

        console.log(
            `Name: ${employee.name}, Joining Year: ${year}, Joining Month: ${month}`
        );

    });
}

DisplayJoiningDate();


/*
12. User Input

   - Use prompt() to ask the user for employee ID.
   - Search and display employee details.
*/

function SearchEmployeeUsingPrompt() {

    let id = Number(prompt("Enter Employee ID:"));

    let employee = employees.find(employee => employee.id === id);

    if (employee) {

        console.log(`ID: ${employee.id}`);
        console.log(`Name: ${employee.name}`);
        console.log(`Department: ${employee.department}`);
        console.log(`Salary: ₹${employee.salary}`);
        console.log(`Experience: ${employee.experience} years`);
        console.log(`Skills: ${employee.skills}`);

    } else {

        console.log("Employee Not Found");

    }
}

SearchEmployeeUsingPrompt();


/*
Bonus Task ⭐
Menu-driven Employee Management System

1. Display All Employees
2. Add Employee
3. Search Employee
4. Filter High Salary Employees
5. Calculate Total Salary
6. Sort By Salary
7. Delete Employee
8. Exit
*/


function DisplayAllEmployees() {

    employees.forEach(employee => {

        console.log(
            `ID: ${employee.id}, Name: ${employee.name}, Department: ${employee.department}, Salary: ₹${employee.salary}, Experience: ${employee.experience} years`
        );

    });
}


function AddNewEmployee() {

    let id = Number(prompt("Enter Employee ID:"));
    let name = prompt("Enter Employee Name:");
    let department = prompt("Enter Department:");
    let salary = Number(prompt("Enter Salary:"));
    let experience = Number(prompt("Enter Experience:"));

    let skill1 = prompt("Enter Skill 1:");
    let skill2 = prompt("Enter Skill 2:");
    let skill3 = prompt("Enter Skill 3:");

    let employee = {
        id: id,
        name: name,
        department: department,
        salary: salary,
        experience: experience,
        skills: [skill1, skill2, skill3]
    };

    employees.push(employee);

    console.log("Employee Added Successfully");
}


function SearchEmployeeById() {

    let id = Number(prompt("Enter Employee ID:"));

    let employee = employees.find(employee => employee.id === id);

    if (employee) {

        console.log(
            `ID: ${employee.id}, Name: ${employee.name}, Department: ${employee.department}, Salary: ₹${employee.salary}, Experience: ${employee.experience} years, Skills: ${employee.skills}`
        );

    } else {

        console.log("Employee Not Found");

    }
}


function FilterHighSalary() {

    let highSalaryEmployees =
        employees.filter(employee => employee.salary > 40000);

    highSalaryEmployees.forEach(employee => {

        console.log(
            `Name: ${employee.name}, Salary: ₹${employee.salary}`
        );

    });
}


function CalculateSalary() {

    let total = employees.reduce((total, employee) => {

        return total + employee.salary;

    }, 0);

    console.log(`Total Salary : ₹${total}`);
}


function SortBySalary() {

    let sortedEmployees = [...employees].sort((a, b) => {

        return b.salary - a.salary;

    });

    sortedEmployees.forEach(employee => {

        console.log(
            `Name: ${employee.name}, Salary: ₹${employee.salary}`
        );

    });
}


function DeleteEmployeeById() {

    let id = Number(prompt("Enter Employee ID to delete:"));

    let index =
        employees.findIndex(employee => employee.id === id);

    if (index !== -1) {

        let deletedEmployee = employees.splice(index, 1);

        console.log(
            `${deletedEmployee[0].name} deleted successfully`
        );

    } else {

        console.log("Employee Not Found");

    }
}


/*
Menu
*/

let choice;

do {

    choice = Number(prompt(
        `Employee Management System

1. Display All Employees
2. Add Employee
3. Search Employee
4. Filter High Salary Employees
5. Calculate Total Salary
6. Sort By Salary
7. Delete Employee
8. Exit

Enter your choice:`
    ));

    switch (choice) {

        case 1:
            DisplayAllEmployees();
            break;

        case 2:
            AddNewEmployee();
            break;

        case 3:
            SearchEmployeeById();
            break;

        case 4:
            FilterHighSalary();
            break;

        case 5:
            CalculateSalary();
            break;

        case 6:
            SortBySalary();
            break;

        case 7:
            DeleteEmployeeById();
            break;

        case 8:
            console.log("Thank you! Exiting Employee Management System.");
            break;

        default:
            console.log("Invalid Choice. Please enter 1 to 8.");

    }

} while (choice !== 8);
