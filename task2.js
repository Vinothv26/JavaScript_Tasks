/*1. Variables – Student Details
Create variables for studentName, age, course, and mark.
Use let, const, and var at least once.
Print all details using console.log().*/

var studentName="Vinoth";
const age=33;
let course="Javascript";
let mark=55;

console.log(`My name is ${studentName} with ${age} age studying ${course} language and scored ${mark} marks.` );

/*2. User Input
Use prompt() to get:
Name
Age
Display the name in the console.
Display the age using alert().*/

let name=prompt("Enter your name");
let age=prompt("Enter your age");
console.log(`Your name is ${name} and age is ${age}`);
alert(`Your name :${name} \n Age : ${age}`);

/*3. Data Types
Create one variable for each:
String
Number
Boolean
Undefined
Null
Print the value and its typeof.*/

let name="Vinoth";
let age=33;
let eligibleVoting=true;
let contactNo;
let email=null;

console.log(name, typeof(name));
console.log(age, typeof(age));
console.log(eligibleVoting, typeof(eligibleVoting));
console.log(contactNo, typeof(contactNo));
console.log(email, typeof(email));

/*4. Array – Shopping List
Create an array containing 6 products:
"Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"
Print:
First product
Third product
Last product
Complete array*/

let shopping=["Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"];
console.log(`First product: ${shopping[0]}`);
console.log(`Third product: ${shopping[2]}`);
console.log(`Last product: ${shopping[shopping.length-1]}`);
console.log(`Complete array: ${shopping}`);


/*5. Object – Employee Details
Create an object containing:
name
age
role
salary
Print each property separately.*/

let empDetails={
    name:"Vinoth",
    age:33,
    role:"Dotnet FSD",
    salary:123456
}
console.log(`Name   : ${empDetails.name}`);
console.log(`Age    : ${empDetails.age}`);
console.log(`Role   : ${empDetails.role}`);
console.log(`Salary : ${empDetails.salary}`);

/*6. Arithmetic Operator – Bill Calculator
Given:
Product price = 500
Quantity = 3
Calculate and print:
Total price
Discount of ₹100
Final amount
Use +, -, *, and /.*/

let productPrice=500;
let quantity=3;
let discount=100;
let totalPrice=productPrice*quantity;
let finalPrice=totalPrice-discount;

console.log(`Total price    : ${totalPrice}`);
console.log(`Discount price : ${discount}`);
console.log(`Final price    : ${finalPrice}`);

/*7. Comparison Operators
Write console.log() statements to check:
25 > 20
15 < 10
50 == "50"
50 === "50"
100 != "100"
100 !== "100"
Print the results.*/

console.log(25 > 20);
console.log(15 < 10);
console.log(50 == "50");
console.log(50 === "50");
console.log(100 != "100");
console.log(100 !== "100");

/*8. Logical Operators
Find the output of these without running them first:
console.log(10 > 5 && 20 > 15 || 5 > 10);

console.log(10 < 5 || 20 >= 20 && 5 == "5");

console.log(15 === "15" || 10 > 5 && 8 < 3);

console.log(20 >= 20 && 5 !== "5" || 10 < 5);

console.log(25 < 20 || 30 == "30" && 10 >= 10);*/

console.log(10 > 5 && 20 > 15 || 5 > 10); //true && true = true || false = true
console.log(10 < 5 || 20 >= 20 && 5 == "5"); //false || true = true && true = true
console.log(15 === "15" || 10 > 5 && 8 < 3); // false || true = true && false = false
console.log(20 >= 20 && 5 !== "5" || 10 < 5); // true || true = true || false = true
console.log(25 < 20 || 30 == "30" && 10 >= 10); // false || true = true && true = true

/*9. Ternary Operator – Login
let passwordCorrect = true;
Using a ternary operator, print:
"Login successful"
if true, otherwise:
"Invalid password"*/

let password=false;
console.log(password ? "Login sucessfull" : "Invalid password");

/*10. Type Casting – Marks
You have:
let mark1 = "80";
let mark2 = "70";
Convert both values into numbers and calculate the total.
Expected:
150*/

let mark1="80";
let mark2="70";
let total=Number(mark1)+Number(mark2);
console.log(total);

/*11. Voting Eligibility
Create:
let age = 20;
Using if...else, print:
"You can vote"
if age is 18 or above; otherwise:
"You cannot vote"*/

let age= 20;
if(age>=18)
    console.log("You can vote");
else
    console.log("You can't vote");

/*12. Student Grade
Create a mark variable.
Using if...else if...else:
90–100 → A Grade
75–89 → B Grade
50–74 → C Grade
Below 50 → Fail
Above 100 or below 0 → Invalid Mark*/

let mark = 0;
if (mark > 100 || mark < 0) {
  console.log("Invalid mark");
} 
else if (mark <= 100 && mark >= 90) {
  console.log(" A Grade");
}
else if (mark <90 && mark>=75){
    console.log("B Grade");
}
else if(mark <75 && mark >= 50){
    console.log(" C Grade");
}
else{
    console.log(" Fail grade");
}

    
/*13. Time Greeting
Create:
let time = 15;
Using if...else if, display:
1–6 → Early Morning
7–12 → Good Morning
13–15 → Good Afternoon
16–19 → Good Evening
20–24 → Good Night
Otherwise → Invalid Time
This directly follows the time-condition practice in your code.*/

let time = 15;
if (time >= 1 && time <= 6) {
    console.log("Early Morning");
}
else if (time >= 7 && time <= 12) {
    console.log("Good Morning");
}
else if (time >= 13 && time <= 15) {
    console.log("Good Afternoon");
}
else if (time >= 16 && time <= 19) {
    console.log("Good Evening");
}
else if (time >= 20 && time <= 24) {
    console.log("Good Night");
}
else {
    console.log("Invalid Time");
}

/*14. Nested If – Job Eligibility
Take:
age
height
weight
A candidate is eligible only if:
Age ≥ 21
Height ≥ 170 cm
Weight ≥ 70 kg
Use nested if statements and display the appropriate reason if the candidate is not eligible. This is based on the nested-if pattern in your code.*/

let age = prompt("Enter your age");
let height = prompt("Enter your height");
let weight = prompt("Enter your weight");
if (age >= 21) {
    if (height >= 170) {
        if (weight >= 70) {
            console.log("Your are eligible");
        }
        else {
            console.log("You aren't eligible, Weight must greater than 70 kg");
        }
    }
    else {
        console.log("You aren't eligible, Height must greater than 170 cm");
    }
}
else {
    console.log("You aren't eligible, Age must greater than  21");
}

/*15. Switch – Traffic Light
Create:
let trafficLight = "green";
Using switch, display:
red → "Stop the vehicle"
yellow → "Get ready"
green → "Go"
Anything else → "Invalid traffic light"*/

let trafficLight="White";
switch(trafficLight){
case "Green":
    console.log("Go");
    break;
case "Red":
    console.log("Stop the vechile");
    break;
case "Yellow":
    console.log("Get ready");
    break;
default:
    console.log("Invalid traffic light");
}
