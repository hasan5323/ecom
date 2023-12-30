let clickCounter = 0;
function addToCart(id) {
    clickCounter++;
    document.getElementById(`counter-${id}`).innerText = clickCounter;
    // console.log("Item added to cart!");  
}
module.exports = addToCart()