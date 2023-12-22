function addToCart(id) {
    let clickCounter = 0;
    clickCounter++;
    document.getElementById(`counter-${id}`).innerText = clickCounter;
    // console.log("Item added to cart!");  
}
module.exports = addToCart()