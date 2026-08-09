/*Task 1 - Student Details
Create variables using:
const for college name
let for student name
var for student age
Print all values using console.log().*/

const collegeName=prompt("Enter your college name");
let studentName=prompt("Enter student name");
var studentAge=prompt("Enter age")
console.log("College name :"+collegeName);
console.log("Student name :"+studentName);
console.log("Student age :"+studentAge);


/*Task 2 - Mobile Price
Create a variable price = 25000.
Change the price to 27000.
Print the updated price.*/

let price=25000;
console.log("Price:"+price);
price=27000;
console.log("Updated price:"+price);

/*Task 3 - Company Name
Create a const variable called company.
Try to change its value.
Observe the error.*/

const companyName="Stackly";
companyName="Preystack";
console.log(companyName);

/*Task 4 - Console Practice
Print the following using different console methods.
"Login Successful"
"Password is Weak"
"Network Error"
Use:
console.log()
console.warn()
console.error()*/

console.log("Login Successful");
console.warn("Password is Weak");
console.error("Network error");

/*Task 5 - Data Types
Create variables for:
Your Name
Your Age
Are you a developer? (true/false)
An uninitialized variable
Print the value and its datatype.*/

var name=prompt("Enter your name");
var age=prompt("Enter your age");
let isDeveloper=prompt("Are you developer(true/false)")
let sample;
console.log("Your Name:"+name, typeof(name));
console.log("Your Age"+age,typeof(age));
console.log("Are you ddeveloper:"+isDeveloper, typeof(isDeveloper));
console.log("Uninitialized:"+sample, typeof(sample));


/*Task 6 - Shopping Cart Array
Create an array named cart.
Store:
Laptop
Mouse
Keyboard
Headset
Monitor
Print:
First product
Third product
Last product*/

let store=["Laptop","Mouse","Keyboard","Headset", "Monitor"];
console.log("First product:"+store[0]);
console.log("Third product:"+store[2]);
console.log("Last product:"+store[store.length-1])

/*Task 7 - Favorite Movies
Create an array with 6 movie names.
Print:
2nd movie
5th movie
Last movie*/

let movies=["Gilli","Beast","Bigil","Theri","Merasal","Jana Nayagan"]
console.log("2nd movie:"+movies[1]);
console.log("5th movie:"+movies[4]);
console.log("Last movie:"+movies[movies.length-1]);

/*Task 8 - Employee Object
Create an object.
Properties:
name
age
department
skills (array)
salary
Print:
Employee name
Department
First skill
Salary*/

let employee={
    name:"Vinoth",
    age:33,
    department:"FSD",
    skills:["Angular","Dotnet","Sql Server"],
    salary:12345
};
console.log("Employee Name:"+employee.name);
console.log("Department:"+employee.department);
console.log("Skills:"+employee.skills[0]);
console.log("Salary:"+employee.salary);


/*Task 9 - Product Details
Create an object.
Properties:
productName
brand
price
colors (array)
Print:
Brand
Price
Second color*/

let productDetails={
    productName:"MT15",
    brand:"Yamaha",
    price:123456,
    colors:["White","Black","Red"]
};

console.log("Brand: "+productDetails.brand);
console.log("Price: "+productDetails.price);
console.log("Color: "+productDetails.colors[1]);


/*Task 10 - Arithmetic Calculator
Take two numbers.
Perform:
Addition
Subtraction
Multiplication
Division
Modulus
Exponent
Print every result.*/

let a=10;
let b=5;

console.log("Addition of a & b: "+(a+b));
console.log("Subraction of a & b: "+(a-b));
console.log("Multiplication of a & b: "+(a*b));
console.log("Division of a & b: "+(a/b));
console.log("Modulus of a & b: "+(a%b));
console.log("Exponent of a & b: "+(a**b));

/*Task 11 - Increment Practice
let a = 5;
Perform:
a++
++a
a--
--a
Print after every step.*/

