async function fetchProducts(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Не удалось получить данные')
  }
}

// fetchProducts(1)

async function getProducts() {
  const [firstId, secondId, thirdId] = await Promise.all([
    fetchProducts(1),
    fetchProducts(2),
    fetchProducts(3)
  ])

  console.log(firstId)
  console.log(secondId)
  console.log(thirdId)
}

getProducts()
