// USER INPUT & CONDITIONAL 
// STATEMENT

// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

// var city = prompt("Enter your city");

// if (city === "karachi"){
//     alert("Welcome to city of lights")
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter Your Gender");


// if (gender === "male"){
//     alert("Good Morning Sir")
// }
// else if (gender === "female"){
//     alert("Good Morning Ma’am")
// }

// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:

// var signal = prompt("Enter your signal colour");
// var message = ""

// if (signal === "red"){
//     message = "Must Stop";
// }
//  else if (signal === "yellow"){
//     message = "Ready To Move";
// }

// else if (signal === "green"){
//     message = "Move Now";
// }
// alert(message)


// 4. Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”


// var fuel = +prompt("Remaining fuel in car")

// if (fuel <=0.25){
//     alert("Please refill the fuel in your car")
// }


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//  this condition is true

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//  this condition is false

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
//  this condition is false

// if (c === 13){
// alert("condition 2 is true");
// }
//  this condition is true


// if (++c < 14){
// alert("condition 3 is true");
// }
//  this condition is false

// if(c === 14){
// alert("condition 4 is true");
// }

//  this condition is true

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  this condition is true

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
//  this condition is true



// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
//  this condition is true


// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:


// var percentge = +prompt("Enter Your Percentage ");
// var Remarks = ""

// if (percentge >=80 && percentge <=100){
//     alert("A+");
//     Remarks = "Excellent"
// }
//  else if (percentge >=70 && percentge <=80){
//     alert("A");
//     Remarks = "Good"
// }
// else if (percentge >=60 && percentge <=70){
//     alert("B");
//     Remarks = "You need to improve"
// }
// else if (percentge >=50 && percentge <=60){
//     alert("Fail");
//     Remarks = "Sorry"
// }
// alert(Remarks);


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.




// Generate a random secret number between 1 and 10
// const secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
// const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess is correct or close enough
// if (userGuess === secretNumber) {
//     console.log("Bingo! Correct answer");
// } else if (userGuess === secretNumber + 1) {
//     console.log("Close enough to the correct answer");
// } else {
//     console.log(`Sorry, the correct answer was Try again next time!`);
// }

// Write a program that checks whether the given input is an
// even number or an odd number.


// Prompt the user to enter a number
// const userInput = prompt("Enter a number:");

// Convert the user input to an integer
// const number = parseInt(userInput);

// Check if the number is even or odd
// if (isNaN(number)) {
//     console.log("Invalid input. Please enter a valid number.");
// } else if (number % 2 === 0) {
//     console.log(`${number} is an even number.`);
// } else {
//     console.log(`${number} is an odd number.`);
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “ The Weather today is Normal.”
// c. T > 20 then “ Today’s Weather is cool.”
// d. T > 10 then “ OMG! Today’s weather is so Cool.”


// var temperature = prompt("Enter Your temperature ")

// if (temperature >=40 && temperature <=50){
//     console.log("It is too hot outside");
// }
//  else if (temperature >=30 && temperature <=40){
//     console.log("The Weather today is Normal");
   
// }
// else if (temperature >=20 && temperature <=30){
//     console.log("Todays Weather is cool.");
   
// }
// else if (temperature >=10 && temperature <=20){
//     console.log("OMG! Todays weather is so Cool.");
// }

// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


// Prompt the user for the first number
// var firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user for the second number
// var secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt the user for the operation (+, -, *, /, %)
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;

// Perform the operation based on user input
// if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     result = "Invalid input. Please enter valid numbers.";
// } else {
//     if (operation === "+") {
//         result = firstNumber + secondNumber;
//     } else if (operation === "-") {
//         result = firstNumber - secondNumber;
//     } else if (operation === "*") {
//         result = firstNumber * secondNumber;
//     } else if (operation === "/") {
//         if (secondNumber === 0) {
//             result = "Division by zero is not allowed.";
//         } else {
//             result = firstNumber / secondNumber;
//         }
//     } else if (operation === "%") {
//         if (secondNumber === 0) {
//             result = "Modulo by zero is not allowed.";
//         } else {
//             result = firstNumber % secondNumber;
//         }
//     } else {
//         result = "Invalid operation. Please enter +, -, *, /, or %.";
//     }
// }

// Display the result to the user
// console.log(`Result: ${result}`);



// HOME ASSIGMENT 
// Chapter 6 (Math Expression II)

// 1. Code a short form of x = x + 1; Use either of the two legal
// expressions.

// var x = x + 1

// var y = y + 1

// 2. If x has a value of 100, what is the fastest way to reduce it to 99
// with a math expression?

// x = 100;
// x--

// alert(x)

// 3. var x = 50;
// var y = x++;
// What is the value of y?

// var x = 50;
// var y = x++;

// console.log(y)

// The value = 50


// 4. var y = 50;
// var z = --y;
// What is the value of z?

// var y = 50;
// var z = --y;

// console.log(z);

// The value = 49


// 5. In a single statement, decrement num and assign its original value
// to newNum.


// var newNum = newNum--;

// console.log(newNum)

// 6. In a single statement add 1 to a variable and assign its original
// value to another variable.

// var originalVariable = 5; 
// var anotherVariable = originalVariable + 1;

// console.log(anotherVariable)


