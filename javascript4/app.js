// var arr = [ "Nokia " , "Sumsang" , "Apple" , "Readmi " , "Techno"];
 
// document.write("<select>" + "<option>"+ arr[0]+
// "</option>" +  "<option>"+ arr[1]+ "</option>" + 
// + "<option>"+ arr[2]+ "</option>" + "<option>"+ arr[3]+"</option>" + "<option>"+ arr[4]+"</option>" + "</select>");


// var userInput = prompt("Enter the Value")

// var arr = ["faraz" , "hamza" , "abc" ,true , 100]

// document.write(arr[0]);

// var arr1 = new Array ("faraz","hamza","abc",100,true);

// console.log(arr1[2]);

// var userInput = prompt("Enter value to add the last of array");
// var userInput1 = prompt("Enter value to add the last of array");
// var userInput2 = prompt("Enter value to add the last of array");
// var userInput3 = prompt("Enter value to add the last of array");
// var userInput4 = prompt("Enter value to add the last of array");

// animals.push(userInput,userInput1,userInput2,userInput3,userInput4);


// console.log(animals)

// var animals = ["dog","cheetah","monkey","donkey","elephant"];

// console.log("Original array",animals)

// var addingvalue = +prompt("Enter the adding value");
// var endingvalue = +prompt("enter the delete value");
// var addingelement = prompt("Enter Element");
// var addingelement1 = prompt("enter Element");
// var addingelement2 = prompt("enter Element");

// animals.splice(
//     addingvalue,
//     endingvalue,
//     addingelement,
//     addingelement1,
//     addingelement2
//     );

// animals.slice(addingvalue,endingvalue,addingelement,addingelement1,addingelement2);

// animals.slice("Copy",animals.slice(addingvalue,endingvalue,addingelement,addingelement1,addingelement2));


// for (var i = 0;  i<=10;  i+2){
//     console.log(i)
// }

// var userInput = +prompt("Enter the table value");


// var tableValue = +prompt("Enter the table value");

// for(i = 1; i<=tableValue; i++){
//     document.write(userInput + "x" + i+ "=" + userInput *i + "<br>");
// }



// var fruits = [ "banana"  , "apple" , "grapes" , "strawberry" , "lemon"]

// for(i=0; i<fruits.length; i++) {
//     console.log("Elements" + fruits[i] + "at " + " " +i);
// }


// 10. Write a program to print multiples of 5 ranging 1 to 
// 100



// ARRAYS AND LOOP

// 3. Write a program to print numeric counting from 1 to 10.

// for (var i = 1;  i<=10;  i++){
//     console.log(i)
// }


// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.


// var userInput = +prompt("Enter the table value");


// var tableValue = +prompt("Enter the table length");

// for(i = 1; i<=tableValue; i++){
//     document.write(userInput + "x" + i+ "=" + userInput *i + "<br>");
// }


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


// var fruits = [ "banana"  , "apple" , "grapes" , "strawberry" , "lemon"]

// for(i=0; i<fruits.length; i++) {
//     console.log("Elements" + " " +"at"  +" " + "index" + " "+  +i  + " " + "is" +" " + fruits[i] );
// }

// 6. Generate the following series in your browser. See
// example output.


// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// for(i=1; i<=15; i++ ){

//     console.log([i]);
// }

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// for( var i=10; i>=1; i++ ){

//     console.log([i])
// }


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20


// for (var i = 0;  i<=10;  i+2){
//     console.log(i)
// }

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19


// for ( i = 1; i <= 19; i += 2) {
//     console.log(i);
//   }
  
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// for ( i = 1; i <= 10; i++) {
//     var result = i * 2;
//     console.log(result + "k");
//   }
  

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.


// // Define the array
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt the user for input
// var userInput = prompt("Welcome to Disco Bakery. What do you want order sir/ma'am :");

// // Flag to track if the item is found
// var isFound = false;

// // Iterate through the array to check if the item exists
// for ( i = 0; i < A.length; i++) {
//   if (userInput === A[i]) {
//     isFound = true;
//     break; // Exit the loop if the item is found
//   }
// }

// // Display the result based on the flag
// if (isFound) {
//   alert(`Yes, "${userInput}" available at index` + " " +i + " " + "our in bakery" );
// } else {
//   alert(`No, "${userInput}" We are Sorry pastry is not available in our bakery.`);
// }



// var A = [24, 53, 78, 91, 12];

// // Initialize a variable to store the maximum value
// max = A[0]; // Assume the first element is the maximum

// // Iterate through the array to find the maximum value
// for (let i = 1; i < A.length; i++) {
//   if (A[i] > max) {
//     max = A[i]; // Update max if a larger value is found
//   }
// }

// // Display the maximum value
// console.log(`The largest number in the array is: ${max}`);



// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]


// var A = [24, 53, 78, 91, 12];

// // Initialize a variable to store the maximum value
// min = A[0]; // Assume the first element is the maximum

// // Iterate through the array to find the maximum value
// for (let i = 1; i < A.length; i++) {
//   if (A[i] < min) {
//     min = A[i]; // Update max if a larger value is found
//   }
// }

// // Display the maximum value
// console.log(`The Smallest number in the array is: ${min}`);