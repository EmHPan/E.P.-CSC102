  //Test Early, Test Often!!
  function validateForm(){
    let fullName = "";

    let firstName = document.getElementById("txtFirstName").value.trim();

    let lastName = document.getElementById("txtLastName").value.trim();

    let zipCode = document.getElementById("txtZipCode").value.trim();

   console.log("fisrtName="+ firstName);
   console.log("lastName="+ lastName);
   console.log("zipCode="+ zipCode);

   let message = "";

   fullName = firstName + " " + lastName;

   console.log("fullName=" + fullName);

   if(fullName.length > 20 || fullName.length == 1){
    message = "Invalid name, please try again.";
    console.log("invalid Name")
   }
   else if(zipCode.length != 5) {
    message = "Invalid ZIP Code, please try again.";
    console.log("invalid ZIP")
   }
   else{
    message = "Welcome, "+ firstName + ". The code phrase is Open Seseme.";
   }

   document.getElementById("divMessage").textContent = message;
}