let imageData = "";

const imageInput = document.getElementById("productImage");
const imagePreview = document.getElementById("imagePreview");
const listButton = document.getElementById("listProductBtn");
const productList = document.getElementById("productList");
const productCount = document.getElementById("productCount");


imageInput.addEventListener("change", function(){

  const file = this.files[0];

  if(!file){
    return;
  }

  const reader = new FileReader();

  reader.onload = function(event){

    imageData = event.target.result;

    imagePreview.src = imageData;
    imagePreview.style.display = "block";

  };

  reader.readAsDataURL(file);

});


listButton.addEventListener("click", function(){

  const name =
    document.getElementById("productName").value.trim();

  const sellingPrice =
    document.getElementById("sellingPrice").value;

  const oldPrice =
    document.getElementById("oldPrice").value;

  const discount =
    document.getElementById("discount").value;

  const rating =
    document.getElementById("rating").value;

  const category =
    document.getElementById("category").value;

  const description =
    document.getElementById("description").value.trim();


  if(!imageData){

    alert("Pehle product ki photo select karo.");

    return;
  }


  if(!name){

    alert("Product name likho.");

    return;
  }


  if(!sellingPrice){

    alert("Selling price likho.");

    return;
  }


  const product = {

    id: Date.now(),

    image: imageData,

    name: name,

    price: Number(sellingPrice),

    oldPrice: Number(oldPrice || 0),

    discount: Number(discount || 0),

    rating: Number(rating || 0),

    category: category,

    description: description

  };


  let products =
    JSON.parse(localStorage.getItem("shopzoProducts")) || [];


  products.push(product);


  localStorage.setItem(
    "shopzoProducts",
    JSON.stringify(products)
  );


  alert("✅ Product Shopzo me list ho gaya!");


  clearForm();

  showProducts();

});


function clearForm(){

  document.getElementById("productImage").value = "";

  document.getElementById("productName").value = "";

  document.getElementById("sellingPrice").value = "";

  document.getElementById("oldPrice").value = "";

  document.getElementById("discount").value = "";

  document.getElementById("rating").value = "";

  document.getElementById("category").value = "Fashion";

  document.getElementById("description").value = "";

  imageData = "";

  imagePreview.src = "";

  imagePreview.style.display = "none";

}


function showProducts(){

  const products =
    JSON.parse(localStorage.getItem("shopzoProducts")) || [];


  productList.innerHTML = "";

  productCount.textContent =
    products.length + (products.length === 1 ? " Product" : " Products");


  if(products.length === 0){

    productList.innerHTML = `
      <div class="empty">
        Abhi koi product listed nahi hai.
      </div>
    `;

    return;
  }


  products.forEach(function(product){

    const item =
      document.createElement("div");

    item.className = "product-item";


    item.innerHTML = `

      <img
        src="${product.image}"
        alt="${product.name}"
      >

      <div class="product-info">

        <div class="product-name">
          ${product.name}
        </div>

        <div class="product-price">
          ₹${product.price}

          ${
            product.oldPrice
              ? `<span class="old-price">₹${product.oldPrice}</span>`
              : ""
          }

        </div>

        <div class="product-meta">
          ${product.discount}% OFF
          &nbsp; • &nbsp;
          ⭐ ${product.rating}
        </div>

        <span class="category">
          ${product.category}
        </span>

        ${
          product.description
            ? `<div class="description">${product.description}</div>`
            : ""
        }

        <button
          class="delete-btn"
          onclick="deleteProduct(${product.id})"
        >
          🗑️ Delete Product
        </button>

      </div>
    `;


    productList.appendChild(item);

  });

}


function deleteProduct(id){

  const confirmDelete =
    confirm("Kya ye product delete karna hai?");


  if(!confirmDelete){
    return;
  }


  let products =
    JSON.parse(localStorage.getItem("shopzoProducts")) || [];


  products =
    products.filter(function(product){

      return product.id !== id;

    });


  localStorage.setItem(
    "shopzoProducts",
    JSON.stringify(products)
  );


  showProducts();

}


showProducts();
