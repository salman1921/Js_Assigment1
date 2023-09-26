// var userInput = prompt("Enter where do you live ");


// var firstChar = userInput.slice(0,1).toUpperCase();

// var remainChar = userInput.slice(1).toLowerCase();

// var completeword = firstChar + remainChar;

// console.log(completeword)
// console.log(userInput);

// var cityarr = [ "karachi" , "islamabad" , "queeta ", "lahore "]

// for (i= 0 ; i<cityarr.length;i++){

//     if(completeword === cityarr[i])
//     {
//         console.log("match")
//     }
// }


// var str ="Muhammad Faraz"

// console.log(str[0]);

// var text = prompt("Enter some text")

// for(var i = 0; i< text.length; i++){
//     if(text.slice(i,i+2) === "  "){
//         alert("Double space required")
//     }
// }


// The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." So let's search the following sentence for the banned characters
// and replace them with the phrase that the New Yorker prefers.


// var str = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should the Second World War"

// for(var i = 0; i < str.length; i++)
// {
//     if(str.slice(i,i+12 ) === "World War II" , str.slice(i,i+16) === "Second World War")
//     {
//         str = str.slice(0,i) + "Second World War" + str.slice(i + 12)  ;
//         str = str.slice(0,i) + str.slice(i+16) + "salman" 
//     }
    
// }

// console.log(str.replace(/New Yorker/g,"US")); all replace word for same word this is good command

// var indexnumber = str.indexOf("New Yorker");

// var firsttext = str.slice(0 ,indexnumber);
// var replaceword = "US"
// var remaintext = str.slice(indexnumber + 10);

//  console.log(firsttext + replaceword +remaintext )


// console.log(indexnumber);



// var num = 2.3

// console.log (Math.round(num));

// console.log (Math.ceil(num));

// console.log (Math.floor(num));


// var firstnum = Number(prompt("Enter the number"))

// var Secondnum = Number(prompt("Enter the number"))


// var add = firstnum + Secondnum ;
// console.log(add.toFixed(2));
// console.log( typeof add.toString(2));


// var randomNumbers = Math.random() *12;

// console.log(randomNumbers.toFixed(2));


// Chapter 21 (Changing Case)


// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;


// var allLower = userInput.toLowerCase();

// 2. Convert the string represented by x to lower-case and assign
// the result to the same variable.



// var x = "YourStringHere"; 
// x = x.toLowerCase();


// 3. Convert the string represented by y to upper-case and assign
// the result to the same variable.


// var y = "YourStringHere"; 
// x = x.toUpperCase();





// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.

// var originalString = "YourStringHere"; 
// var lowerCaseString = originalString.toLowerCase();

// console.log(lowerCaseString); 


// 5. Convert the string represented by an array element to lowercase and assign it to a variable that hasn't been declared
// beforehand.


// var originalString = ["YourStringHere"]; 
// var lowerCaseString = originalString[0].toLowerCase();

// console.log(lowerCaseString); 




// 6. Display in an alert the upper-case version of the string
// represented by a variable.


// var userInput = prompt("Enter where do you live ");


// var firstChar = userInput.toUpperCase();

// alert(firstChar);



// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation
// is the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.


// var cityName = "kaRacHi";

// var cityName = prompt("Enter where do you live ");


// var firstChar = cityName.slice(0,1).toUpperCase();

// var remainChar = cityName.slice(1).toLowerCase();

// var completeword = firstChar + remainChar;

// console.log(completeword);


// Chapter 22 - 25 (Strings)

// 1. "captain" has been assigned to variable “sameWords”. You
// want to slice "ap"


// var sameWords = "captain"

// console.log(sameWords.replace("captain","ap"));


// 2. The number of characters in the string will be assigned to the
// variable.


// var sameWords = "Salman";
// var numberOfCharacters = sameWords.length;

// console.log(numberOfCharacters);


// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it
// to the variable seg, which hasn't been declared beforehand.


// var animal = "elephant";
// console.log(animal);

// var seg = animal.slice(2,6);

// console.log(seg);


// 4. Find the number of characters in the string represented by a 
// variable and assign the number to a second variable.

// var inputString = "Salman Yousuf";

// var charCount = inputString.length;

// var secondVariable = charCount;

// console.log("Number of characters in the string:", charCount);
// console.log("The number assigned to the second variable:", secondVariable);


// 5. In a first statement measure how many characters there are in 
// a string represented by a variable. In a second statement slice 
// all but the first character and last 3 characters of the string and 
// assign it to a second variable that hasn't been declared 
// beforehand.


// var inputString = "Shahid Afridi";

// var charCount = inputString.length;

// var sliceStatement = inputString.slice(0,1) + inputString.slice(-3)


// console.log(sliceStatement);



// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?

// var text = "To be or not to be.";

// var indx = text.indexOf("be");

// console.log(indx);


// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?

// var text = "To be or not to be.";

// var indx = text.lastIndexOf("be");

// console.log(indx);

// 8. Find the index of the first character of the last instance of "go" 
// in the string represented by the variable text and assign the 
// number to the variable indx, which hasn't been declared 
// beforehand.


