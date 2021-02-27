alert("HereIsMyPasswordGeneratorProject")
var generateBtn = document.querySelector('#generate')
function writePassword() {
  generatePassword()
}generateBtn.addEventListener("click", () => {
  var userInput = prompt("Type a number between 8 - 128");
  console.log(userInput)
  if( 8 > userInput || 128 < userInput ) {
    alert("the range you selected is not valid") 
  }else if (isNaN(userInput) ) {
     alert("please select a different number") 
  }
   else {
      var newPassword = '';
      var emptyString = ''; 
      var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeric = '1234567890';
    const special = '/!@#$%^&*()';
    const lower = confirm("Do you want a Lowercase Character in your Password?")
    const upper = confirm("Do you want a Uppercase Character in your Password?")
    const numerics = confirm("Do you want any numeric Characters in your Password?")
    const speci = confirm('Do you want any special Characters in your Password?')
    if(lower + upper + numerics + speci === 0 )
    return
    if(lower) {
      emptyString += lowercase 
      newPassword +=lowercase[0] 
    }
    if(upper) {
      emptyString += uppercase
      newPassword +=uppercase[0]       
    }
    if(numerics) {
      emptyString += numerics
      newPassword +=numerics[0] 
    }
    if(speci) {
      emptyString += special
      newPassword +=special[0] 
    }
    for ( var i = 0; i < userInput; i++ ) {
      var randomNum = Math.floor(Math.random() * emptyString.length);  
      newPassword +=emptyString[randomNum];
      newPassword +=lowercase[0];
      newPassword +=uppercase[0];
      newPassword +=numerics[0];
      newPassword +=special[0];
}
    var showPassword = document.querySelector("#password");
    showPassword.value = newPassword; 
    newPassword +=emptyString[randomNum];
      newPassword +=lowercase[0];
      newPassword +=uppercase[0];
      newPassword +=numerics[0];
      newPassword +=special[0];
}
});
// var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
