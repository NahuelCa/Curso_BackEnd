
const fs = require('fs');

class ProductManager {
    constructor(filePath) {
        this.path = "products.json"; // Ruta del archivo donde se guardarán los datos de los productos.
        this.products = []; // Inicializar un array para almacenar los productos.
        this.loadProducts(); // Cargar los productos desde el archivo al inicializar una instancia.
    }

// Cargar los productos desde el archivo.
    loadProducts() {
        try {
            const data = fs.readFileSync(this.path, 'utf8');
            this.products = JSON.parse(data); // Parsear los datos como JSON y asignarlos a this.products.
        } catch (error) {
            console.error('Error al cargar los productos:', error.message);
            this.products = []; // Si hay un error, establecer products como un array vacío.
        }
    }

// Guardar los productos en el archivo.
    saveProducts() {
        try {
            fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2)); // Escribir los productos en el archivo JSON.
        } catch (error) {
            console.error('Error al guardar los productos:', error.message);
        }
    }

// Agregar un nuevo producto.
    addProduct(product) {
        if (!this.isValidProduct(product)) {
            console.error('El producto proporcionado no es válido.');
            return;
        }
        product.id = this.getNextId(); // Asignar un ID único al producto.
        this.products.push(product); // Agregar el producto al array.
        this.saveProducts(); // Guardar los productos actualizados.
    }

// Validar producto.
    isValidProduct(product) {
        if (!product || typeof product !== 'object' || Array.isArray(product)) {
            return false;
        }
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            return false;
        }
        if (typeof product.price !== 'number' || product.price <= 0) {
            return false;
        }
        return true;
    }

// Obtener todos los productos.
    getProducts() {
        return this.products;
    }

// Obtener un producto por su ID.
    getProductById(id) {
        return this.products.find(product => product.id === id);
    }

// Actualizar un producto.
    updateProduct(id, updatedFields) {
        if (!this.isValidId(id)) {
            console.error('El ID proporcionado no es válido.');
            return false;
        }
        if (!this.isValidUpdatedFields(updatedFields)) {
            console.error('Los campos actualizados no son válidos.');
            return false;
        }
        const index = this.products.findIndex(product => product.id === id); // Encontrar el índice del producto con el ID.
        if (index !== -1) { 
            this.products[index] = {...this.products[index], ...updatedFields}; // Actualizar los campos del producto.
            this.saveProducts();
            return true;
        }
        console.error('No se encontró ningún producto con el ID proporcionado.');
        return false;
    }

// Validar ID.
    isValidId(id) {
        return typeof id === 'number';
    }

// Validar campos actualizados.
    isValidUpdatedFields(updatedFields) {
        if (!updatedFields || typeof updatedFields !== 'object' || Array.isArray(updatedFields)) {
            return false;
        }
        return true;
    }

// Eliminar un producto.
    deleteProduct(id) {
        if (!this.isValidId(id)) {
            console.error('El ID proporcionado no es válido.');
            return false;
        }
        const index = this.products.findIndex(product => product.id === id); // Encontrar el índice del producto con el ID especificado.
        if (index !== -1) {
            this.products.splice(index, 1); // Eliminar el producto del array.
            this.saveProducts(); // Guardar los productos actualizados en el archivo.
            return true;
        }
        console.error('No se encontró ningún producto con el ID proporcionado.');
        return false;
    }

// Obtener el siguiente ID disponible para un nuevo producto.
    getNextId() {
        return this.products.length > 0 ? Math.max(...this.products.map(product => product.id)) + 1 : 1; // Devolver el máximo ID + 1, o 1 si no hay productos.
    }
}

// Ejemplos de uso:
const productManager = new ProductManager('products.json');

// Agregar producto.
productManager.addProduct({
    title: 'Producto de ejemplo',
    description: 'Descripción del producto de ejemplo',
    price: 10.99,
    thumbnail: 'ruta/imagen.jpg',
    code: 'ABC123',
    stock: 100
});

// Obtener todos los productos.
const allProducts = productManager.getProducts();
console.log(allProducts);

// Obtener un producto por su ID.
const productById = productManager.getProductById(1);
console.log(productById);

// Actualizar producto.
const updated = productManager.updateProduct(1, { price: 15.99 });
console.log(updated);

// Eliminar producto.
const deleted = productManager.deleteProduct(1);
console.log(deleted);
