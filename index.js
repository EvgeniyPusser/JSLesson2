
function sumOfDigits(str) {
  
  let sum = 0;
  let num = Math.trunc(Math.abs(+str)); 
  

   if (isNaN(num)) {
  return NaN;
}

 
  while (num > 0) {
    let digit = num % 10; 
    sum += digit;
    num = Math.trunc(num / 10); 
  }

  return sum;
}


function displayAnanas() {
    console.log(('a' + +("as") + 'as').toLowerCase());
}



console.log(`Some of digits, when the input is blank: ${sumOfDigits(" ")}`)
console.log(`Some of digits, when the input is negative: ${sumOfDigits("-787878")}`)
console.log(`Some of digits, when the input is not the integer: ${sumOfDigits("897.7878")}`)
console.log(`Some of digits, when the input is empty: ${sumOfDigits("")}`)

displayAnanas();
