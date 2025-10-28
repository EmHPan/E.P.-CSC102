  //Test Early, Test Often!!
  
  //Image moving Code
  
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

   //Basics Page Code
 
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


/* ****** Loops ***** 
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
