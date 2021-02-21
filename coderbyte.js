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
