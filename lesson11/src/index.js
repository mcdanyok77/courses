const str = 'hello, world!'
console.log(str.length)

function reverseString(str1) {
  return str1.split('').reverse().join('')
}

console.log(reverseString(str))

function containsSubstring(str1, substring) {
  return str1.includes(substring)
}

console.log(containsSubstring(str, 'world'))
console.log(containsSubstring(str, 'hi'))

const arr = ['string', 52]

console.log(arr.length)

arr.unshift(true, null)
arr.push({ key: 'value' }, [1, 2, 3])

console.log(arr.length)

arr.splice(2, 2)

console.log(arr)

function reverseArray(arr1) {
  return arr1.slice().reverse()
}

console.log(reverseArray(arr))
