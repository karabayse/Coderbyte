function LongestWord(sen) {
  var strSplit = sen.split(' ');
  var longest = strSplit.reduce(
    function (a, b) {
      console.log(a.length > b.length ? a : b);
    }
  );
}

LongestWord("Longest is the longest word in this string");
