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
    applyPromotionsCart()
    calculateTotal()
    printCart()
}

//--CLEAN CART FUNCTION---
const cleanCart = () => {
    cart.splice(0, cart.length)
    printCart()
}

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
        total = total
    }
    console.log('Total:', total)
    return total
}

//---SPECIAL OFFERS---
//1) Calculamos subtotal
//1) id.product tiene descuentos? guardamos precio total descontado en subtotalWithDiscount : no se guarda
//2) Iteramos cada elemento del array con .forEach porque es a cada producto
function applyPromotionsCart() {
    let totalWithDiscount = 0
    cart.forEach((product) => {
        let subtotal = product.price * product.quantity
        if (product.id === 1 && product.quantity >= 3) {
            subtotal *= 0.8
        } else if (product.id === 3 && product.quantity >= 10) {
            subtotal *= 0.7
        }
        product.subtotalWithDiscount = subtotal
        totalWithDiscount += subtotal
    })
    console.log('Total discount:', totalWithDiscount)
    return totalWithDiscount
}

//--PRINT CART---
//1) Añadimos fila de subtotal y subtotal con descuento en HTML
//1) Llamamos y almacenamos funciones, preparamos variables + getElements...
//2) limpiamos contenido carrito con print.innerHTML = ''
//3) forEach para iterar sobre cada elemento del carrito y mostramos toda la info desglosada al maximo añadiendo la columna subtotal sin descuento y total sin descuento que se ha modificado en el HTML
function printCart() {
    let totalWithDiscount = applyPromotionsCart()
    let totalFinalPrice = calculateTotal()
    let print = document.getElementById('cart_list')
    let totalPrice = document.getElementById('total_price')
    let totalPriceWithDiscount = document.getElementById('total_price_with_discount')
    print.innerHTML = ''

    cart.forEach(product => {
        let subtotal = product.price * product.quantity;
        print.innerHTML +=
            `<tr>
                <td>${product.id}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>${product.quantity}</td>
                <td>$${subtotal.toFixed(2)}</td>
                <td>$${product.subtotalWithDiscount.toFixed(2)}</td>
            </tr>`
    })
    totalPrice.innerHTML = `${totalFinalPrice.toFixed(2)}`
    totalPriceWithDiscount.innerHTML = `${totalWithDiscount.toFixed(2)}`
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}