fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    const products = res.products;
    const e = document.getElementById("box");
    for (let i = 0; i < products.length; i++) {
      const productData = encodeURIComponent(JSON.stringify(products[i]));
      e.innerHTML += `
        <div class="product-card" onclick='viewProduct("${productData}")'>
          <img src="${products[i].thumbnail}" alt="Product Image">
          <h3>${products[i].title}</h3>
          <p><strong>Brand:</strong> ${products[i].brand}</p>
          <p><strong>Category:</strong> ${products[i].category}</p>
          <p><strong>Description:</strong> ${products[i].description}</p>
          <p class="price">₹${products[i].price}</p>
          <p><strong>Stock:</strong> ${products[i].stock}</p>
        </div>
      `;
    }
  });

function viewProduct(productStr) {
  const product = JSON.parse(decodeURIComponent(productStr));
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "details.html";
}
