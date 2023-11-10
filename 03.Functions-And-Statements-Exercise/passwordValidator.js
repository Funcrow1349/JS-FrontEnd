function passwordValidator(password) {
  function checkPassLength(password) {
    return password.length >= 6 && password.length <= 10;
  }

  function checkPassIsAlphaNumeric(password) {
    let regEx = /^[a-zA-Z0-9]+$/gm;
    return regEx.test(password);
  }

  function checkPassHasAtLeastTwoDigits(password) {
    let digits = 0;

    for (let num of password) {
      if (!isNaN(num)) {
        digits += 1;
      }
    }

    return digits >= 2;
  }

  if (!checkPassLength(password)) {
    console.log("Password must be between 6 and 10 characters");
  } 
  if (!checkPassIsAlphaNumeric(password)) {
    console.log("Password must consist only of letters and digits");
  } 
  if (!checkPassHasAtLeastTwoDigits(password)) {
    console.log("Password must have at least 2 digits");
  } 
  if (checkPassHasAtLeastTwoDigits(password) && checkPassIsAlphaNumeric(password) && checkPassLength(password)) {
    console.log("Password is valid");
  } 
  

}

passwordValidator("logIn");
passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
