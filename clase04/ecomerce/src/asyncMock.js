/**
 * Mock asíncrono de la API del e-commerce.
 * Datos en memoria dentro de React; simula delay para ver loading/error.
 * Los componentes usan productsApi y ordersApi igual que si fuera una API real.
 */

const DELAY_MS = 400;

function delay(ms = DELAY_MS) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const PRODUCTS_INITIAL = [
  { id: "1", name: "Laptop Pro", price: 999, stock: 10 },
  { id: "2", name: "Teclado Mecánico", price: 89, stock: 25 },
  { id: "3", name: "Mouse Inalámbrico", price: 45, stock: 50 },
  { id: "4", name: 'Monitor 27"', price: 299, stock: 15 },
  { id: "5", name: "Auriculares", price: 79, stock: 30 },
];

let products = [...PRODUCTS_INITIAL];
let orders = [];
let nextOrderId = 1;

export const productsApi = {
  async getAll() {
    await delay();
    return [...products];
  },

  async getById(id) {
    await delay();
    const product = products.find((p) => p.id === id);
    if (!product) throw new Error("Producto no encontrado");
    return { ...product };
  },

  async create(product) {
    await delay();
    const newProduct = {
      id: String(products.length + 1),
      name: product.name || "Producto",
      price: product.price ?? 0,
      stock: product.stock ?? 10,
    };
    products.push(newProduct);
    return { ...newProduct };
  },

  async replace(id, product) {
    await delay();
    const idx = products.findIndex((p) => p.id === id);
    if (idx === -1) throw new Error("Producto no encontrado");
    products[idx] = {
      id,
      name: product.name ?? products[idx].name,
      price: product.price ?? products[idx].price,
      stock: product.stock ?? products[idx].stock,
    };
    return { ...products[idx] };
  },

  async update(id, partial) {
    await delay();
    const idx = products.findIndex((p) => p.id === id);
    if (idx === -1) throw new Error("Producto no encontrado");
    products[idx] = { ...products[idx], ...partial, id };
    return { ...products[idx] };
  },

  async delete(id) {
    await delay();
    const idx = products.findIndex((p) => p.id === id);
    if (idx === -1) throw new Error("Producto no encontrado");
    products.splice(idx, 1);
    return { deleted: id };
  },
};

export const ordersApi = {
  async getAll() {
    await delay();
    return [...orders];
  },

  async create(items) {
    await delay();
    const order = {
      id: String(nextOrderId++),
      items: items || [],
      createdAt: new Date().toISOString(),
    };
    orders.push(order);
    return { ...order };
  },
};
