const product = {
  name: 'Кроссовки',
  price: 300,
  count: 100
}

console.log(`Название товара: ${product.name}, Цена товара: ${product.price}, Кол-во товара на складе: ${product.count}`)

if (product.count > 10) {
  console.log('Товара достаточно')
} else if (product.count > 0 && product.count <= 10) {
  console.log('Мало товара')
} else {
  console.log('Товар закончился')
}

function getProduct(product) {
  return `${product.name} стоят ${product.price} руб.`
}

console.log(getProduct(product))

let sum = 0

for (let i = 1; i <= 10; i++) {
  sum += i
}

console.log(`Сумма чисел от 1 до 10: ${sum}`)