
class ProductManager {
  constructor() {
// Array para almacenar los productos.
      this.products = [];
// Set para almacenar los códigos de productos.
      this.productCodes = new Set();
// Campos requeridos para un producto.
      this.requiredFields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];
  }

// Método para agregar un nuevo producto.
  addProduct(title, description, price, thumbnail, code, stock) {
// Verificación de si el código existe.
      if (this.productCodes.has(code)) {
          throw new Error(`El código ${code} ya está en uso`);
      }

// Objeto con los datos del producto.
      const newProduct = {
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
      };

// Validar campos requeridos
      this.validateRequiredFields(newProduct);

// Asignación de ID al producto.
      const id = this.getNextId();
      this.products.push({
          ...newProduct,
          id,
      });
// adición código del producto a la lista.
      this.productCodes.add(code);
  }

// Método para validar campos requeridos.
  validateRequiredFields(product) {
      if (!this.requiredFields.every(field => product[field] !== undefined && product[field] !== null && product[field] !== '')) {
          throw new Error("Todos los campos son requeridos");
      }
  }

// Obtener todos los productos.
  getProducts() {
      return this.products;
  }

// Obtener un producto por su código.
  getProductByCode(code) {
      return this.products.find(product => product.code === code);
  }

// Obtener un producto por su ID.
  getProductById(id) {
// Busqueda el producto por su ID.
      const product = this.products.find(product => product.id === id);
// Error si no se encuentra el producto.
      if (!product) {
          throw new Error("Producto no encontrado");
      }
      return product;
  }

// Obtener el siguiente ID disponible.
  getNextId() {
      return this.products.length + 1;
  }
}

// Ejemplo.
const existingProduct = new ProductManager();

// Lista de productos inicial (vacía).
console.log(existingProduct.getProducts());

// Productos de ejemplo.
existingProduct.addProduct(
  "Producto de ejemplo",
  "Esto es un ejemplo",
  100,
  "Sin imagen",
  "abc123",
  100
);

existingProduct.addProduct(
  "Producto de ejemplo 2",
  "Esto es un ejemplo",
  1000,
  "Sin imagen",
  "abc124",
  1000
);

// Lista de productos después de agregarlos.
console.log(existingProduct.getProducts());

// Manejo de errores.
try {
// Obtener productos por su ID (uno existente y otro no existente).
  console.log(existingProduct.getProductById(1));
  console.log(existingProduct.getProductById(3));

// Agregar un producto con un código que ya está en uso.
  existingProduct.addProduct(
      "Producto de ejemplo 3",
      "Esto es un ejemplo",
      10000,
      "Sin imagen",
      "abc123",
      10000
  );
} catch (error) {
  console.error(error.message);
}

try {
// Agregar un nuevo producto sin proporcionar todos los campos requeridos.
  existingProduct.addProduct(
      "Producto de ejemplo 4",
      "Esto es otro ejemplo",
      10,
      "Sin imagen"
  );
} catch (error) {
  console.error(error.message);
}