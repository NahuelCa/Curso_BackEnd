import ProductManager from "./services/ProductManager.js";

export default (io) => {
  const productManager = new ProductManager("./data/products.json");

  io.on("connection", handleConnection);

  async function handleConnection(socket) {
    console.log(`Nuevo cliente conectado ${socket.id}`);
    emitProducts(socket);

    socket.on("add", async (product) => {
      await addProductAndEmit(product);
    });

    socket.on("delete", async (id) => {
      console.log("ID del producto a eliminar:", id);
      await deleteProductAndEmit(id);
    });
  }

  async function emitProducts(socket) {
    const productsList = await productManager.getProducts();

    socket.emit("products", productsList);
  }

  async function addProductAndEmit(product) {
    await productManager.addProduct(product);
    emitProducts(io);
  }

  async function deleteProductAndEmit(id) {
    await productManager.deleteProduct(id);
    emitProducts(io);
  }
};
