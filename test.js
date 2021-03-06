function LongestWord(sen) {
  var arr = sen.split(' ');
  var longest = arr.reduce(function(a, b) {
    return a.length > b.length ? a : b
  }, '');
console.log(longest);
}

LongestWord("Longest is the longest word in this string");
