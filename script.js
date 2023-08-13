/*
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  let newArr = arr.map(Boolean);  // converting each value to a Boolean
  let array = [];  // creating a new empty array
  for (let i = 0; i < arr.length; i++) {
    if (newArr[i] === true) {  // if value is true
      array.push(arr[i])  // push true value to array
    }
  }
  return array;
}

console.log(bouncer([7, "ate", "", false, 9]));
