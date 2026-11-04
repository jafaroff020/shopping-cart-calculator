
let products = [];

function addProduct() {
    const name = document.getElementById("name").value.trim();
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;
    const error = document.getElementById("error");

    error.textContent = "";

    if (name === "" || price === "" || quantity === "") {
        error.textContent = "Please fill in all fields!";
        return;
    }

    const productPrice = Number(price);
    const productQuantity = Number(quantity);

    if (!Number.isFinite(productPrice) ||
        !Number.isInteger(productQuantity) ||
        productPrice < 0 ||
        productQuantity < 0) {
        error.textContent = "Invalid price or quantity!";
        return;
    }

    if (products.length >= 100) {
        error.textContent = "Maximum 100 products allowed!";
        return;
    }

    const product = {
        name: name,
        price: productPrice,
        quantity: productQuantity
    };

    products.push(product);

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";

    showReceipt();
}

function showReceipt() {
    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    let total = 0;

    products.forEach(product => {
        const subtotal = product.price * product.quantity;

        total += subtotal;

        const item = document.createElement("div");
        item.className = "product";

        const name = document.createElement("span");
        name.textContent = product.name + " × " + product.quantity;

        const amount = document.createElement("span");
        amount.textContent = subtotal.toFixed(2) + " AZN";

        item.appendChild(name);
        item.appendChild(amount);

        productList.appendChild(item);
    });

    document.getElementById("total").textContent =
        total.toFixed(2) + " AZN";
}

function clearReceipt() {
    products = [];

    document.getElementById("productList").innerHTML =
        '<p class="empty">No products added yet.</p>';

    document.getElementById("total").textContent = "0.00 AZN";
    document.getElementById("error").textContent = "";
}
