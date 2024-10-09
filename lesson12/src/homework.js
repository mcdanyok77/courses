// task 1
let i = 0
while (i <= 20) {
  if (i === 15) {
    break
  }
  if (i === 10 || i === 13) {
    i++
    continue
  }
  console.log(i)
  i++
}

// task 2
function isEven(number) {
  return number % 2 === 0
}

console.log(isEven(4))
console.log(isEven(7))

// task 3
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
]
users.forEach((user) => {
  console.log(`Имя пользователя: ${user.name}, Возраст: ${user.age}`)
})

// task 4
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
]
const increasedPrices = products.map((product) => ({
  ...product,
  price: product.price * 1.1
}))

console.log(increasedPrices)

// task 5
const tasks = [
  { title: 'Task 1', completed: true },
  { title: 'Task 2', completed: false },
  { title: 'Task 3', completed: true }
]
const completedTasks = tasks.filter((task) => task.completed)

console.log(completedTasks)

// task 6
const students = [
  { name: 'John', grade: 85 },
  { name: 'Jane', grade: 92 },
  { name: 'Alex', grade: 78 }
]

const sortedStudents = students.sort((a, b) => b.grade - a.grade)

console.log(sortedStudents)

// task 7
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: '1984', author: 'George Orwell' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
]
const findBook = books.find((book) => book.author === 'George Orwell')

console.log(findBook)

// task 8
const cars = [
  { model: 'Tesla', color: 'red' },
  { model: 'BMW', color: 'blue' },
  { model: 'Audi', color: 'black' }
]
function findColor(cars, color) {
  return cars.some((car) => car.color === color)
}

console.log(findColor(cars, 'red'))
console.log(findColor(cars, 'green'))

// task 9
const purchases = [
  { item: 'Book', date: '2023-09-10' },
  { item: 'Laptop', date: '2023-09-05' },
  { item: 'Phone', date: '2023-09-01' }
]
const reversedPurchases = purchases.reverse()

console.log(reversedPurchases)
