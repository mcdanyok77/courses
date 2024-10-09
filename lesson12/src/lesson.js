function sum(a, b) {
  return a + b
}

function res(a, b) {
  return a - b
}

function mul(a, b, func) {
  return func(a, b)
}

console.log(sum(2, 3))

console.log(res(4, 2))

console.log(mul(2, 3, sum))

const products = [
  { name: 'Product 1', price: 10, quantity: 5 },
  { name: 'Product 2', price: 20, quantity: 0 },
  { name: 'Product 3', price: 30, quantity: 10 }
]

const filterProduct = products.filter((product) => {
  if (product.quantity > 0) {
    return true
  }

  return false
})

const addProduct = filterProduct.map((product) => {
  const total = product.price * product.quantity
  return {
    name: product.name,
    prise: product.price,
    quantity: product.quantity,
    total
  }
})

console.log(addProduct)
