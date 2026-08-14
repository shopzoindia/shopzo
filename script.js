const products = [
  {
    name: "Fridge Covers",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80",
    price: 65,
    old: 123,
    off: "47% off",
    special: "₹45 with 1 Special Offer",
    rating: "3.9",
    reviews: "28,613"
  },

  {
    name: "Storage Organizer",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=700&q=80",
    price: 74,
    old: 136,
    off: "46% off",
    special: "₹55 with 1 Special Offer",
    rating: "4.1",
    reviews: "1,367"
  },

  {
    name: "Premium Dhoop Sticks",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80",
    price: 81,
    old: 148,
    off: "45% off",
    special: "₹65 with 1 Special Offer",
    rating: "4.2",
    reviews: "3,421"
  },

  {
    name: "Table Cover Set",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=80",
    price: 75,
    old: 137,
    off: "45% off",
    special: "₹59 with 1 Special Offer",
    rating: "4.0",
    reviews: "2,210"
  }
];


function makeProduct(product) {

  return `
    <article class="product">

      <img
        src="${product.image}"
        alt="${product.name}"
        onerror="this.src='https://placehold.co/600x650/f5edf5/7a1768?text=Shopzo'"
      >

      <div class="info">

        <span class="heart">♡</span>

        <div class="price">
          ₹${product.price}
          <span class="old">${product.old}</span>
          <span class="off">${product.off}</span>
        </div>

        <div class="discount">
          Discount applied ✓
        </div>

        <div class="special">
          ${product.special}
        </div>

        <div>
          <span class="rating">
            ${product.rating} ★
          </span>

          <span>
            ${product.reviews}
          </span>
        </div>

        <button
          class="cart"
          onclick="addToCart('${product.name}')"
        >
          Add to Cart
        </button>

      </div>

    </article>
  `;
}


function showProducts(list) {

  const container =
    document.getElementById("products");

  container.innerHTML =
    list.map(makeProduct).join("");
}


function addToCart(name) {

  alert(name + " cart me add ho gaya!");

}


const searchInput =
  document.getElementById("searchInput");


searchInput.addEventListener("input", function () {

  const searchText =
    this.value.toLowerCase().trim();

  if (searchText === "") {

    showProducts(products);
    return;

  }

  const filtered =
    products.filter(function(product) {

      return product.name
        .toLowerCase()
        .includes(searchText);

    });

  showProducts(filtered);

});


showProducts(products);
