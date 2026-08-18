/*🟢 Level 1 — Basics
Task 1: Student Details
Create variables for name, age, department, and cgpa.
Print them using console.log().
Use both normal concatenation and template literals.*/

let name = "Vinoth";
let age = 33;
let department ="CSE";
let cgpa = 7.2;

console.log("Name : "+name);
console.log("Age : "+age);
console.log(`Department : ${department}`);
console.log(`CGPA : ${cgpa}`);

/*Task 2: Simple Calculator
Create variables a = 20 and b = 10.
Print:
Addition
Subtraction
Multiplication
Division
Modulus
Power*/

let a=20;
let b=10;
console.log(`Addition of ${a} and ${b} is ${a+b}`);
console.log(`Subtraction of ${a} and ${b} is ${a-b}`);
console.log(`Multiplication of ${a} and ${b} is ${a*b}`);
console.log(`Division of ${a} and ${b} is ${a/b}`);
console.log(`Modulus of ${a} and ${b} is ${a%b}`);
console.log(`Power of ${a} and ${b} is ${a**b}`);

/*Task 3: Age Checker
Take age using prompt().
18 or above → Eligible to vote
Below 18 → Not eligible*/

let age = Number(prompt("Enter your age"));

if(age>=18){
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible");
}

/*🟡 Level 2 — Conditions
Task 4: Student Grade
Take marks using prompt().
90–100 → A
80–89  → B
70–79  → C
60–69  → D
Below 60 → Fail
Use if / else if / else.*/

let mark =Number(prompt("Enter your mark"));
if(mark <= 100 && mark >=0){
if(mark <= 100 && mark >=90){
    console.log("You are graded as A");
}
else if(mark >=80){
    console.log("You are graded as B");
}
else if(mark >=70){
    console.log("You are graded as C");
}
else if(mark >=60){
    console.log("You are graded as D");
}
else {
    console.log("You are fail");
}}
else{
    console.log("Enter a valid mark between 0 and 100")
}


/*Task 5: Login System
Create:
correctUsername = "admin"
correctPassword = "1234"
Ask the user for username and password.
Expected:
Both correct → Login successful
Username wrong → Invalid username
Password wrong → Invalid password
Both wrong → Invalid credentials*/

let correctUsername = "admin";
let correctPassword = "1234";

let username = prompt("Enter your username");
let password = prompt("Enter your password");

if(correctUsername === username && correctPassword === password){
    console.log("Login successful");
}else{
    if(correctUsername === username && correctPassword !==password){
        console.log("Invalid password");
    }
    else if(correctUsername !== username && correctPassword ===password){
        console.log("Invalid username")
    }
    else{
        console.log("Both username and password are invalid");
    }
}


/*Task 6: ATM Withdrawal
Create:
balance = 10000
Ask the user for withdrawal amount.
Check:
Amount must be greater than 0
Amount cannot exceed balance
Amount must be a multiple of ₹100
If valid, subtract it from balance
This is directly related to the ATM logic in your notes.*/

let balance = 10000;
let withdrawal = Number(prompt("Enter the amount to withdraw"));
if(withdrawal<=0){
    console.log("Withdrawal must be greater than 0");
}
else if(withdrawal>balance){
    console.log("Withdrawal cannot exceed balance")
}
else if((withdrawal%100)!==0){
    console.log("Withdrawal must be a multiple of 100")
}
else {
    balance-=withdrawal;
    console.log(`Successfully withdrawn ₹${withdrawal}`);
    console.log(`Remaining Balance : ₹${balance}`)
}

/*🟡 Level 3 — Loops
Task 7: Multiplication Table
Take a number from the user.
For example:
Input: 7

7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70
Use a for loop.*/

let tableNo=Number(prompt("Enter number for the table"));
for(let i=1;i<=10;i++){
    console.log(`${tableNo} * ${i} = ${tableNo*i}`);
}

/*Task 8: Reverse Number
Input:
12345
Output:
54321
Use a loop.*/

let a=prompt("Enter number to reverse");
let reversed="";
for(let i=a.length-1; i>=0;i--){
    reversed+=a[i];
}
console.log(`Reverse of ${a} is ${reversed}`);

