var curry = require('./curry');

function calculate (num1) {

  return function(operator) {

    return function (num2) {

      if(operator === '+' || operator === 'add') {
        return num1 + num2;
      }
      else if(operator === '-' || operator === 'subtract') {
        return num1 - num2;
      }
      else if(operator === '*' || operator === 'multiply') {
        return num1 * num2;
      }
      else if(operator === '/' || operator === 'divide') {
        return num1 / num2;
      }
      else if(operator === '%' || operator === 'modulo') {
        return num1 % num2;
      }
      else if(operator === '^' || operator === 'power of') {
        return Math.pow(num1, num2);
      }

    };

  };

}

function random (start) {
  return {
    to : function(end) {
      return Math.floor(Math.random() * (end - start)) + start;
    },
    toInclude: function(end) {
      return Math.floor(Math.random() * (end - start + 1)) + start;
    }
  };
}

function concat(str1){
  return function(str2) {
    return str1 + str2;
  };
}

var prependGreeting = function(name){
  return concat('Hello ')(name);
};

function add (num1, num2, num3) {

return num1 + num2 + num3;
}

var add4and5 = curry(add, 4,5);

function calculator(operator){
  if(operator === '+' || operator === 'add') {
    return function(op1, op2) {
      return calculate(op1)(operator)(op2);
    };
  }
  if(operator === '-' || operator === 'subtract') {
    return function(op1, op2) {
      return calculate(op2)(operator)(op1);
    };
  }
  if(operator === '*' || operator === 'multiply') {
    return function(op1, op2) {
      return calculate(op2)(operator)(op1);
    };
  }
  if(operator === '/' || operator === 'divide') {
    return function(op1, op2) {
      return calculate(op2)(operator)(op1);
    };
  }
  if(operator === '%' || operator === 'modulo') {
    return function(op1, op2) {
      return calculate(op2)(operator)(op1);
    };
  }
  if(operator === '^' || operator === 'power of') {
    return function(op1, op2) {
      return calculate(op2)(operator)(op1);
    };
  }
}
var add5 = function(num) {
  return calculator('+')(5, num);
};
var sub5 = function(num) {
  return calculator('-')(5, num);
};
var multiply5 = function(num) {
  return calculator('*')(5, num);
};
var divide5 = function(num) {
  return calculator('/')(5, num);
};
var mod5 = function(num) {
  return calculator('%')(5, num);
};
var pow3 = function(num) {
  return calculator('^')(3, num);
};

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};