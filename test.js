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
  var newArr = [];

  var newStr = strArr[0].concat(",", " ", strArr[1]);

  newArr.push(newStr);
  console.log(newArr);

  var sortArr = newArr.prototype.sort();
  console.log(sortArr);

  let intersection = [];
  for (let i = 0; i < sortArr.length - 1; i++) {
    if (sortArr[i + 1] == sortArr[i]) {
      intersection.push(sortArr[i]);
    }
  }
  console.log(intersection);
}

FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]);
