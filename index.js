var cart = [];

function getCart() {
  return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var price = Math.floor((Math.random()*100)+1)
  var newItem = Object.assign({}, {
    itemName: item,
    itemPrice: price
  })
  cart = [...cart, newItem]
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var cart = getCart()
  if (cart.length === 0) return 'Your shopping cart is empty.'
  var items = []
  if (cart.length === 1) return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  for(var i=0; i<cart.length; i++) {
    i === cart.length - 1 
      ? items.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}`)
      : items.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  return `In your cart, you have ${items.join(', ')}.`
}

function total() {
  // write your code here
  const reducer = (total, item) => total + item.itemPrice
  }
  return getCart().reduce()
  
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
