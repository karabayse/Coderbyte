function LongestWord(sen) {
  var strSplit = sen.split(' ');
  console.log(strSplit); // ["Longest", "is", "the", "longest", "word", "in", "this", "string"]

  var longestWord = '';
  for(var i = 0; i < strSplit.length; i++){
        if (strSplit[i] > longestWord - 1) {
          longestWord = strSplit[i];
        }
     }
     console.log(longestWord);
  }

LongestWord("Longest is the longest word in this string");
