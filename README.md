# Entrega 2 

# Reactividad en Vue 3

**Funciones reactive y ref / computed y watch**

**Ejemplo Reactive**
 - useCounter devuelve una referencia reactiva (count) y una función (increment) para incrementar el contador.

**Ejemplo Ref**
 - useUser devuelve un objeto reactivo (user) que contiene información del usuario y una función (updateUser) para actualizar esa información.

En ambos casos, el hook setup se utiliza para exponer los datos y funciones necesarios al componente de Vue.
En el ejemplo de useUser, se utiliza watchEffect para observar los cambios en el objeto user y mostrarlos en la consola cada vez que se actualiza.

**Ejemplo computed**
  
Para este ejemplo: 
  - suma es una propiedad computada que calcula la suma de num1 y num2.
  - Los valores de num1 y num2 se pueden cambiar mediante dos inputs.
  - La suma se muestra en el párrafo debajo de los inputs y se actualizará automáticamente cada vez que cambien num1 o num2.

**Ejemplo watch**
  
Para este ejemplo: 
  - Se muestra un nombre en un párrafo.
  - El input permite cambiar el nombre.
  - Se utiliza un watcher para observar cambios en nuevoNombre y actualizar automáticamente nombre cuando nuevoNombre cambia.

# Reactividad en Svelte

- **Ejemplo 1**
     - En este ejemplo, count es una variable reactiva. Cuando se hace clic en el botón, se llama a la función increment() que aumenta count en 1. Como count cambia, Svelte automáticamente actualiza la interfaz de usuario para reflejar el nuevo valor.

- **Ejemplo 2**
     - En este ejemplo, color es una variable reactiva que controla el color de la caja. Al hacer clic en la caja, se llama a la función changeColor() que alterna entre rojo y azul. Como color cambia, Svelte actualiza automáticamente el color de fondo de la caja.
