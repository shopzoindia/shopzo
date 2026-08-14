/* =================================
   SHOPZO PRODUCTS
   YAHAN APNE PRODUCTS ADD KAR SAKTE HO
================================= */

const products = [

  {
    name: "Stylish Ladies Kurti",
    price: 399,
    oldPrice: 799,
    discount: "50% OFF",
    rating: "4.2",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=600&q=80"
  },

  {
    name: "Women's Fashion Dress",
    price: 499,
    oldPrice: 999,
    discount: "50% OFF",
    rating: "4.4",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80"
  },

  {
    name: "Men's Casual Shirt",
    price: 299,
    oldPrice: 599,
    discount: "50% OFF",
    rating: "4.1",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80"
  },

  {
    name: "Fashion Sandals",
    price: 249,
    oldPrice: 499,
    discount: "50% OFF",
    rating: "4.0",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80"
  },

  {
    name: "Beauty Product",
    price: 199,
    oldPrice: 399,
    discount: "50% OFF",
    rating: "4.3",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
  },

  {
    name: "Stylish Shoes",
    price: 599,
    oldPrice: 999,
    discount: "40% OFF",
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  }
];


/* =================================
   PRODUCT CARD
================================= */

function createProduct(product) {

  return `
    <div class="product">

      <img src="${product.image}" alt="${product.name}">

      <div class="product-info">

        <h3>${product.name}</h3>

        <div class="price">
          ₹${product.price}
          <span class="old-price">₹${product.oldPrice}</span>
        </div>

        <div class="discount">
          ${product.discount}
        </div>

        <div class="rating">
          ⭐ ${product.rating}
        </div>

        <button class="cart" onclick="addToCart('${product.name}')">
          Add to Cart
        </button>

      </div>

    </div>
  `;
}


/* =================================
   SHOW OFFER ZONE
================================= */

function showProducts(list = products) {

  const offer = document.getElementById("offerProducts");
  const flash = document.getElementById("flashProducts");

  if (offer) {
    offer.innerHTML = list.map(createProduct).join("");
  }

  if (flash) {
    flash.innerHTML = list.slice(0, 4).map(createProduct).join("");
  }
}


/* =================================
   SEARCH
================================= */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

  searchInput.addEventListener("input", function () {

    const text = this.value.toLowerCase().trim();

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(text)
    );

    showProducts(filtered);

  });

}


/* =================================
   ADD TO CART
================================= */

function addToCart(name) {
  alert(name + " added to cart!");
}


/* =================================
   START
================================= */

showProducts();
