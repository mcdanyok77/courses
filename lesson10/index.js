const Product = {
  name: 'Кроссовки',
  prise: 300,
  count: 100
}

console.log(`Название товара: ${Product.name}, Цена товара: ${Product.prise}, Кол-во товара на складе: ${Product.count}`)

if (Product.count > 10) {
  console.log('Товара достаточно')
} else if (Product.count > 0 && Product.count <= 10) {
  console.log('Мало товара')
} else {
  console.log('Товар закончился')
}

function getProduct(Product) {
  return `${Product.name} стоят ${Product.prise} руб.`
}

console.log(getProduct(Product))

let sum = 0

for (let i = 1; i <= 10; i++) {
  sum += i
}

console.log(`Сумма чисел от 1 до 10: ${sum}`)