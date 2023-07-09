

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

Es una lista de elementos.

```js
const array = [1, 'jaja', true, false, { nombre: 'lala', edad: 3 }];
```

- ¿Qué es un objeto?

Es una lista de elementos PERO cada elemento tiene un nombre clave.

```js
const obj = {
  nombre: 'Fulanito',
  edad: 3,
  comidasFavoritas: ['Pollo frito', 'vegetales'],
};

//recorrer los elementos del objeto, sabiendo la sllaves y las claves
for (let i in obj){
    console.log(`${i} ${obj[i]}`)
}
```

- ¿Cuándo es mejor usar objetos o arrays?

Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demás (la regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Sí. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js
function imprimirPrimerElementoArray(arr) {
    console.log(arr[0])
}
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js
function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```
