
function sumOfDigits(str) {
  
  let sum = 0;
  let num = +str; // Convert the string to a number once

   if (isNaN(num) || num == " ") {
  console.log("Not a number");
  return;
}

  if (+(num) < 0) {
    num = -num;
  }
  while (num > 0) {
    let digit = Math.trunc(num % 10); // Extract last digit
    sum += digit;
    num = Math.trunc(num / 10); // Remove the last digit
  }

  return sum;
}


function displayAnanas() {
    console.log(('a' + +("as") + 'as').toLowerCase());
}



console.log(sumOfDigits("989898989"))
displayAnanas();
