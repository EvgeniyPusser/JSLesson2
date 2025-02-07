
function sumOfDigits(str) {
  
  let sum = 0;
  let num = Math.trunc(Math.abs(+str)); 
  console.log(num);

   if (isNaN(num) || num === " ") {
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



console.log(sumOfDigits("-90.898"))
displayAnanas();
