const productList = document.getElementById('productList')
const products = productList.getElementsByTagName('li')

function changeSecondProductColor() {
  products[1].style.color = 'red'
}

function underlineAllProducts() {
  for (const product of products) {
    product.style.textDecoration = 'underline'
  }
}

function changeFirstProduct() {
  products[0].textContent = 'смартфон'
}

function hideThirdProduct() {
  products[2].classList.add('is-hidden')
}

function addProduct() {
  const newProduct = document.createElement('li')
  newProduct.textContent = 'планшет'
  productList.appendChild(newProduct)
}

window.onload = () => {
  changeSecondProductColor()
  underlineAllProducts()
}
