# Product Manager

Este código utiliza una clase ProductManager para realizar gestion de productos. A continuacion se detalla una lista de las funciones principales:

## Funcionalidades:

- Agregar o eliminar productos especificando título, descripción, precio, imagen, código y stock.
- Obtener todos los productos almacenados.
- Obtener un producto por su código único.
- Obtener un producto por su ID único.
- Actualizar un producto existente.

## Explicación línea por línea:

- Se importa el módulo fs (FileSystem) para la manipulación de archivos en Node.js.

- Se define la clase ProductManager, que tiene los siguientes métodos y propiedades:
constructor(filePath): Inicializa la instancia de ProductManager con la ruta del archivo donde se guardarán los datos de los productos, un array para almacenar los productos y carga los productos desde el archivo al inicializar una instancia.
loadProducts(): Carga los productos desde el archivo.
saveProducts(): Guarda los productos en el archivo.
addProduct(product): Agrega un nuevo producto.
getProducts(): Obtiene todos los productos.
getProductById(id): Obtiene un producto por su ID.
updateProduct(id, updatedFields): Actualiza un producto.
deleteProduct(id): Elimina un producto.
getNextId(): Obtiene el siguiente ID disponible para un nuevo producto.

- Se crea una instancia de ProductManager y se utiliza para realizar algunas operaciones de ejemplo, como agregar, obtener, actualizar y eliminar productos.

- Se imprime en la consola los resultados de las operaciones de ejemplo.

## Conclusión: 

En resumen, este código proporciona una forma de administrar productos almacenados en un archivo JSON utilizando Node.js, con operaciones básicas como agregar, obtener, actualizar y eliminar productos.