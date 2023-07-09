/*
Qué es una variable y para qué sirve?

Es un espacio reservado en memoria que nos permite almacenar información. Podemos almacenar diferentes tipos de datos para usarlos en nuestro código. En JS existe tres formas de crear una variable var, let, const. en ES6 nacen let & const que son variable de tipo scope y esto quiere decir que dependiendo del scope es su accesibilidad.
*/

//------------funciones
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
//My solution
function presentation(name, lastName, nickName){
  return console.log(`Mi nombre completo es ${name} ${lastName}, pero prefiero que me digas ${nickName}.`);
}
presentation("Camilo", "Saavedra", "cisaa");


//------------------- condicionales
// cambiar case por sentencias por condicionales
const tipoDeSuscripcion = "Basic";
switch (tipoDeSuscripcion) {
case "Free":
       console.log("Solo puedes tomar los cursos gratis");
break;
case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
break;
case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
break;
case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
break;
}
//My solution
const tipoDeSuscripcion1 = "Basic";
if (tipoDeSuscripcion1 == "Free") {
	console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion1 == "Basic") {
	 console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion1 == "Expert") {
	 console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion1 == "ExpertPlus") {
	 console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
	 console.log("No tienes ninguna suscripción");
}



// cambiar por un solo if
let typeSuscripción = [
    "Free",
    "Basic", 
    "Expert", 
    "ExpertPlus"
    ];
    let infoSuscripción = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
    let userSuscription = "Expert";
    for (let i=0; i < typeSuscripción.length; i++) {
      if (userSuscription == typeSuscripción[i]) {
          console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
      }
    }




// -------------------------ciclos
//cambiar for por while
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
//My Solution
let i = 0;
while (i < 5) {
  i++;
  console.log(`El valor de i es: ${i}`)
}
let i2 = 10;
while (i2 >= 2) {
  i2--;
  console.log(`El valor de i es: ${i2}`)
}

//preguntar por suma
//Basic Math Quiz
let num = 10;
let num2 = 10;
const result = num + num2;
let questions = {
  q1: `Cuanto es ${num} + ${num2}`
}
function Quizzer() {
  let userInput = prompt(questions.q1);
  if (userInput == result) {
    alert("Felicitaciones, respondiste correctamente el desafio 😎");
  } else {
    alert("lamentablemente, tu respuesta es incorrecta, sigue practicando ❌!");
  }
}
Quizzer();


//------------------- listas - arrays
//-----imprimir el primer elemento de u array
let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
function readArray(array){
	console.log(array[0])
}
readArray(myArray);

//-----imprimir todos los elementos de un array
let myArray2 = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
function readArray(array){
	for(var i = 0; i < array.length;i++){

        console.log(array[i])
    }
}
readArray(myArray2);

//-----imprimir todos los elementos de un objeto

//let myObject = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
var myObject = {
    nombre:"Bici", 
    costo:3000,

};

function readObject(object){

    for (let i in object){
        console.log(object[i]);
    }
}
readObject(myObject);