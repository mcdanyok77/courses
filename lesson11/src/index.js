

let str = "hello, world!";
console.log(str.length);

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString(str));

function containsSubstring(str, substring) {
  return str.includes(substring);
}

console.log(containsSubstring(str, "world"));
console.log(containsSubstring(str, "hi"));

let arr = ["string", 52];

console.log(arr.length);

arr.unshift(true, null);
arr.push({key: "value"}, [1, 2, 3]);

console.log(arr.length);

arr.splice(2, 2);

console.log(arr);

function reverseArray(arr) {
    return arr.slice().reverse();
}

console.log(reverseArray(arr));
