// Challenge
const calculator = {
    add: function(firstNum, secondNum){
        return (firstNum+secondNum);
    },
    subtract: function(firstNum, secondNum){
        return (firstNum-secondNum);
    },
    multiple: function(firstNum, secondNum){
        return (firstNum*secondNum);
    },
    divide: function(firstNum, secondNum){
        return (firstNum*secondNum);
    },
    powerof: function(firstNum, secondNum){
        return (firstNum**secondNum);
    },
}

// test
let result;

result = calculator.add(2,3);
console.log(result);

result = calculator.subtract(2,3);
console.log(result);

result = calculator.multiple(2,3);
console.log(result);

result = calculator.powerof(2,3);
console.log(result);

// interdependent
const plusResult = calculator.add(2,3);
const minusResult = calculator.subtract(plusResult, 10);
const timesResult = calculator.multiple(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.powerof(divideResult, minusResult);

console.log(plusResult, minusResult, timesResult, divideResult, powerResult);

