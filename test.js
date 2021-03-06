function LongestWord(sen) {
  var strSplit = sen.split(' ');
  var longest = strSplit.reduce(
    function (a, b) {
      return a.length > b.length ? a : b;
    });
  console.log(longest);
}

LongestWord("Longest is the longest word in this string");
