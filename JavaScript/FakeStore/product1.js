async function getProducts1() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    const productList1 = document.getElementById("productContainer");
    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("row", "p-3", "card1", "rounded", "shadow");
      d.innerHTML = `
      <div class="col-3 h-100">
            <img
              src=${element.image}
              alt=${element.title}
              class="w-100 h-100 object-fit-contain"
            />
          </div>

          <div class="col-9 h-100">
            <div class="fw-bold fs-4">${element.title}</div>
            <div class="fw-semibold">${element.rating.rate}/5 (${
        element.rating.count
      })</div>
            <div class="fw-bold fs-5"><i class="bi bi-currency-rupee"></i>${element.price * 100}</div>
            <div class="mb-5">
               ${element.description}
            </div>
            <div class="d-flex gap-3 mt-3">
              <button class="btn btn-outline-primary">Add to Cart</button>
              <button class="btn bg-primary">Buy Now</button>
            </div>
          </div>
      `;

      productList1.appendChild(d);
    });
  } catch (error) {
    console.log(error.message);
  }
}

getProducts1();