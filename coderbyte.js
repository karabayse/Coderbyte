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
  var strSplit = sen.split(' ');
  console.log(strSplit);

  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	     longestWord = strSplit[i].length;
     }
  }
  console.log(longestWord);
}

LongestWord("Longest is the longest word in this string");
