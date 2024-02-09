
var totalPrice = 0;
// Function to display cart items
function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCookie = getCookie('cart');
  if (cartCookie) {
    const cart = JSON.parse(cartCookie);
    cartItemsContainer.innerHTML = ''; 

    cart.forEach((product,index) => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');

      const imgElement = document.createElement('img');
      imgElement.src = product.image;
      imgElement.alt = product.name; 

      const nameElement = document.createElement('p');
      nameElement.textContent = product.name; 

      const priceElement = document.createElement('p');
      priceElement.innerHTML = `<strong>Price: ${product.price} $</strong>`; 

      productElement.appendChild(imgElement);
      productElement.appendChild(nameElement);
      productElement.appendChild(priceElement);
      cartItemsContainer.appendChild(productElement);
      totalPrice += product.price *1 ;
    });
    document.getElementById('totalPrice').innerHTML=`Total Prise: ${totalPrice.toFixed(2)}`;
    cartItemsContainer.innerHTML+=`<div style="clear:both"></div>`
  }
}

// Function to update the cart icon with the number of items
function updateCartIcon() {
  const cartIcon = document.getElementById('cart-icon');
  if (cartIcon) {
    cartIcon.textContent = cart.length.toString();
     setCookie('cart', JSON.stringify(cart), 30); 
  }
}

// Function to clear the cart
function clearCart() {
  cart = [];
  totalPrice = 0;
  document.cookie = 'cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  updateCartIcon(); 
  displayCartItems(); 
}

function checkout(){
    alert("thanks for coming come back soon");
    cart = [];
  totalPrice = 0;
  document.cookie = 'cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  updateCartIcon(); 
  displayCartItems(); 
}

// Event listener for page load
window.onload = function() {
const cartCookie = getCookie('cart');
  cart = JSON.parse(cartCookie);
  updateCartIcon(); 
  displayCartItems(); 
};
