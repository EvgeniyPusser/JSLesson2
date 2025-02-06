
function sumOfDigits(str) {
  
  let sum = 0;
  let num = +str; // Convert the string to a number once

   if (isNaN(num) || num === " ") {
  console.log("Not a number");
  return;
}


  while (num > 0) {
    let digit = Math.trunc(num % 10); // Extract last digit
    sum += digit;
    num = Math.trunc(num / 10); // Remove the last digit
  }

  return sum;
}


function displayAnanas() {
    console.log(('a' + (0/0) + 'as').toLowerCase());
}



console.log(sumOfDigits("8999890.99"))
displayAnanas();
