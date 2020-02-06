
function validateForm() {
  var x = document.forms["myForm"]["firstname"].value;
  if (x == "") {
    alert("Please provide your firstname");
    return false;
  }
   var x = document.forms["myForm"]["lastname"].value;
  if (x == "") {
    alert("Please provide your lastname");
    return false;
  }
   var x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Please provide your email");
    return false;
  }
   var x = document.forms["myForm"]["password"].value;
  if (x == "") {
    alert("Please enter your password");
    return false;
  }
   var x = document.forms["myForm"]["confirmpassword"].value;
  if (x == "") {
    alert("Please confirm your password");
    return false;
  }
}
function validateForm(){
    x=document.myForm
    input=x.password.value
    if (input.length<8){
        alert("Password cannot be less than 8 characters!")
        return false
    }
   if (input.length>16){
        alert("Password cannot be more than 16 characters!")
        return false
    }
}
function validateForm(){
    x=document.myForm
    input=x.confirmpassword.value
    if (input.length<8){
        alert("Confirm password field cannot be less than 8 characters!")
        return false
    }
   if (input.length>16){
        alert("Comfirm password field cannot be more than 16 characters!")
        return false
    }
}
function validateForm(){
	password = myForm.password.value
  , confirmpassword = myForm.confirmpassword.value;

  if(password != confirmpassword){
  	alert("Passwords don't match")
  	return false
  }
}