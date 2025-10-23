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