// var text1 = "i am go"

// var indxtext = text1.lastIndexOf("go");


// console.log(indxtext);

// 9. Code the first line of an if statement that tests whether a
// segment with an index represented by indexNum exists in a 
// string.

// var yourStringVariable = ""
// var indexNum = ""
// if (typeof yourStringVariable.charAt(indexNum) !== "undefined") {

//   console.log ( typeof yourStringVariable)
// } else {
//     console.log(typeof indexNum);
// }

// 10. In this string "abcde", what character is at index 2? (Use 
//     charAt)

// var myString = "abcde";

// var charIndex = myString.charAt(2);

// console.log("Character at index 2:", charIndex); 


// 11. Find the 10th character in the string represented by text 
// and assign it to the variable cha, which hasn't been declared 
// beforehand


// var mystring = "Salman Yousuf "

// var charIndex = mystring.charAt(10);

// console.log("Character at index 10:", charIndex); 

// 12. Find the last character in the string represented by str and 
// assign it to x, which hasn't been declared beforehand.


// var str = "Dubai"

// var x = str.charAt(str.length -1)

// console.log(x);





// 13. Find the the 5th character in a string represented by input 
// and assign it to cha, which hasn't been declared beforehand.


// var input = "Ahsan"

// var cha = input.charAt(input.length -1)

// console.log(cha);


// 16. In a string represented by str replace the first instance of 
// "1" with "one" and assign the revised string to newStr, which 
// hasn't been declared beforehand.

// var str = "This is 1 example, 1 and only 1.";
// var newStr = str.replace("1", "one");

// console.log(newStr);




// 17. If you want all instances replaced, enter 3 characters that 
// need to appear in this statement.
// var y = x.replace("a", "z");

// var x = "you are overconsious"

// var y = x.replace(/o/g, "z");

// console.log(y);


// Chapter 26 (Rounding Numbers)



// 1. Form a statement that rounds a number to the nearest integer.


// var num = 2.3

// console.log ( "Rounded Number"+ " " + Math.round(num));




// 2. Round up a number represented by origNum and assign it to 
// roundNum, which hasn't been declared beforehand.

// var origNum = 6.2

// var roundNum = Math.ceil(origNum);

// console.log("Rounded up Number" + " " + roundNum);

// 3. Round down a number represented by origNum and assign it to 
// roundNum, which hasn't been declared beforehand.

// var origNum = 6.9

// var roundNum = Math.floor(origNum);

// console.log("Rounded down Number" + " " + roundNum);



// 4. Round a number represented by a variable and assign the 
// result to a second variable that hasn't been declared 
// beforehand.

// var originalNumber = 7.6; 

// var roundedNumber = Math.round(originalNumber);

// console.log("Rounded number:", roundedNumber);



// 5. Round .5 to 0 and assign it to a variable that hasn't been 
// declared beforehand.




// var orignum = 0.5

// var rounnum = Math.round(orignum);

// console.log("Rounded Number" + " " +rounnum);



// Chapter 27 (Random Numbers)

// 1. Convert a random number generated by JavaScript to a number 
// in the range 1 to 50


// var randomNumbers = Math.random() *50;

// console.log(randomNumbers);


// 2. Generate a random number and assign it to a variable that 
// hasn't been declared beforehand.

// var generaterondom = Math.random();

// console.log(generaterondom);

// 3. You have to create a dice in JavaScript with the use of pseudo-random number


// 4. You have to create a toss (head/tail) in JavaScript with the use 
// of pseudo-random number.




// function tossCoin() {

//     var randomNumber = Math.floor(Math.random() * 2);

//   if (randomNumber === 0) {
//     return "Heads";
//   } else {
//     return "Tails";
//   }
// }

// var result = tossCoin();
// console.log("Coin toss result:", result);

// Chapter 28, 29 (Converting Strings)


// 1. How do you convert a string to an integer in JavaScript?

//  var str = "42"; 

// var integer = +prompt(str,10); 

// console.log(integer); 


// function stringToInteger(str) {

//   var integer = prompt(str, 10);
  
//   return integer;
// }

// var str = "123";
// var result = stringToInteger(str);

// console.log(result); 


// Chapter 30 (Controlling the length of  decimals)
    

// 1. Code a statement that rounds a number represented by num to 
// 4 places, converts it to a string, and assigns it to newNum, which 
// hasn't been declared beforehand.

//  var integerString = "24.34444482727"
// var num = Number(integerString);

// integerString = num.toFixed(4);

// console.log(integerString);


// 2. In a single statement round a number represented by a variable 
// to 2 places, convert it to a string, convert it back to a number, 
// and assign it to the same variable.

// var number = 3.14159265; 
// number = Number(number.toFixed(2));

// console.log(number);


// 3. Code the first line of an if statement that tests whether the 
// number represented by num, rounded to 2 digits and converted 
// to a string, has more than 4 characters in it


// var num = 2222;
// var num = +prompt("Enter a number ");


// if (num.toFixed(2).toString().length > 4)
//  {
//  }
// else {
        
// }

 

console.log(num)  ;
