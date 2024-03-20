# Primer pre entrega del proyecto final.

### Documentación del Proyecto: Ecommerce, Gestor de Productos y Carritos.

---

#### Resumen:

Este proyecto consiste en una aplicación de gestión de productos y carritos de compra desarrollada utilizando Express.js en Node.js. Permite a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en productos y carritos, así como agregar productos a los carritos existentes. La aplicación utiliza archivos JSON para almacenar la información de productos y carritos.

#### Estructura del Proyecto:

El proyecto está estructurado en varios archivos y carpetas:

- app.js: Punto de entrada de la aplicación donde se configuran las rutas y se inicia el servidor.
- productmanager.js: Define la clase ProductManager para gestionar los productos.
- cartmanager.js: Define la clase CartManager para gestionar los carritos de compra.
- products.router.js: Define las rutas relacionadas con los productos.
- carts.router.js: Define las rutas relacionadas con los carritos.
- products.json: Archivo JSON que almacena la información de los productos.
- carts.json: Archivo JSON que almacena la información de los carritos de compra.
- package.json: Archivo de configuración del proyecto que incluye dependencias y scripts.

#### Funcionalidades Principales:

- Crear, leer, actualizar y eliminar productos.
- Obtener la lista de productos.
- Agregar productos a los carritos de compra.
- Obtener detalles de un carrito de compra específico.

#### Tecnologías Utilizadas:

- Node.js
- Express.js
- JSON
- NPM (Node Package Manager)

#### Despliegue y Ejecución:

- Clonar el repositorio desde GitHub.
- Instalar las dependencias ejecutando npm install.
- Ejecutar la aplicación utilizando el comando npm run dev.