function playCraps(){
    console.log("playCraps() function was called");
    
    //roll die 1
    let roll1 = rollDice();
    
    //roll die 2
    let roll2 = rollDice();
    
    console.log( "roll1=" + roll1);
    console.log("roll2=" + roll2);
    
    let sum = roll1+roll2;
    
    document.getElementById("divRoll1").textContent = "Roll 1: " + roll1;
    
    document.getElementById("divRoll2").textContent = "Roll 2: " + roll2;
    
    document.getElementById("divSum").textContent = "Sum: " + sum;
    
    let result="";
    
    
    
    
    if(sum == 7 || sum ==11){
        result = "Sorry! You lost! :(";
    }
    
    //modulus - %- do division problem and get remainder as result
    //roll1 % 2 == 0 -this will be true if number is even
    else if (roll1 % 2 == 0 && roll1 == roll2){
        result= "Congrats! You won! :)";
    }
    else{
        result= "You pushed/tied!";
    }
    document.getElementById("divResult").textContent = result;
            }
    
            function rollDice(){
                //Math.random() is built in JS function which generates random number
                let die = Math.random() *6;
    
                return Math.ceil(die);
            }