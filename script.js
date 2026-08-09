let cartCount = 0;

const cartToast =
  document.getElementById("cartToast");

const cartButtons =
  document.querySelectorAll(".add-button");

const searchInput =
  document.getElementById("searchInput");

const products =
  document.querySelectorAll(".product");

const categories =
  document.querySelectorAll(".category");


/* Add to cart */

cartButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    cartCount++;

    cartToast.textContent =
      button.dataset.product +
      " added to cart 🛒";

    cartToast.style.display = "block";

    setTimeout(function() {
      cartToast.style.display = "none";
    }, 1800);

  });

});


/* Category filter */

categories.forEach(function(category) {

  category.addEventListener("click", function() {

    const selected =
      category.dataset.category;

    products.forEach(function(product) {

      if (
        selected === "all" ||
        product.dataset.category === selected
      ) {

        product.style.display = "block";

      } else {

        product.style.display = "none";

      }

    });

  });

});


/* Product search */

searchInput.addEventListener(
  "input",
  function() {

    const search =
      searchInput.value.toLowerCase().trim();

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


/* Sale countdown */

let seconds = 13 * 60 * 60 + 12 * 60 + 28;

setInterval(function() {

  if (seconds <= 0) {
    seconds = 24 * 60 * 60;
  }

  seconds--;

  const hours =
    Math.floor(seconds / 3600);

  const minutes =
    Math.floor((seconds % 3600) / 60);

  const secs =
    seconds % 60;

  document.getElementById("timer")
    .textContent =
      String(hours).padStart(2, "0") +
      " : " +
      String(minutes).padStart(2, "0") +
      " : " +
      String(secs).padStart(2, "0");

}, 1000);
