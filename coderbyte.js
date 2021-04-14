/*
Take the array of strings stored in strArr, which will contain only two strings,
the first parameter being the string N and the second parameter being a string K
of some characters,
and your goal is to determine the smallest substring of N that contains all the
characters in K.

For example: if strArr is ["aaabaaddae", "aed"]
then the smallest substring of N that contains the characters a, e, and d is "dae"
located at the end of the string.
*/
function minWindowSubstring(strArr) {
  // strArr contains 2 strings: N and K
  // K is smaller than N
    const subIncludesAll = (str, str2) => {
      for (let i = 0; i < str.length; i++) {
          if (str2.indexOf(str[i]) !== -1) {
            str2 = str2.replace(str[i], '');
          };
        };
        return (str2.length === 0);
      };
    const minWindow = (str1 = '', str2 = '') => {
      let shortestString = null;
      for (let i = 0; i < str1.length; i++) {
        for (let j = i; j < str1.length; j++) {
          let testString = str1.substr(i, j-i+1);
          if (subIncludesAll(testString, str2)) {
              if (shortestString === null || testString.length < shortestString.length) {
                shortestString = testString;
              }
            }
          }
        }
      return shortestString;
    };
}

minWindowSubstring();


/*
Return the string in reversed order.
If the input string is "Hello World and Coders" then your program should return
the string sredoC dna dlroW olleH.
*/
function FirstReverse(str) {
  return str.split("").reverse().join("");
}

FirstReverse("Reverse this string");


/*
Take the num parameter being passed and return the factorial of it.
For example:
if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.
For the test cases, the range will be between 1 and 18 and the input will always be an integer.
*/
function FirstFactorial(num) {
  if (num < 0)
        return -1;
  else if (num == 0)
      return 1;
  else {
      return (num * FirstFactorial(num - 1));
  }
}

FirstFactorial(5);


/*
Take the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word
from the string with that length.
Ignore punctuation and assume sen will not be empty.
Examples
Input: "fun&!! time"
Output: time
*/
function LongestWord(sen) {
  var arr = sen.split(' ');
  var longest = arr.reduce(function(a, b) {
    return a.length > b.length ? a : b
  }, '');
console.log(longest);
}

LongestWord("Longest is the longest word in this string");


/*
Have the function QuestionsMarks(str) take the str string parameter,
which will contain single digit numbers, letters, and question marks,
and check if there are exactly 3 question marks between every pair of
two numbers that add up to 10.
If so, then your program should return the string true,
otherwise it should return the string false.
If there aren't any two numbers that add up to 10 in the string,
then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5"
then your program should return true because there are exactly 3 question marks
between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
*/
function QuestionsMarks(str) {
  //create a new array containing only the numbers and question marks from str
  var result;
  let clean = str.match(/[0-9?]/g);

  clean = clean.join("");  // convert back to string

  clean = clean.match(/d(\?\?\?)d/gi);  // return arr of pairs that match d???d

  // convert first and last char of every arr string to Number and
  // check if the sum of digits is 10
  // using forEach() run sumcheck() on all strings in the array
  clean.forEach(sumCheck);

  function sumCheck(string){
    if((Number(string.charAt(0)) + Number(string.charAt(string.length - 1)))  == 10){
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

QuestionMarks();


/*
strArr will contain 2 elements:
--The first element will represent a list of comma-separated numbers sorted in
ascending order.
--The second element will represent a second list of comma-separated numbers (also sorted).

Return a comma-separated string containing the numbers that occur in both
elements of strArr in sorted order.

If there is no intersection, return the string false.

Examples
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13

Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
*/
function FindIntersection(strArr) {
  var newStr = strArr[0].concat(",", strArr[1]);
  console.log(newStr); // 1, 3, 4, 7, 13,1, 2, 4, 13, 15

  let nums = parseInt(newStr);
  console.log(nums);

  var arr = newStr.split(',');
  console.log(arr); // ["1", " 3", " 4", " 7", " 13", "1", " 2", " 4", " 13", " 15"]

  var sortArr = arr.sort(); // sort is an array method
  console.log(sortArr);  // ["1, 3, 4, 7, 13,1, 2, 4, 13, 15"]

  let intersection = [];
  for (let i = 0; i <= sortArr.length - 1; i++) {
    if (sortArr[i + 1] == sortArr[i]) {
      intersection.push(sortArr[i]);
    }
  }
  console.log(intersection); // [" 13", " 4", "1"]

  const interNum = intersection.map((i) => Number(i));
  console.log(interNum); // [13, 4, 1]
}

FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]);


/*
The str parameter being passed should return 1 if the brackets are correctly
matched and each one is accounted for.
Otherwise return 0.

For example:
if str is "(hello (world))", then the output should be 1,
but if str is "((hello (world))" the the output should be 0
because the brackets do not correctly match up.
Only "(" and ")" will be used as brackets.
If str contains no brackets, return 1.
*/
function BracketMatcher(str) {
  var arr = str.split(" ");
  console.log(arr);

  for (var i = 0; i < arr.length; i++) {
    // check for ( and )
  }
}

BracketMatcher();
