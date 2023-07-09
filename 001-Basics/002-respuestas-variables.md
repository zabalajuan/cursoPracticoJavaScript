## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayorÃ­a) NO SON ABSOLUTAS. Es completamente vÃ¡lido (en la mayorÃ­a de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la secciÃ³n de comentarios del curso. :D


## Variables y operaciones

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es una variable y para quÃ© sirve?

Cajtas (espacios en memoria) donde podemos guardar informaciÃ³n (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- Â¿CuÃ¡l es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- Â¿CuÃ¡l es la diferencia entre sumar nÃºmeros y concatenar strings?
- Â¿CuÃ¡l operador me permite sumar o concatenar?

EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar nÃºmeros cuando lo usamos con nÃºmeros. Pero cuando los strings, lo que hace es unir (concatenar, asÃ­ se dice) ambos strings.

### 2ï¸âƒ£ Determina el nombre y tipo de dato para almacenar en variables la siguiente informaciÃ³n:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: string (@fulanito)
- Edad: number
- Correo electrÃ³nico: string (lala@gmail.com)
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3ï¸âƒ£ Traduce a cÃ³digo JavaScript las variables del ejemplo anterior y deja tu cÃ³digo en los comentarios.

```
let nombre = 'Juan David';
let apellido = 'Catro Gallego';
let username = 'juandc';
let edad = 19;
let mail = 'juanito@alcachofa.xyz';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;
```

### 4ï¸âƒ£ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```


