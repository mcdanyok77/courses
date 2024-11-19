// task 1
const nestedArray = [[1, 2], [3, [4, 5]], 6]
function flattenArray(array) {
  return array.flat(Infinity)
}
console.log(flattenArray(nestedArray))

// task 2
const products = [
  { id: 1, name: 'Телефон', inStock: true },
  { id: 2, name: 'Ноутбук', inStock: false },
  { id: 3, name: 'Часы', inStock: false }
]
function isAnyProductInStock() {
  return products.some((product) => product.inStock)
}
console.log(isAnyProductInStock(products))

// task 3
const transactions = [
  { id: 1, type: 'income', amount: 500 },
  { id: 2, type: 'expense', amount: 100 },
  { id: 3, type: 'income', amount: 200 },
  { id: 4, type: 'expense', amount: 50 }
]
function getTotalBalance() {
  return transactions.reduce((balance, transaction) => (
    transaction.type === 'income'
      ? balance + transaction.amount
      : balance - transaction.amount
  ), 0)
}
console.log(getTotalBalance(transactions))

// task 4
const user = {
  name: 'John',
  email: 'john@example.com',
  age: 25
}
function getObjectKeys(object) {
  return Object.keys(object)
}
function getObjectValues(object) {
  return Object.values(object)
}
console.log(getObjectKeys(user))
console.log(getObjectValues(user))

// task 5
const cart = {
  apple: 2,
  banana: 3,
  orange: 1
}
function printReceipt(carts) {
  for (const [item, quantity] of Object.entries(carts)) {
    console.log(`${item}: ${quantity} шт.`)
  }
}
printReceipt(cart)

// task 6
const defaultSettings = {
  theme: 'light',
  notifications: true,
  language: 'en'
}
const userPreferences = {
  language: 'ru',
  notifications: false
}
function mergeSettings(defaults, preferences) {
  return { ...defaults, ...preferences }
}
console.log(mergeSettings(defaultSettings, userPreferences))

// task 7
function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error('Возраст должен быть не менее 18 лет')
    }
    console.log('Возраст подходит')
  } catch (error) {
    console.error(error.message)
  }
}
checkAge(16)
checkAge(20)

// task 8
function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve('Число больше 10')
    } else {
      reject(new Error('Число 10 или меньше'))
    }
  })
}
checkNumber(15).then(console.log).catch(console.error)
checkNumber(5).then(console.log).catch(console.error)

// task 9
function delayMessage(message, delay) {
  setTimeout(() => {
    console.log(message)
  }, delay)
}
delayMessage('Hello, world!', 2000)

// task 10
async function fetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=10&select=title,price')
    const data = await response.json()
    console.log(data.products)
  } catch (error) {
    console.error('Не удалось получить данные')
  }
}
fetchProducts()
