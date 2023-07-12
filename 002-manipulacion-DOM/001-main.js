//console.log('Hello, world 2')

// h1 {color:red} así seria en CSS
// .parrafito {...}
// #pid {...}
const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p'); //selecciona todos los elementos p
const parrafito = document.getElementsByClassName('.parrafito');
//const pid = document.querySelector('#pid');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1);
console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

// este permite modificar el html, no es seguro, se puede meter codigo
//malicioso
h1.innerHTML = 'Ëstamos Cambiando <br> con javaScript';
//lo lee solo como mtexto
h1.innerText = 'Ëstamos Cambiando <br> con javaScript';

//console.log(h1.getAttribute('pantalla'));
console.log(h1.getAttribute('class'));
// cambiar el valor de un atributo
//h1.setAttribute('class', 'rojo');
console.log(h1.getAttribute('class'));

//agregar una clase
h1.classList.add('rojo')
//eliminar una clase

h1.classList.remove('verde')
//console.log(h1.classList.toggle('verde'));
console.log(h1.classList.contains('verde'));

input.value = "nuevo valor"


console.log(document.createElement('img'));

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
console.log(img);

pid.innerHTML =""
pid.appendChild(img);