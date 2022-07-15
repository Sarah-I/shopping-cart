const addButton = document.getElementsByClassName("btn-primary")
const removeButton = document.getElementsByClassName("btn-danger")
// console.log(addButton)
for (let i=0; i< addButton.length; i++) {
    addButton[i].addEventListener('click', addToCart)
}
for (let i = 0; i < removeButton.length; i++) {
    let remove = removeButton[i];
    remove.addEventListener("click", removeFromCart);
    }

function addToCart (event) {
    const item = event.target.parentElement.parentElement.firstChild.nextSibling.innerText
    const cartItem = document.createElement("li")
    cartItem.innerHTML += `<li class="cart-li">${item}</li>`
    const cart = document.getElementById("cart-list")
    cart.append(cartItem)
    
}

function removeFromCart (event) {
    
    const cart = document.getElementById("cart-list")
    const button=event.target
    const item = button.parentElement.parentElement.firstChild.nextSibling.innerText
    const cartItems = document.getElementsByClassName("cart-li")
    // console.log(cartItems)
    for (let i=0; i<cartItems.length; i++){
        if (cartItems[i].innerText===item){
            cartItems[i].parentElement.remove()
        }

    }

}