# Los clientes satisfechos

Esta práctica implementa un control típico de reseñas sobre un producto o servicio. 
[Demo](https://js-beginners.github.io/testimonial-project/)

1. Asocia dos eventos clic a los botones. Comrprueba que funciona con console.log.
2. Debes acceder correctamente a la información de cada uno de los objetos. Intenta por ejemplo, mostrar por consola el nombre del primer testimonial. Está en la **posición 0** del array, y la propiedad se llama **name**
3. No tiene nada que ver con el ejercicio, pero para practicar: crea un bucle que muestre por consola el nombre de TODOS los __customers__
4. Ahora sí, implementa la lógica necesaria. Primero, muestra al cargar la página Web la información del primer testimonial en el HTML
5. Actualiza la información (texto, foto) cada vez que el usuario hace clic en una de las flechas.

### BONUS
1. Piensa en crear una función para que, dada la posición de un array, se encargue de actualizar el DOM con la información sobre el customer. Algo así como

```
function updateCustomerInfo(position) {
  // Actualizar textContent, src, etc. con el customer correspondiente a la posición 'position' del array.

}
```
