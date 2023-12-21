function addToCart() {
    let clickCounter = 0;
    clickCounter++;
    document.getElementById('counter').innerText = clickCounter;
    console.log("Item added to cart!");
}
module.exports = addToCart()