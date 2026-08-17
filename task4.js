/*🟢 Level 1 — Variables & Operators
1. Salary Calculator
let salary = 30000;
let bonus = 5000;
let tax = 2000;
Calculate and print:
Final Salary: 33000*/

let salary =30000;
let bonus = 5000;
let tax= 2000;
let netSalary = (salary + bonus) - tax;
console.log(`Final Salary : ${netSalary}`);

/*2. Predict the Output
let a = 10;
let b = a++;
let c = ++a;
console.log(a);
console.log(b);
console.log(c);*/

let a = 10;// a=10
let b = a++; // a=10 stores b=10
let c = ++a;//a=12
console.log(a);//12
console.log(b);//10
console.log(c);//12

/*3. Logical Operators
Without running the code, predict the output:
console.log(10 > 5 && 20 < 10 || 5 === "5");
console.log(10 < 5 || 20 >= 20 && 5 == "5");
console.log(!(10 > 5));*/

console.log(10 > 5 && 20 < 10 || 5 === "5");// true && false = false || false = false
console.log(10 < 5 || 20 >= 20 && 5 == "5");// false || true = true && true = true
console.log(!(10 > 5)); //false

/*🟡 Level 2 — Conditions
4. ATM Withdrawal
Create:
let balance = 10000;
let withdrawal = 2500;
Rules:
Withdrawal must be greater than 0
Withdrawal cannot exceed balance
Withdrawal must be a multiple of 100
Otherwise show appropriate error
If successful, print remaining balance
This is directly related to the ATM example in your notes.*/

let balance = 10000;
let withdrawal = Number(prompt("Enter the amount to withdraw"));
if(withdrawal<0){
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

/*5. Student Grade
let mark = 78;
Create an if / else if / else program:
90-100 → A
80-89  → B
70-79  → C
60-69  → D
Below 60 → Fail*/

let mark = 59;
if (mark <=100 && mark>=90){
    console.log("You're graded as A");
}
else if(mark>=80){
    console.log("You're graded as B")
}
else if(mark>= 70){
    console.log("You're graded as C");
}
else if(mark >= 60){
    console.log("You're graded as D");
}
else{
    console.log("You're fail")
}


/*6. Nested Login
Create:
let username = "admin";
let password = "1234";
let otp = 5555;
Rules:
Check username
If correct, check password
If correct, check OTP
Print "Login successful" only when all three are correct.*/

let username = "admin";
let password = "1234";
let otp = 5555;
let enteredUsername=prompt("Enter username");
let enteredPassword=prompt("Enter password");
let enterdOtp=Number(prompt("Enter otp"))
if(username!==enteredUsername){
    console.log("Incorrect Username");
}
else if(password!==enteredPassword){
    console.log("Incorrect password");
}
else if(otp!==enterdOtp)
{
    console.log("Incorrect otp")
}
else{
    console.log("Login successful")
}

/*🟠 Level 3 — Loops
7. Number Pattern
Using a for loop:
1
2
3
4
5
6
7
8
9
10*/

for(let i=1;i<=10;i++){
    console.log(i);
}

/*8. Multiplication Table
let num = 7;
Expected:
7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70*/

let a=7;
for(let i=1;i<=10;i++){
console.log(`${a} * ${i} = ${a*i}`)
}

/*9. Reverse Countdown
Using while:
10
9
8
7
6
5
4
3
2
1
0*/

let i=10;
while(i>=0){
    console.log(i);
    i--;
}

/*10. OTP System
Create:
let correctOTP = 1234;
Allow the user maximum 3 attempts using while.
If correct:
OTP verified
Otherwise after 3 attempts:
Account blocked
This builds directly on your OTP loop example.*/

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
}
if(attempts>3){
    console.log("Account Blocked");
}

/*🔵 Level 4 — Arrays & Objects
11. Array Search
let fruits = ["apple", "banana", "orange", "grapes", "mango"];
Using a loop, print every fruit.
Then print:
First fruit: apple
Last fruit: mango*/

let fruits = ["apple", "banana", "orange", "grapes", "mango"];
for(let a of fruits){
    console.log(a)
}

console.log(`First fruit: ${fruits[0]}`);
console.log(`Last fruit : ${fruits[fruits.length-1]}`);

/*12. Object Details
Create:
let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};
Print each property using for...in.
Your notes use for...in for object traversal.*/

let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};

for(let a in employee){
    console.log(`${a} : ${employee[a]}`)
}

/*🔥 Level 5 — Functions
13. Calculator Function
Create:
function calculator(a, b, operator) {
    your code
}
It should support:
+
-
*
/
%
Example:
calculator(20, 5, "+");
calculator(20, 5, "*");*/

function calculator(a,b,op)
{
if(op==="+")
{
    return a+b;
}
else if(op==="-"){
    return a-b;
}
else if(op==="*"){
    return a*b;
}
else if(op==="/"){
    return a/b;
}
else if(op==="%"){
    return a%b;
}
else{
    console.log("Invalid operation")
}}

console.log(calculator(20,20,"+"));
console.log(calculator(20,20,"-"));
console.log(calculator(20,20,"*"));
console.log(calculator(20,20,"/"));
console.log(calculator(20,20,"%"));

