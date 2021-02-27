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
