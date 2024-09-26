// // Q no 1 

// var x = x + 1;

// var exp = x++;

// //Q no 2 

// var x = 100;

// var exp = --100;

// // Qno 3

// var x = 50;
// var y = x++;

// var y = 50

// // Q no 4

// var y = 50;
// var z = --y;

// var z  = 49;

// //Qno  5 

// var num = --num;
// var newNum = --num;

// //Qno  
var originalValue = 50;
var incrementedValue = + 1;

console.log("originalValue " , originalValue);
console.log("incrementedValue" , incrementedValue);


// //Q no 7

var number = 20;

number++;
alert("The new value is:" + number);

// //Chapter 7 (Math Expression III)

// //Qno 1 

//  var calculatedNum = 2 + (2*6) ;

//  var exp = 2 * 6 
//            12

//       2 + 12 
//        14 

//Chapter 8 (Concatenating Text Strings)
//Qno 1

var num = "2" + "2" ;

console.log(num);
//Qno 2 

var message = "Hello," + "Dolly" ;
alert(message);
//Q no 3

alert("33" + 3);

//Q no 4 
alert( "Pakistan" + " " + "Zindabad");

//Q no 5

var result = " write number two hundred " + 200 ;
console.log(result);

     //  Qno 6
     var string1 = "welcome";
     var string2 = "User";

     var message = "welcome" + " " + "user";

     alert(message);



     //Chapter 9 (Prompts)

//Q no 1 

var firstName = prompt("Enter your first name ") ;

console.log(firstName);

//Q no 2 

var country = prompt("Country?", "China") ;

console.log(country);

//Q no 3

var yourName = prompt("Enter your Name");

//Q no 4

var message = prompt("Welcome to learning " , "Javascript");

// Q no 5 

var message = " Enter your Name"
var defaultResponse ="Guest "

var userResponse = prompt("Message" , "defaultResponse");

alert("You entered :" + userResponse);

// Q no 6 

var defaultResponse = " Muhammad Ibrahim";

var userResponse = prompt("Please enter your response:", defaultResponse);

if (userResponse !== null) {
alert("You entered: " + userResponse);
} 
else {
alert("You cancelled the prompt.");
}







