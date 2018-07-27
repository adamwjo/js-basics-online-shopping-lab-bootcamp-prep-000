var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var priceOfItem  = Math.floor(Math.random() * 100) + 1
  cart.push({itemName: item, itemPrice: priceOfItem ,})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
  else if (cart.length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  }
  else {
    var cartdescrip = "In your cart, you have "
    for (let i = 0 ; i < cart.length - 1; i++) {
      cartdescrip += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `
    }
    var lastItem = getCart()[getCart().length - 1]
    cartdescrip += `and ${lastItem.itemName} at $${lastItem.itemPrice}.`
  }
  return cartdescrip
}

function total() {
  var totalCost = 0
  for (let i = 0 ; i < cart.length; i++) {
     totalCost = totalCost + getCart()[i].itemPrice
  }
  return totalCost
}

function removeFromCart(item) {
  if (cart.indexOf(item) < 0) {
    return `That item is not in your cart.`
  }
  else {
    
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
