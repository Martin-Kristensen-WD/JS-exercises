/* 1
Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 6:45:49 PM
*/

/* Solution 1: 1 function  */
function currentDay() {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const date = new Date();

  const day = weekdays[date.getDay()];
  const time = date.toLocaleTimeString();

  return `Today is : ${day} \n Current time is : ${time}`;
}

currentDay();

/* Solution 2: Seperations of conserns */
function getCurrentDay() {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const date = new Date();
  return weekdays[date.getDay()];
}

function getCurrentTime() {
  const date = new Date();
  return date.toLocaleTimeString();
}

function today() {
  const day = getCurrentDay();
  const time = getCurrentTime();
  return `Today is: ${day}\nCurrent time is: ${time}`;
}

today();

/* 2
Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.   */

/* Solution 1: Regular function */
function checkFifty(num1, num2) {
  if (num1 == 50 || num2 == 50 || num1 + num2 == 50) {
    return true;
  } else {
    return `${num1} and ${num2} does not sum up to 50 and neither of the numbers is 50`;
  }
}

checkFifty(25, 25);

/* Solution 2: Using Arrow function & ternary */
/* This is not as readable as solution 1, since it's hard to read what the function returns */
const checkFifty2 = (num1, num2) => (num1 == 50 || num2 == 50 || num1 + num2 == 50 ? true : `${num1} and ${num2} does not sum up to 50 and neither of the numbers is 50`);

checkFifty2(25, 25);

/* 3
Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.
*/

/* Solution 1: Concise, using optional chaining & slice() */
function addPy(str) {
  if (str?.slice(0, 2) == 'Py') {
    return str;
  }
  return `Py${str}`;
}

addPy('thon');

/* Solution 2: Verbose, using explicit check for null/undefined and uses substring() */
function addPy2(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
    return str1;
  }
  return 'Py' + str1;
}

addPy2('thon');
