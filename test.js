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
  var newArr = strArr[0].concat(strArr[1]);
  console.log(newArr);
}

FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]);