/*Task 9: OTP System
Create:
correctOTP = 1234
Give the user maximum 3 attempts.
Correct → OTP verified
Wrong → Try again
3 wrong attempts → Account blocked
This builds directly on the OTP while-loop example in your notes.*/

let correctOTP=1234;
let attempts=0;
while(attempts<3){
let enteredOTP=Number(prompt("Enter the OTP"));
attempts++;
if(correctOTP===enteredOTP){
    console.log("Login successful");
    break;
}
else{
    console.log("Incorrect OTP");
}
if(attempts>=3){
    console.log("Account Blocked");
}
}


/*🟠 Level 4 — Functions
Task 10: Salary Calculator
Create:
calculateSalary(basicSalary, bonus)
Return:
basicSalary + bonus
Example:
calculateSalary(30000, 5000)
→ 35000*/

function CalculateSalary(basicSalary, bonus){
    return basicSalary+bonus;
}
let Salary=CalculateSalary(30000,5000);
console.log(`Complete Salary : ${Salary}`)

/*Task 11: Calculator Function
Create separate functions:
add()
subtract()
multiply()
divide()
Then call them with different values.*/

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

console.log(`Addition is ${add(5,5)}`);
console.log(`Subtraction is ${subtract(15,5)}`);
console.log(`Multipication is ${multiply(10,10)}`);
console.log(`Divition is ${divide(30,5)}`);

/*Task 12: Eligibility Function
Create:
checkEligibility(age, height, weight)
Rules:
age >= 21
height >= 170
weight >= 70
If all conditions are satisfied:
Eligible
Otherwise:
Not eligible*/

function CheckEligibility(age,height,weight){
if (age>=21 && height >=170 && weight >=70){
    console.log("You are eligible");
}
else{
    console.log("You are not eligible");
}
}
let age = prompt("Enter your age");
let height = prompt("Enter your height");
let weight = prompt("Enter your weight");
CheckEligibility(age,height,weight);

/*🔴 Level 5 — Array Practice
Your notes cover methods such as push, pop, shift, unshift, splice, concat, slice, flat, includes, 
indexOf, sort, and reverse.
Task 13: Shopping Cart
let cart = ["Laptop", "Mouse", "Keyboard"];
Perform:
Add "Monitor"
Remove "Mouse"
Add "Headset" at the beginning
Remove the last item
Print final cart
Use only array methods.*/

let cart = ["Laptop", "Mouse", "Keyboard"];
cart.push("Monitor");
cart.splice(1,1);
cart.unshift("Headset");
cart.pop();
console.log(`Final cart : ${cart}`);


/*Task 14: Find Maximum
let numbers = [10, 45, 23, 89, 12, 67];
Find the largest number.*/

let numbers = [10, 45, 23, 89, 12, 67];
numbers.sort((a,b)=>b-a);
console.log(`Largest Number : ${numbers[0]}`);


/*Task 15: Remove Duplicate Values
Input:
[1, 2, 3, 2, 4, 1, 5]
Output:
[1, 2, 3, 4, 5]*/

let array=[1, 2, 3, 2, 4, 1, 5];

let uniqueNo=array.filter((v,i)=>{
    return array.indexOf(v)===i;
});
console.log(array);
console.log(uniqueNo);


/*🔥 Level 6 — Higher-Order Functions
Your notes specifically cover forEach, map, filter, find, reduce, some, and every.
Task 16: Employee Salary Filter
let employees = [
  {name: "Arun", salary: 30000},
  {name: "Bala", salary: 50000},
  {name: "Kumar", salary: 25000},
  {name: "Ravi", salary: 70000}
 ];
 Using filter():
 Find employees whose salary >= 40000*/

 let employees = [
  {name: "Arun", salary: 30000},
  {name: "Bala", salary: 50000},
  {name: "Kumar", salary: 25000},
  {name: "Ravi", salary: 70000}
 ];

 let result=employees.filter(employee=>employee.salary>=40000);

result.forEach(employee => {
    console.log(`Name: ${employee.name}, Salary: ₹${employee.salary}`);
});

/*Task 17: Increase Salary
Using map():
salary < 40000 → increase by 5000
salary >= 40000 → increase by 10000*/

 let employees = [
  {name: "Arun", salary: 30000},
  {name: "Bala", salary: 50000},
  {name: "Kumar", salary: 25000},
  {name: "Ravi", salary: 70000}
 ];

 let updatedEmployees=employees.map(employee=>{
    if(employee.salary<40000){
        return{...employee, salary:employee.salary+5000};
    }
    else{
        return{...employee, salary : employee.salary+10000};
    }
 });
