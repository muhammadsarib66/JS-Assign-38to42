
//    Chapter 38 - 42      //


//Assignment #01: Write a custom function power ( a, b ), to calculate the value of a raised to b.
let power;
let powerFunction = function (a, b) {
  power = a ** b;
  console.log(`Value of ${a} raised to ${b} is: ${power} `);
};
powerFunction(4, 4);

//Assignment #02: Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

let year = 2025;
let isLeapYear;
function daysInGivenmonth(year) {
  // isLeapYear = new Date(year, 1, 29).getDate() === 29; // retruns days in given month
  if (new Date(year, 1, 29).getDate() === 29) {
    isLeapYear = true;
  }
  return isLeapYear;
}
if (daysInGivenmonth(year)) {
  console.log(`${year}: leap Year`);
} else {
  console.log(`${year}: Is Not leap Year`);
}

/*
Assignment #03: If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c)   where, S = ( a + b + c ) / 2
 */

let findAreaOfTriangle = function (a, b, c) {
  let s = find_S(a, b, c);
  let area = s * (s - a) * (s - b) * (s - c);
  console.log(`Area of triangle is : ${area}`);
};
let find_S = function (a, b, c) {
  return (a + b + c) / 2;
};
findAreaOfTriangle(3, 2, 4);

/*
Assignment #04: Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.
*/

let calculeteAveragePercentage = function (subject_1, subject_2, subject_3) {
  let average = calculateAverage(subject_1, subject_2, subject_3);
  let percantage = calculatePercentage(subject_1, subject_2, subject_3);
  console.log(`
Subject one Mark: ${subject_1}
Subject two Mark: ${subject_2}
Subject third Mark: ${subject_3}
Average is: ${average}
Percentage: ${percantage}%`);
};
let calculateAverage = (a, b, c) => (a + b + c) / 3;
let calculatePercentage = (a, b, c) => ((a + b + c) / 300) * 100;
calculeteAveragePercentage(89, 55, 77);

/*
Assignment #05: You have learned the function indexOf. Code your own custom function that will perform the same functionality.
You can code for single character as of now
*/
let exampleString = "test";
let indexPosition = -1;
let customIndexOf = function (searchChar, position = 0) {
  for (let index = position; index < exampleString.length; index++) {
    if (searchChar === exampleString[index]) {
      indexPosition = index;
      return indexPosition;
    }
  }
  return indexPosition;
};
let result = customIndexOf("s");
result > 0 ? console.log(`At Index : ${result}`) : console.log(result);

//Assignment #6: Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
let deleteVowels = function (str) {
  let newStr = "";
  if (str.length <= 25) {
    str.toLowerCase();
    for (const iterator of str) {
      !(
        iterator === "a" ||
        iterator === "e" ||
        iterator === "i" ||
        iterator === "o" ||
        iterator === "u"
      )
        ? (newStr += iterator)
        : "";
    }
  }
  console.log(newStr);
};
deleteVowels("test String for function");

/*Assignment #07 :Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.
For example, in the sentence “Pleases read this application and give me gratuityPleases read this application and give me gratuity”
Such occurrences are ea, ea, ui.
*/
let testStr = "Pleases read this application and give me gratuity";
let newStr,
  current,
  next,
  counter = 0;
let findVowelOccurrences = function () {
  testStr = testStr.toLowerCase();
  newStr = testStr.split("");
  for (let index = 0; index < newStr.length; index++) {
    current = newStr[index];
    next = newStr[index + 1];
    if (checkCharactor(current) && checkCharactor(next)) {
      counter++;
    }
  }
  return counter;
};

let checkCharactor = function (char) {
  switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
    default:
      return false;
  }
};

console.log(`Test string: ${testStr}`);
console.log(
  `Occurrences of any two vowels in succession in a line of text: ${findVowelOccurrences()} `
);
/*
Assignment #08: The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this
distance in meters, feet, inches and centimeters.
*/

let kmConverter = function (km) {
  console.log(`
  ${km} km is equal to: ${kmToMeter(km)} meters
  ${km} km is equal to: ${kmToFeet(km)} feets
  ${km} km is equal to: ${kmToInches(km)} inches
  ${km} km is equal to: ${kmToCentimeter(km)} inches`);
};
let kmToMeter = function (km) {
  return typeof km === "number" ? km * 1000 : "";
};
let kmToFeet = function (km) {
  return typeof km === "number" ? km * 3280.8 : "";
};
let kmToInches = function (km) {
  return typeof km === "number" ? km * 39370 : "";
};
let kmToCentimeter = function (km) {
  return typeof km === "number" ? km * 100000 : "";
};
kmConverter(1);

/*
Assignemt #09: Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour
*/

let count = 1,
  employeeWorkingHour,
  overtimePayment;
while (count <= 10) {
  // console.log(count);
  employeeWorkingHour = +prompt(`Enter overtime hour of employee ${count}`) | 0;
  if (employeeWorkingHour > 40) {
    employeeWorkingHour = employeeWorkingHour - 40;
    console.log(
      `over time of Emplopee ${count}: ${employeeWorkingHour} hours, And over time payment of employee ${count}: ${
        employeeWorkingHour * 12
      }`
    );
  } else {
    console.log(
      `You (employee: ${count} , working hour: ${employeeWorkingHour}) have to work for more than 40 hours to get over time pay`
    );
  }
  count++;
}

/*
Assignment #10: A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
*/

let value = 470;
let howManyoneHundred, howManyFitties, howManytenes;
howManyoneHundred = Math.trunc(value / 100);
howManyFitties = Math.trunc((value % 100) / 50);
howManytenes = Math.trunc(((value % 100) % 50) / 10);
console.log("Test Value is :", value);
console.log(
  `You Will have ${howManyoneHundred} hundred Notes ${howManyFitties} Fifty notes ${howManytenes} Ten Notes.`
);
