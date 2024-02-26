# Product Manager

Este código es la version corregida del trabajo anteriormente entregado. A continuación, se presentan los cambios.

## Correcciones del tutor.

- "Variables como contadores, enums o similares son preferibles que no formen parte de la construcción del objeto, ya que no suman como información, sino que forman parte de la lógica. Por lo general, quedan fuera del objeto, siendo posible utilizarlos una vez se extiende o implementa la clase."

- "Respecto a las validaciones, siempre es útil, si son extensas, que las maneje una función aparte, esto hará tu código más limpio."

## Explicación de las modificaciones:

- Lógica de contadores y validaciones: En el código original, las variables idCounter y requiredFields estaban dentro del constructor, lo que las hacía parte del estado del objeto ProductManager. En el código modificado, se han movido las validaciones de campos requeridos a un método separado validateRequiredFields() y el cálculo del siguiente ID disponible a un método separado getNextId(). Esto separa la lógica de contadores y validaciones de los datos almacenados en el objeto y hace que el código sea más modular y fácil de mantener.

- Mejor manejo de errores: En el código original, las validaciones y el manejo de errores estaban mezclados en el método addProduct(). En el código modificado, se han externalizado las validaciones de campos requeridos a un método separado validateRequiredFields(). Esto hace que el código sea más limpio y fácil de entender, ya que cada función tiene una responsabilidad clara.

- Refactorización del cálculo del ID: En el código original, el ID se calculaba dentro del método addProduct() utilizando un contador idCounter. En el código modificado, se ha refactorizado el cálculo del ID a un método separado getNextId(), que simplemente devuelve la longitud del array de productos más uno. Esto hace que el código sea más claro y elimina la necesidad de mantener un contador separado.

## Conclusión: 
En resumen, las modificaciones realizadas al código original del ProductManager se centraron en mejorar la modularidad, la claridad y la robustez del código, lo que facilita su mantenimiento y extensión en el futuro al separar la lógica de contadores y validaciones en funciones independientes, externalizar las validaciones requerimientos a una función separada y refactorizar el cálculo del ID.