updatedEmployees.forEach(employee=>{
    console.log(`Name: ${employee.name}, Salary: ₹${employee.salary}`);
});

/*Task 18: Total Salary
Using reduce():
Find the total salary of all employees.*/

let employees = [
    { name: "Arun", salary: 30000 },
    { name: "Bala", salary: 50000 },
    { name: "Kumar", salary: 25000 },
    { name: "Ravi", salary: 70000 }
];

let totalSalary = employees.reduce((total,employee)=>{
    return total+employee.salary;
},0);
console.log(`Total Salary : ₹${totalSalary}`);


/*Task 19: Check Employee
Using some():
Is there any employee earning more than ₹100000?
Using every():
Are all employees earning at least ₹20000?*/

let employees = [
    { name: "Arun", salary: 30000 },
    { name: "Bala", salary: 50000 },
    { name: "Kumar", salary: 25000 },
    { name: "Ravi", salary: 70000 }
];

// Using some()
let highSalary = employees.some(employee => employee.salary > 100000);

console.log(`Any employee earning more than ₹100000: ${highSalary}`);

// Using every()
let minimumSalary = employees.every(employee => employee.salary >= 20000);

console.log(`Are all employees earning at least ₹20000: ${minimumSalary}`);

/*🚀 Interview Challenge
Task 20: Employee Management Mini Program
Create an array:*/
let employees = [
  {
    id: 101,
    name: "Arun",
    department: "IT",
    salary: 35000
  },
  {
    id: 102,
    name: "Bala",
    department: "HR",
    salary: 45000
  },
  {
    id: 103,
    name: "Kumar",
    department: "IT",
    salary: 60000
  }
];
// Without changing the original data:
// Print all employee names using forEach()

employees.forEach(employee=>{
    console.log(`ID : ${employee.id}, Name : ${employee.name}, Department : ${employee.department}, Salary : ₹${employee.salary}`)
})

// Get only IT employees using filter()

let filtered = employees.filter(employee=>employee.department==="IT");

filtered.forEach(employee=>{
    console.log(`Name : ${employee.name}, Department : ${employee.department}`);
});

// Increase every salary by 10% using map()

let mapfun = employees.map(employee=>{
    return{
        ...employee,salary:employee.salary*1.10
    };
});
mapfun.forEach(employee=>{
    console.log(`ID : ${employee.id}, Name : ${employee.name}, Department : ${employee.department}, Salary : ₹${employee.salary}`)
});
// Find employee with salary ₹45000 using find()

let sal45000 = employees.find(employee=>employee.salary===45000);

console.log(`ID : ${sal45000.id}, Name : ${sal45000.name}, Department : ${sal45000.department}, Salary : ₹${sal45000.salary}`);

// Calculate total salary using reduce()

let totalSalary = employees.reduce((total,employee)=>{
    return total+employee.salary;
},0);
console.log(`Total Salary : ₹${totalSalary}`);

// Check whether anyone earns above ₹50000 using some()

let highSalary = employees.some(employee => employee.salary > 50000);

console.log(`Any employee earning more than ₹50000: ${highSalary}`);

// Check whether everyone earns above ₹20000 using every()

let minimumSalary = employees.every(employee => employee.salary >= 20000);

console.log(`Are all employees earning at least ₹20000: ${minimumSalary}`);

// Sort employees by salary from highest → lowest

let sortedEmployees = [...employees].sort((a,b)=>b.salary-a.salary);

sortedEmployees.forEach(employee=>{
console.log(`ID : ${employee.id}, Name : ${employee.name}, Department : ${employee.department}, Salary : ₹${employee.salary}`)
});

// Destructure each employee's name and salary

employees.forEach(employee=>{
    let {name, salary}=employee;
    console.log(`Name: ${name}, Salary: ₹${salary}`);
});

// Use the spread operator to create a new employee list

let newList = [...employees];
console.log("New Employee List:", newList);
newList.forEach(employee => {
    console.log(`ID : ${employee.id}, Name : ${employee.name}, Department : ${employee.department}, Salary : ₹${employee.salary}`);
});