let a=5;
a++;
console.log("a Value: "+a)
++a;
console.log("a Value: "+a)
a--;
console.log("a Value: "+a)
--a;
console.log("a Value: "+a)

/*Task 12 - Predict the Output
let a = 10;

let b = a++;

let c = ++b;

console.log(a);
console.log(b);
console.log(c);
Write the output before running.*/

let a = 10;
let b = a++;
let c = ++b;

console.log(a);//11
console.log(b);//11
console.log(c);//11

/*Task 13 - Predict the Output
let x = 7;

let y = --x;

let z = y++;

console.log(x);
console.log(y);
console.log(z);
Predict the output.*/

let x = 7;
let y = --x;
let z = y++;

console.log(x); //6
console.log(y); //7
console.log(z); //6


/*Task 14 - School Object
Create an object.
Properties:
schoolName
principal
totalStudents
classes (array)
Print:
School name
Principal
Last class*/

let school={
    schoolName:"ABC",
    principal:"John",
    totalStudents:30,
    classes:["Tamil","English","Maths","Science","Social"]
};
console.log("School name: "+school.schoolName);
console.log("Principal: "+school.principal);
console.log("Last Class: "+school.classes[school.classes.length-1]);

/*Task 15 - Grocery List
Create an array with 8 grocery items.
Print:
First item
Fourth item
Last item*/

let grocery=["Rice","Milk","Sugar","Wheat","Oil","Salt","Bread","Eggs"];
console.log("First Item: "+grocery[0]);
console.log("Fourth Item: "+grocery[3]);
console.log("last Item: "+grocery[grocery.length-1]);

/*Task 16 - User Profile
Create variables:
Username
Email
Age
IsPremium
Print each value and datatype.*/

let userName="Vinoth";
let email="vinoth@gmail.com"
let age=33;
let isPremium=true;

console.log(userName, typeof(userName));
console.log(email, typeof(email));
console.log(age, typeof(age));
console.log(isPremium, typeof(isPremium));

/*Task 17 - Variable Rules
Create:
one var
one let
one const
Try:
Reassign all
Redeclare all
Write which operations are allowed and which give errors.*/

var a=10;
console.log(a);
a=20;// able to reassign
console.log(a);
var a=30;// able to redeclare
console.log(a);

let b=10;
console.log(b);
b=20;//able to reassign
console.log(b);
var b=30;//unable to declare
console.log(b);

const c=10;
console.log(c);
c=20;//unable to reassign
console.log(c);
const c=30;//unable to redeclare
console.log(c);

/*Task 18 - Marks Calculation
Create:
let tamil = 85;
let english = 90;
let maths = 95;
Calculate:
Total
Average
Print both.*/

let tamil = 85;
let english = 90;
let maths = 95;
let noOfSubjects=3;
let total=tamil+english+maths;
let average=total/noOfSubjects;

console.log("Tota;: "+total);
console.log("Average: "+average);

/*Task 19 - Company Database
Create an object:
Company
Employees (Array)
Location
Founded Year
CEO
Print:
CEO
Location
First employee*/

let companyDb={
        company:"Stackly",
        employees:["Vinoth","Jagan","Kamal","Babu"],
        location:"Chennai",
        foundedYear:2015,
        ceo:"Andrew"
};
console.log("CEO : "+companyDb.ceo);
console.log("Location : "+companyDb.location);
console.log("First Employee : "+companyDb.employees[0]);


/*Task 20 - Mini Profile
Create an object where one property is an array.
Example:
Name
City
Hobbies (Array)
Age
Print:
Name
Second hobby
Age*/

let miniProfile={
    name:"Vinoth",
    city:"Chennai",
    hobbies:["Cricket","Chess","Carrom","Football"],
    age:33
}

console.log("Name: "+miniProfile.name);
console.log("Second Hobby: "+miniProfile.hobbies[1]);
console.log("Age: "+miniProfile.age);