// Assign a number value to a variable.
// Increment the variable.
// Display the new value in an alert

// var Variable = 5; 
// ++Variable

// alert(Variable)

// Chapter 7 (Math Expression III)


// 1. var calculatedNum = 2 + (2 * 6);
// What is the value of calculatedNum?

// var calculatedNum = 2 + (2 * 6);

// the value of calculatedNum 14;

// 2. var calculatedNum = (2 + 2) * 6;
// What is the value of calculatedNum?

// var calculatedNum = (2 + 2) * 6;

// the value of calculatedNum=24


// 3. var calculatedNum = (2 + 2) * (4 + 2);
// What is the value of calculatedNum?

// var calculatedNum = (2 + 2) * (4 + 2);

// the value of calculatedNum=24

// 4. var calculatedNum = ((2 + 2) * 4) + 2;

// What is the value of calculatedNum?

// var calculatedNum = ((2 + 2) * 4) + 2;

// the value of calculatedNum = 18


// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 56.

// var result = 2 + 2 * 4 + 10;

// the answer is 20;

// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 20.

// let units = 2 + 2 * 4 + 10;

// answer = 20


// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4,
// clarified with parentheses, producing 5.

//  var result = 4 / 2 * 4;

//  result = 8


// Chapter 8 (Concatenating Text Strings)

// 1. var num = "2" + "2";
// What is the value of num? Include quotation marks.

// var num = "2" + "2";

// answer = "22"

// 2. message = ("Hello," + "Dolly");
// What is the value of message? (Include the quotation marks.)
// Alert the statement

// message = ("Hello," + "Dolly");

// alert(message);

// 3. alert("33" + 3);
// What message displays in the alert box?

// alert("33" + 3);

// answer = "333";

// 4. Write an alert that displays the concatenation of the two parts of
// "Pakistan Zindabad".

// var part1 = "Pakistan";
// var part2 = " Zindabad";
// var fullString = part1 + part2;

// alert(fullString);


// 5. Write a statement that assigns to a variable the concatenation of
// a string with a number

// var part1 = "Pakistan";
// var part2 = "1";
// var fullString = part1 + part2;

// alert(fullString);

// 6. Assign strings to two variables. Then concatenate them and assign
// the result to a third variable.

// var part1 = "Pakistan";
// var part2 = " Zindabad";

// var result = "Welcome to "

// alert(result + " " + part1 + part2);


// Chapter 9 (Prompts)

// 1. Code a prompt with the message "Enter first name". The user's
// response is assigned to firstName.

// var message = prompt("Enter first name")

// 2. Code a prompt with the message "Country?" and the default
// answer "China". The user's response is assigned to country.

// var country = prompt("country?" , "China")


// 3. Correct this statement
// var yourName = prompt(Enter Your Name");

// var yourName = prompt("Enter Your Name");


// 4. Code a prompt that specifies a string as the message Include a
// default input.

// var defa = prompt("string" , "deafultinput")


// 5. Assign strings to two variables. Code a prompt specifying the first
// variable as the message and the second variable as the default
// response. Assign the user's response to a third variable.

// var message = "Enter your name:";
// var defaultResponse = "John Doe";

// var userResponse = prompt(message, defaultResponse);

// 6. Display a prompt, including both a message and a default
// response.
// Display the user's response in an alert.

// var message = "Enter your favorite color:";
// var defaultResponse = "Blue";

// var userResponse = prompt(message, defaultResponse);

// if (userResponse !== null) {
//   alert("You entered: " + userResponse);
// } else {
//   alert("You didn't enter anything.");
// }

// Chapter 10 (if statments)

// 1. var city = "Karachi"
// if (city = "Karachi") {
// console.log("The City OF Lights")
// Correct the above statement:
// Also try this statement by yourself

// var city = "Karachi"

// if (city = "Karachi") {
//     console.log("The City OF Lights")
// }

// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.

// if (x === y) {
//     var z = prompt("Enter the value of z?");
//   }
  

// 3. Code an if statement that tests if ZipCode is "10010" so, Alert
// that "Karachi". if not then alert ("Please write correct city")


// var zipcode = prompt("10010")

// if (zipcode === "10010")
// {
//     alert("karachi")
// }
// else
// {
//     alert("please write correct city")
// }


// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;

// var x = 1;

// if (x === 1) { 
//   x = 2; 
// }
// alert(x)


// Chapter 11 (Comparison

//     Operators)


// 1. Code the first line of an if statement that tests whether one
// variable is unequal to another. (Use !)

// if (variable1 !== variable2) {
   
//   }

//   2. Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.
  

// 3. Code an if statement. Test whether a variable is unequal to a
// particular number. If so, assign a number to that variable.

// if (variable1 >= variable2) {
//   }

  
//   let x = 3; 

// if (x !== 5) { 
//   x = 7; 
// }

// 4. Code an if statement that tests whether a number is unequal to
// a different number. If the condition is true (it will be), display a
// congratulations alert.


// var number1 = 10; 
// var number2 = 5;  

// if (number1 !== number2) { 
//   alert("Congratulations!");
// }

// 5. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.
// If the condition is true (it will be), display an alert that says "No
// match"

// var firstvar =  prompt("Enter first name")

// if (firstvar !== "jhon" ){
//     alert("No match")
// }
