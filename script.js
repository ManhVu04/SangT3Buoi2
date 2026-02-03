function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

const products = [
  new Product(1, "iPhone 15 Pro", 33000000, 5, "Phones", true),
  new Product(2, "Galaxy S24", 28000000, 0, "Phones", true),
  new Product(3, "AirPods Pro", 6200000, 12, "Accessories", true),
  new Product(4, "Apple Watch", 11000000, 3, "Accessories", true),
  new Product(5, "MacBook Air", 27000000, 4, "Laptops", true),
  new Product(6, "Dell XPS", 35000000, 2, "Laptops", false),
];

const outputEl = document.getElementById("output");

function addSection(title, content) {
  const card = document.createElement("div");
  card.className = "card";
  const h3 = document.createElement("h3");
  h3.textContent = title;
  const pre = document.createElement("pre");
  pre.textContent = content;
  card.appendChild(h3);
  card.appendChild(pre);
  outputEl.appendChild(card);
}

// Câu 3: mảng mới chỉ chứa name, price
const namePriceList = products.map((p) => ({ name: p.name, price: p.price }));

// Câu 4: sản phẩm còn hàng (quantity > 0)
const inStockProducts = products.filter((p) => p.quantity > 0);

// Câu 5: có ít nhất một sản phẩm giá > 30,000,000
const hasOver30m = products.some((p) => p.price > 30000000);

// Câu 6: tất cả sản phẩm Accessories đều đang bán
const accessories = products.filter((p) => p.category === "Accessories");
const allAccessoriesAvailable = accessories.length
  ? accessories.every((p) => p.isAvailable)
  : false;

// Câu 7: tổng giá trị kho
const totalInventoryValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);

// Câu 8: for...of duyệt và in
const listForOf = [];
for (const p of products) {
  const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
  listForOf.push(`${p.name} - ${p.category} - ${status}`);
}

// Câu 9: for...in in tên thuộc tính và giá trị tương ứng (ví dụ trên sản phẩm đầu)
const forInLines = [];
for (const key in products[0]) {
  if (Object.prototype.hasOwnProperty.call(products[0], key)) {
    forInLines.push(`${key}: ${products[0][key]}`);
  }
}

// Câu 10: tên sản phẩm đang bán và còn hàng
const sellingAndInStockNames = products
  .filter((p) => p.isAvailable && p.quantity > 0)
  .map((p) => p.name);

addSection("Câu 3 - name, price", JSON.stringify(namePriceList, null, 2));
addSection(
  "Câu 4 - còn hàng (quantity > 0)",
  inStockProducts.map((p) => p.name).join("\n")
);
addSection("Câu 5 - có giá > 30.000.000?", String(hasOver30m));
addSection(
  "Câu 6 - Accessories đều đang bán?",
  String(allAccessoriesAvailable)
);
addSection(
  "Câu 7 - tổng giá trị kho",
  totalInventoryValue.toLocaleString("vi-VN") + " VND"
);
addSection("Câu 8 - for...of", listForOf.join("\n"));
addSection("Câu 9 - for...in (sản phẩm đầu)", forInLines.join("\n"));
addSection("Câu 10 - đang bán và còn hàng", sellingAndInStockNames.join("\n"));
