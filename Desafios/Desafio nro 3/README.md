# Product Manager

### Documentación del Proyecto: Product Manager.

---

#### Resumen:
El Gestor de Productos es una aplicación de gestión de productos desarrollada en Node.js y Express.js que proporciona una interfaz de programación de aplicaciones (API) para realizar operaciones básicas de Crear, Leer, Actualizar y Eliminar (CRUD) en una lista de productos. La aplicación utiliza un archivo JSON para almacenar los datos de los productos y ofrece una serie de rutas que permiten interactuar con estos datos.

#### Estructura del Proyecto:
El proyecto consta de los siguientes archivos:

1. **app.js**: Punto de entrada de la aplicación que define las rutas y configura el servidor Express.
2. **productManager.js**: Contiene la lógica para agregar, obtener, actualizar y eliminar productos.
3. **products.json**: Archivo de datos que contiene una lista de productos en formato JSON.

#### Funcionalidades Principales:
La aplicación ofrece las siguientes funcionalidades:

- **Agregar Productos**: Permite agregar nuevos productos al archivo JSON.
- **Obtener Lista de Productos**: Proporciona una lista de todos los productos almacenados.
- **Obtener Producto por ID**: Permite recuperar un producto específico mediante su identificador único (ID).
- **Actualizar Producto**: Permite actualizar la información de un producto existente.
- **Eliminar Producto**: Permite eliminar un producto del archivo JSON.

#### Tecnologías Utilizadas:
- **Node.js**: Entorno de ejecución de JavaScript que permite ejecutar código JavaScript fuera de un navegador web.
- **Express.js**: Marco de aplicación web para Node.js que simplifica el desarrollo de aplicaciones web y APIs.
- **fs (File System)**: Módulo de Node.js que proporciona funciones para trabajar con el sistema de archivos del sistema operativo.
- **JSON**: Formato de intercambio de datos ligero utilizado para el almacenamiento de los productos.

#### Despliegue y Ejecución:
Para ejecutar la aplicación, sigue estos pasos:

1. Clona el repositorio del proyecto desde GitHub.
2. Abre una terminal en el directorio del proyecto.
3. Instala las dependencias ejecutando `npm install`.
4. Inicia el servidor ejecutando `npm run dev`.
5. Accede a la aplicación a través de un navegador web en `http://localhost:8080`.

#### Rutas de la Aplicación:
La aplicación define las siguientes rutas:

- **GET /**: Ruta principal que muestra un saludo y proporciona instrucciones para acceder a la lista de productos.
- **GET /products**: Ruta que devuelve una lista de todos los productos almacenados.
- **GET /products/:pid**: Ruta que devuelve un producto específico según su ID.
- **POST /products**: Ruta para agregar un nuevo producto.
- **PUT /products/:pid**: Ruta para actualizar un producto existente.
- **DELETE /products/:pid**: Ruta para eliminar un producto.

#### Consideraciones Adicionales:
- La aplicación utiliza el middleware `express.urlencoded` para analizar datos de formulario enviados en las solicitudes HTTP.
- Se utiliza el paquete `nodemon` para reiniciar automáticamente el servidor cuando se realizan cambios en el código.

---

Esta documentación proporciona una visión general del proyecto Gestor de Productos, incluyendo su estructura, funcionalidades principales, tecnologías utilizadas, despliegue y ejecución, rutas de la aplicación y consideraciones adicionales.
