// ================================
// SHOPZO PRODUCT DATA
// ================================
// Abhi ye demo products hain.
// Baad mein isi system ko Admin Panel + Database
// se connect karenge, tab tumhare apne products
// Offer Zone mein automatically dikhenge.
// ================================

const products = [

  {
    name: "Stylish Ladies Kurti",
    price: 399,
    oldPrice: 799,
    discount: "50% OFF",
    rating: "4.2 ★",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=600&q=80",
    offer: true,
    flash: true
  },

  {
    name: "Women's Fashion Dress",
    price: 499,
    oldPrice: 999,
    discount: "50% OFF",
    rating: "4.4 ★",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
    offer: true,
    flash: true
  },

  {
    name: "Men's Casual Shirt",
    price: 299,
    oldPrice: 599,
    discount: "50% OFF",
    rating: "4.1 ★",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
    offer: true,
    flash: false
  },

  {
    name: "Fashion Sandals",
    price: 249,
    oldPrice: 499,
    discount: "50% OFF",
    rating: "4.0 ★",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=600&q=80",
    offer: true,
    flash: true
  }

];


// ================================
// CATEGORIES
// ================================

const categories = [

  ["▦", "All"],
  ["👗", "Fashion"],
  ["📱", "Electronics"],
  ["💄", "Beauty"],
  ["👟", "Footwear"],
  ["🏠", "Home"],
  ["🧸", "Kids"]

];


// ================================
// PRODUCT CARD
// ================================

function productCard(product) {

  return `

    <div class="product-card">

      <div class="product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
          style="
            width:100%;
            height:210px;
            object-fit:cover;
            border-radius:10px;
          "
        >

      </div>

      <div class="product-info">

        <div class="product-name">
          ${product.name}
        </div>

        <div class="product-price">
          ₹${product.price}

          <span style="
            color:#999;
            text-decoration:line-through;
            font-size:13px;
            margin-left:5px;
          ">
            ₹${product.oldPrice}
          </span>
        </div>

        <div style="
          color:#16845b;
          font-size:13px;
          margin-top:5px;
        ">
          ${product.discount}
        </div>

        <div style="
          display:inline-block;
          background:#1fa46d;
          color:white;
          border-radius:14px;
          padding:3px 7px;
          margin-top:7px;
          font-size:12px;
        ">
          ${product.rating}
        </div>

        <button
          onclick="addToCart('${product.name}')"
        >
          Add to Cart
        </button>

      </div>

    </div>

  `;

}


// ================================
// CATEGORY DISPLAY
// ================================

function renderCategories() {

  const box =
    document.getElementById("categories");

  if (!box) return;

  box.innerHTML = categories.map(function(item) {

    return `

      <div class="category">

        <div class="category-icon">
          ${item[0]}
        </div>

        <div>
          ${item[1]}
        </div>

      </div>

    `;

  }).join("");

}


// ================================
// OFFER ZONE
// ================================

function renderOfferZone(list = products) {

  const box =
    document.getElementById("offer-products");

  if (!box) return;

  const offerProducts =
    list.filter(function(product) {

      return product.offer === true;

    });


  if (offerProducts.length === 0) {

    box.innerHTML = `

      <div class="empty">

        Offer Zone mein abhi koi product nahi hai.

      </div>

    `;

    return;

  }


  box.innerHTML =
    offerProducts
      .map(productCard)
      .join("");

}


// ================================
// FLASH SALE
// ================================

function renderFlashSale() {

  const box =
    document.getElementById("flashProducts");

  if (!box) return;


  const flashProducts =
    products.filter(function(product) {

      return product.flash === true;

    });


  if (flashProducts.length === 0) {

    box.innerHTML = `

      <div class="empty">

        Flash Sale mein abhi koi product nahi hai.

      </div>

    `;

    return;

  }


  box.innerHTML =
    flashProducts
      .map(productCard)
      .join("");

}


// ================================
// SEARCH
// ================================

const searchInput =
  document.getElementById("searchInput");


if (searchInput) {

  searchInput.addEventListener(
    "input",
    function() {

      const search =
        searchInput.value
          .toLowerCase()
          .trim();


      if (search === "") {

        renderOfferZone();
        renderFlashSale();

        return;

      }


      const results =
        products.filter(function(product) {

          return (

            product.name
              .toLowerCase()
              .includes(search)

            ||

            product.category
              .toLowerCase()
              .includes(search)

          );

        });


      renderOfferZone(results);

      const flashResults =
        results.filter(function(product) {

          return product.flash === true;

        });


      const flashBox =
        document.getElementById("flashProducts");


      if (flashBox) {

        flashBox.innerHTML =
          flashResults.length

            ? flashResults
                .map(productCard)
                .join("")

            : `<div class="empty">
                 Product nahi mila.
               </div>`;

      }

    }
  );

}


// ================================
// ADD TO CART
// ================================

function addToCart(productName) {

  alert(
    productName +
    " cart mein add ho gaya 🛒"
  );

}


// ================================
// START SHOPZO
// ================================

document.addEventListener(
  "DOMContentLoaded",
  function() {

    renderCategories();

    renderOfferZone();

    renderFlashSale();

  }
);
