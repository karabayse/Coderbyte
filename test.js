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
