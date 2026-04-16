function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function buyNow(productName) {
  alert("You selected: " + productName + "\nRedirecting to checkout...");
  // Later you can link this to Stripe, PayPal, or Shopify checkout
}