/*14. Employee Salary
Create:
function salaryDetails(salary, bonus) {
    return final salary
}
Example:
salaryDetails(40000, 5000);
Expected:
45000*/

function salaryDetails(salary, bonus){
    return salary + bonus;
}

console.log(salaryDetails(40000, 5000));

/*15. Function With Default Parameter
Create a function:
function employee(name, role = "Trainee") {
    print name and role
}
Test:
employee("Arun");
employee("Kamal", "Developer");*/

function employee(name, role ="Trainee"){
    console.log(`Name : ${name}`);
    console.log(`Role : ${role}`)
}

employee("Arun");
employee("Kamal", "Developer");

/*🚀 Level 6 — Advanced Functions
16. Callback Task
Create:
function calculate(a, b, callback) {
    perform addition
    then call callback
}
Create separate functions:
add()
sub()
mul()
Then pass them as callbacks.
This practices the callback/HOF concept from your notes.*/

function calculate(a,b,callback){
    let result=callback(a,b);
    console.log(result);
}

function add(a,b){
    return (a+b);
}
function sub(a,b){
    return (a-b);
}
function mul(a,b){
    return (a*b);
}

calculate(10, 5, add);
calculate(10, 5, sub);
calculate(10, 5, mul);

/*17. Generator Task
Create a generator that gives:
₹100 Cashback
10% Discount
₹500 Cashback
20% Discount
Better Luck Next Time
Use .next().value to retrieve each reward.*/

function* rewards(){
    yield "₹100 Cashback";
    yield "10% Discount";
    yield "₹500 Cashback";
    yield "20% Discount";
    yield "Better Luck Next Time";
}

let rp=rewards();
console.log(rp.next().value);
console.log(rp.next().value);
console.log(rp.next().value);
console.log(rp.next().value);
console.log(rp.next().value);
if(rp.next().done){
    console.log("Rewards completed")
}

/*💥 Level 7 — Spread / Rest / Destructuring
18. Spread Operator
Given:
let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Express", "MongoDB"];
Create:
fullStack
Expected:
["HTML", "CSS", "JavaScript", "Node", "Express", "MongoDB"]
Your notes specifically use spread to merge arrays and objects.*/

let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Express", "MongoDB"];
let fullstack=[...frontend,...backend];

console.log(fullstack);

/*19. Array Destructuring
Given:
let student = ["Arun", "ECE", 8.5, "Developer"];
Use destructuring to create:
name
department
cgpa
role
Do not use:
student[0]
student[1]*/

let student = ["Arun", "ECE", 8.5, "Developer"];
let [name, department, cgpa, role]=student;

console.log(`Name : ${name}`);
console.log(`Department : ${department}`);
console.log(`CGPA : ${cgpa}`);
console.log(`Role : ${role}`);

/*20. Nested Object Destructuring
Given:
let company = {
    name: "Stackly",
    employee: {
        name: "Arun",
        role: "Developer",
        salary: 50000
    }
};
Using nested object destructuring, directly extract:
employeeName
role
salary*/

let company = {
    name: "Stackly",
    employee: {
        name: "Arun",
        role: "Developer",
        salary: 50000
    }
};

let  {employee:{name: employeename, role, salary}}=company;

console.log(`Employee Name : ${employeename}`);
console.log(`Role : ${role}`);
console.log(`Salary : ${salary}`);

/*🏆 Final Challenge — Mini Project
Build a Student Management Console Program using only the concepts in your notes.
Create:
let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];

Your program should:
Print all students
Print only ECE students
Find students who scored above 80
Calculate total marks
Calculate average
Display highest mark
Display lowest mark
Use for...of
Use functions
Use object destructuring*/

let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];

//Print all students

function AllStudents(){
    for(let a of students){
        let {name, department, mark} = a;
        console.log(`Name: ${name}, Department: ${department}, Mark: ${mark}`);}
}
AllStudents();

//Print only ECE students

function ECEStudents(){
    for (let a of students){
        let {name, department, mark} = a;
        if(department==="ECE"){
        console.log(`Name: ${name}, Department: ${department}, Mark: ${mark}`);}
        }
    }

    ECEStudents();

//Find students who scored above 80

function Above80(){
    for (let a of students){
        let {name, department, mark} = a;
        if(mark >80){
        console.log(`Name: ${name}, Department: ${department}, Mark: ${mark}`);}
        }
    }

    Above80();

//Calculate total marks

function Totalmark(){
   let total=0;
   for(let a of students){
    let{mark}=a;
    total+=mark;
   }
   return total;
    }
    console.log(`Total : ${Totalmark()}`);


// Calculate average

function Averagemark(){
    let total=Totalmark();
    let Average=total/students.length;
    console.log(`Average : ${Average}`)
   }
   Averagemark();

//Highest mark

function HighestMark() {
    let highest = students[0].mark;

    for (let student of students) {
        let { mark } = student;

        if (mark > highest) {
            highest = mark;
        }
    }

    return highest;
}

console.log(`Highest mark : ${HighestMark()}`);


//lowest mark

function Lowestmark(){
    let lowest = students[0].mark;

    for (let student of students) {
        let { mark } = student;

        if (mark < lowest) {
            lowest = mark;
        }
    }

    return lowest;
}
console.log(`Lowest mark : ${Lowestmark()}`);