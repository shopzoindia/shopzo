let cartCount = 0;

const cartCountElement =
  document.getElementById("cartCount");

const addButtons =
  document.querySelectorAll(".add-button");

const categoryButtons =
  document.querySelectorAll(".category");

const products =
  document.querySelectorAll(".product");

const searchInput =
  document.getElementById("searchInput");

const clearFilter =
  document.getElementById("clearFilter");

const shopNowButton =
  document.getElementById("shopNowButton");


/* Add to Cart */

addButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    cartCount++;

    cartCountElement.textContent =
      cartCount;

    alert(
      button.dataset.product +
      " cart mein add ho gaya!"
    );

  });

});


/* Category Filter */

categoryButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    const category =
      button.dataset.category;

    products.forEach(function(product) {

      if (
        product.dataset.category === category
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }

    });

  });

});


/* View All */

clearFilter.addEventListener("click", function() {

  products.forEach(function(product) {

    product.style.display = "block";

  });

});


/* Search */

searchInput.addEventListener(
  "input",
  function() {

    const search =
      searchInput.value.toLowerCase();

    products.forEach(function(product) {

      const name =
        product
          .querySelector("h3")
          .textContent
          .toLowerCase();

      if (name.includes(search)) {

        product.style.display = "block";

      } else {

        product.style.display = "none";

      }

    });

  }
);


/* Shop Now */

shopNowButton.addEventListener(
  "click",
  function() {

    document
      .getElementById("products")
      .scrollIntoView({
        behavior: "smooth"
      });

  }
);
