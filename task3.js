/*🟢 Task 1 — Employee Eligibility
Use prompt() to get:
Employee name
Age
Experience
Salary
Rules:
Age >= 21
Experience >= 1 year
Salary >= 20,000
If all are true, print:
Employee is eligible
Otherwise, print the exact reason why they are not eligible.
Topics: variables, prompt, comparison, logical operators, if-else.*/

let employeeName = prompt("Enter your name");
let age = Number(prompt("Enter your age"));
let experience = Number(prompt("Enter your experience"));
let salary = Number(prompt("Enter your salary"));
if (age >= 21 && salary >= 20000 && experience >= 1) {
  console.log("You're eligible");
} else {
  if (age < 21) {
    console.log("You're age ineligible");
  }
  if (salary < 20000) {
    console.log("You're salary is ineligible");
  }
  if (experience < 1) {
    console.log("You're experience is ineligible");
  }
}

/*🟢 Task 2 — ATM Withdrawal
Create an ATM program.
Current balance = 10000
Ask the user:
Enter withdrawal amount:
Rules:
Amount must be greater than 0
Amount must be <= balance
Withdrawal amount should be a multiple of 100
Example:
Balance: ₹10000
Withdraw: ₹2500
 Output:
 Withdrawal successful
Remaining balance: ₹7500
Topics: operators, if-else, logical operators.*/

let currentBalance = 10000;
let withdraw = Number(prompt("Enter the amount to withdraw"));
if (withdraw > 0 && withdraw <= currentBalance && withdraw % 100 ===0) {
  currentBalance -= withdraw;
  console.log(`Withdrawal sucessfull of  ${withdraw}`);
  console.log(`Remaining balance : ${currentBalance}`);
} else {
  console.log("Enter valid amount");
}

/*🟡 Task 3 — Login System with 3 Attempts
Create:
correctUsername = "admin"
correctPassword = "12345"
Ask the user for username and password.
Give the user maximum 3 attempts.
Example:
Attempt 1 → wrong
Attempt 2 → wrong
Attempt 3 → correct

Output:
Login successful
If all 3 attempts fail:
Account locked
Topics: while, if-else, break, variables. Your notes already use a similar OTP-attempt pattern.*/

let userName="admin";
let password="12345";
let chance=1;
while(chance<=3){
    let currentUsername=prompt("Enter username");
    let currentPassword=prompt("Enter password");
    if(userName==currentUsername && password==currentPassword){
        console.log("You have entered correct details");
        break;
    }
    chance++;
}
if(chance>3){
    console.log("Account locked for entering Invalid username / password");
}

/*
🟡 Task 4 — Student Grade System
Ask for marks of 5 subjects.
Calculate:
Total
Average
Grade
Rules:
90-100 → A
80-89  → B
70-79  → C
60-69  → D
Below 60 → F
Example:
Math = 80
English = 75
Science = 90
Social = 85
Computer = 95

Total = 425
Average = 85
Grade = B
Topics: variables, arithmetic operators, conditions.
*/

let tamil=Number(prompt("Enter tamil mark"));
let english=Number(prompt("Enter english mark"));
let maths=Number(prompt("Enter maths mark"));
let science=Number(prompt("Enter science mark"));
let social=Number(prompt("Enter social mark"));
let noOfSubjects=5;
let total=tamil+english+maths+science+social;
let average=total/noOfSubjects;
console.log(`Total = ${total}`);
console.log(`Average = ${average}`);
if(average>=90){
    console.log(`Grade = A`);
    }
    else if(average>=80){
    console.log(`Grade = B`);
    }
    else if(average >=70){
            console.log(`Grade = C`);
    }
    else if(average>=60){
            console.log(`Grade = D`);
    }
    else{
            console.log(`Grade = F`);
    }

/*
🟡 Task 5 — Number Pattern
Using a for loop:
1
2
3
4
5
Then create:
5
4
3
2
1
Then:
1 2 3 4 5
Challenge: Do each one using a different loop.
*/

//for loop
for(let i=1;i<=5;i++)
{
    console.log(i);
}
//while loop
let i=5;
console.log("While loop");
while(i>0){
    console.log(i);
    i--;
}
//do while
let j=1;
console.log("do while")
do{
    console.log(j);
    j++;
}while(j<=5);

/*
🟠 Task 6 — Shopping Cart
Create an array:
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
Create prices:
let prices = [50000, 1000, 2000, 15000];
Using a loop, display:
Laptop - ₹50000
Mouse - ₹1000
Keyboard - ₹2000
Monitor - ₹15000
Then calculate:
Total = ₹68000
Topics: arrays, loops, arithmetic.
*/
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
let prices = [50000, 1000, 2000, 15000];
let total=0;

for(let i=0; i<=products.length-1;i++){
    console.log(`${products[i]} - ₹${prices[i]}`);
    total+=prices[i];
}
console.log(`Total = ₹${total}`)

/*
🟠 Task 7 — Employee Object
Create:
let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Software Engineer",
    salary: 45000
};
Using for...in, print:
name : Arun
empId : STK-101
role : Software Engineer
salary : 45000
Then create a function:
calculateBonus()
If salary >= 40000:
Bonus = 5000
Otherwise:
Bonus = 3000
Your notes cover objects and for...in.
*/

let employee = {
    name:"Arun",
    empId:"STK-101",
    role:"Software Engineer",
    salary:45000
}
for(let a in employee){
    console.log(`${a} : ${employee[a]}`);
}

function calculateBonus(){
    if(employee.salary>=40000){
return 5000    }
    else{
return 3000;
    }
}
let bonus=calculateBonus();
for(let a in employee){
    console.log(`${a} : ${employee[a]}`);
}
console.log(`Bonus : ${bonus}`);

/*
🔴 Task 8 — Bank Account Functions
Create these functions:
deposit()
withdraw()
checkBalance()
Starting balance:
₹10,000
Example:
deposit(5000)
withdraw(2000)
checkBalance()
Expected:
Deposited: ₹5000
Withdrawn: ₹2000
Current Balance: ₹13000
Challenge: Don't use global variables unnecessarily. Pass values through parameters and return results.
 This practices the parameter/argument/return concepts in your notes.*/

 function deposit(balance, amount){
    balance+=amount;
    console.log(`Deposited :₹${amount}`)
    return balance;
 }

 function withdraw(balance, amount){
    balance-=amount;
    console.log(`Withdrawn : ₹${amount}`)
    return balance;
 }
 function currentBalance(balance){
    console.log(`Current Balance: ₹${balance}`)
 }

 let balance=10000;

 balance=deposit(balance,5000);
balance=withdraw(balance,2000)
currentBalance(balance)

/*🔴 Task 9 — Callback Calculator
Create:
add()
sub()
mul()
div()
Then create a higher-order function:
calculate(callback, a, b)
Example:
calculate(add, 20, 10);
calculate(sub, 20, 10);
calculate(mul, 20, 10);
calculate(div, 20, 10);
Expected:
30
10
200
2
This directly practices the callback/higher-order-function concept from your notes.
*/

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function calculate(callback,a,b){
    return callback(a,b)
}
console.log(calculate(add, 20, 10));
console.log(calculate(sub, 20, 10));
console.log(calculate(mul, 20, 10));
console.log(calculate(div, 20, 10));