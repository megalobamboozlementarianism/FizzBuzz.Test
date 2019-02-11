// make a set of numbers 1 - 100
// if evenly divisible by three, return fizz 
// if evenly divisible by five, return buzz
// if evenly divisible by three and five, return fizzbuzz
// otherwise return the number 

var checkMe = function(){
  return true;
}

var checkNumber = function(num) {
  if(num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
  if(num % 3 === 0){
    return "fizz";
  } 
  if(num % 5 === 0){
    return "buzz";
  } 
  return num;
}

var fizzBuzzFinally = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = checkNumber(arr[i]);    
  }  
  return arr;
}




module.exports = {
  checkMe: checkMe, checkNumber: checkNumber, fizzBuzzFinally: fizzBuzzFinally
}