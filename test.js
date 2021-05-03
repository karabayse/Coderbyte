/*
Determine if the string parameter is a valid username according to the following
rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true,
otherwise return the string false.
*/
function CodelandUsernameValidation(str) {
  if
  (str.length >= 4 && str.length <= 25
  && str.length === 1 && str.match(/[a-z]/i)
  && var letterNumber = /^[0-9a-zA-Z]+$/;
  str.value.match(/^[0-9a-zA-Z]+$/) // _
  && str.slice(-1) != str.endsWith("_")) {
    console.log(true);
  }
}

CodelandUsernameValidation("aa_");
