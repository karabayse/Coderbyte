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
  let bracketArr = [];

  var arr = str.split(" ");
  console.log(arr);

  for (var i = 0; i < arr.length; i++) {
    // check for ( and )
    if ('('.lenth % 2 == 0 && ')'.length % 2 == 0) {
      console.log(1);
    }
  }
}

BracketMatcher("coder)(byte)");
