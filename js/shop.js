var cart = [];
var total = 0;

//---BUY FUNCTION:---
//1) Buscamos por ID .find
//2) Sí esta => posicion array (find.index)
//3) Està? incrementamos al carret ( quantity ++ ) : agregamos cantidad 1
//4) No esta de cap manera? 'Error!'
function buy(id) {
    const productFound = products.find((product) => product.id === id)
    const productInCart = cart.findIndex((product) => product.id === id)
    if (productInCart !== -1) {
        cart[productInCart].quantity++
    } else if (productFound) {
        productFound.quantity = 1
        cart.push(productFound)
    } else {
        alert('product not found!')
    }
    console.table(cart)
    calculateTotal()
}

//--CLEAN CART FUNCTION---
const cleanCart = () => cart.splice(0, cart.length)

//---CALCULATE TOTAL---
//1) Iniciamos total a 0 para el bucle
//2) Precio * Cantidad de un producto = subtotal
//3) cantidad total = subtotal + total cesta (redondeamos decimales .toFixed)
//4) Llamamos la funcion al botón buy
function calculateTotal() {
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        let subtotal = cart[i].price * cart[i].quantity
        total += subtotal
        total = total.toFixed(2)
    }
    console.log(total)
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}