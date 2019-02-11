const mocha = require ("mocha");
const chai = require ("chai");
const fizzBuzz = require ("./fizz-buzz");

const expect = chai.expect;

//test block

it("should work", function(){
  expect(fizzBuzz.checkMe()).to.eql(true);
})

describe ("changeNumberFunction", function() {
  it("should return a number by default", function(){
    expect(fizzBuzz.checkNumber(2)).to.be.a("number");   
  })

  it("should return fizz if divisble by 3", function(){
    expect(fizzBuzz.checkNumber(3)).to.eql("fizz");   
  })
  it("should return buzz if divisble by 5", function(){
    expect(fizzBuzz.checkNumber(5)).to.eql("buzz");   
  })
  it("should return FizzBuzz if divisble by 3 and 5", function(){
    expect(fizzBuzz.checkNumber(15)).to.eql("FizzBuzz");   
  })
})

describe ("fizzBuzzFinallyFunction", function() {
  let arr = [];
  let testArr = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, "fizz", 13, 14, "FizzBuzz"];
  for(let i = 1; i <= 15; i++){
    arr.push(i);
  }

  it("should return a number by default", function(){
    expect(fizzBuzz.fizzBuzzFinally(arr)).to.eql(testArr);   
  })
})



