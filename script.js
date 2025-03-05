const year = 2000;

function isLeapYear(num) {
  return num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0) ? `${num} is a leap year.` : `${num} is not a leap year.` 
}

const result = isLeapYear(year);
console.log(result);