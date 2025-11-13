  //Test Early, Test Often!!
  
  //Image moving Code ///
  
  //Keep track of current interval so we can stop it

   let intervalID = 0;

   //start image moving
   function startMove(){
//shortcut to image in HTML
let image = document.getElementById("memeImage")

//store intervalID
intervalID = setInterval(function(){
//code that runs
let xCord = getRandNum();
let yCord = getRandNum();

//change x cord
image.style.left = xCord + "px";
//change y cord
image.style.top = yCord + "px";

}, 1000); //runs every second

//swap which button is enabled
document.getElementById("btnStart").disabled=true;

document.getElementById("btnStop").disabled=false;
   }

   //stop moving image
   function stopMove(){
    //call clear interval
clearInterval(intervalID);

//trade enabled button
document.getElementById("btnStart").disabled=false;

document.getElementById("btnStop").disabled=true;
   }

   //function to make random numbers
   function getRandNum(){
        //get random number between 0 and 799
        return Math.floor(Math.random() * 800);
   }

   //Basics Page Code /////
 
   //simgle line comment ctrl ?
/* Multi-line Comment*/
 
// Variables //

//camelCase
var firstName = "Emmalin";

//snake_case
let first_name = "Emmalin";

let age = 25;  //int

let pi = 3.14;  //float

let validInput = false;  //boolean

let lastName = "";

//valid way to set up varible in JavaScript
middleName = "Hope";

/* ***** if/else - decision logic ***** */

//if true, code in {} will run
// == is equality/ are values on both sides same
// = is assignment - value on left side of = will become value on right
// === is value and data type the same?, not very good in JavaScript
if (age == 5){
    console.log("age is 25")
}
else if(age == 18){
    console.log("age is 18 - you are an adult")
}
else if(age == 25){
    console.log("age is 25 - car renting is now cheaper")
}
//catch-all
else{
console.log("age is not 5")
}
 //Functions//
function addNumbers(num1, num2){
    return num1 + num2;
}


/* ****** Loops ***** /
Let us run chunks of code over again
good for data and displaying info

for loop - runs set # of times --> data, usually for arrays
while loop - runs undetermined # of times - variable # of times
*/

//for loop
//section 1: counter variable, i is most commonly used as variable name
//section 2: condition needed for loop to keep running
//section 3: what changes each time (counter variable value change)
// ++ adds 1 each time
for(let i = 0; i < 5; i++){
    //code to run each time
    console.log("i = " + i);
}

/* while loop
unclear how many time loop will run
good for user input
***can run 0 times***
can run # of times
generally run different # of times each iteration
can run infinite # of times (BAD, crashes program)

think about exit plan FIRST!!
*/

// set varible that we want while loop to test
let exit = "no";
//test for condition, once no longer true, stop running loop
while(exit != "yes"){
console.log("Test my loop");

//change condition testing
exit = "yes"; //runs once
}

/* Do while loop
will run at least once
checks condition to run after it has run
*/
do{
    // do something here
    console.log("Do While Loop");
}while(exit != "yes"); //ALWAYS place ; here, JS needs it

//Palindrome ////////

   //function to test for Palindrome
   function testPalin(){
    //get input value
    //remove spaces at beginning and end of string
    let userInput = document.getElementById("txtInput").value.trim();

    //works
   // console.log("userInput = " + userInput);

    //move into if/else
    isPalindrome(userInput);

    //statement implies == true, could write out if want to
    //isPalindrome(userInput) == true
    if(isPalindrome(userInput)){
        document.getElementById("divResult").textContent = "Yes, " + userInput + " is a palindrome!"
    }

    else{
        document.getElementById("divResult").textContent = "No, " + userInput + " is not a palindrome."
    }
}


//function to test if word is palindrome
function isPalindrome(stringToTest){
// remove spaces inside submitted word(s)
//   /\s means space
//   /g means global
let cleanWord = stringToTest.replace(/\s/g, "");

cleanWord = cleanWord.toLowerCase();

//works
//console.log("cleanWord = " + cleanWord);

//convert cleaned to array
let arrClean = cleanWord.split("");


//reverse array contents
arrClean = arrClean.reverse();

//turn array back to string
let reverseWord = arrClean.join("");

//works
//console.log("reverseWord = " + reverseWord);


//compare to see if Palindrome
return cleanWord == reverseWord;
}


//Class notes //////

//not OOP, 
// Java, C#, C++ are OOP
//JS now kind of supports classes
//capitalize 1st letter of class name
//PascalCase -- each 1st letter is capitalized

class Student{
    //constructor is like function that is called when obj created - quickly create obj
    constructor(name, major, gpa, startYear, gradYear, email, birthDate){
        //this.name is class field
        // name is value passed in when constructor is clased to create obj
        this.name = name;
        this.major = major;
        this.gpa = gpa;
        this.startYear = startYear;
        this.gradYear = gradYear;
        this.email = email;
        this.birthDate = birthDate;   
    }
//Methods
    AttendClass(){
        return "Class attended";
    }

    //other methods are going to have similar design
}

//student1 is object
let student1 = new Student("Bob Smith", "ACS", 4.0, 2025, 2028, "bob@bob.com", "12/12/12");

