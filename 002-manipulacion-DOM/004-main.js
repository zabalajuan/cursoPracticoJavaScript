const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

//Tiene dos parametros
//Parametro 1: el evento que queremos escuchar
//Parametro 2: El código a ejecutar
// no es necesario poner el parentesis del metodo en el parametro 2
form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    console.log('clic en el boton');
    console.log(event);
    //evita que se ejecute el recargado de la pagina
    //el formulario, toma el ultimo boton del form como un submit
    //la propiedad del evento defaultPrevented pasa a ser true
    event.preventDefault();
    //Using the Number() function: The Number() function can be used to convert a string, a boolean, or an object to a number. To convert an input.value to a number
    let x = Number(input1.value);
    //Using the parseInt() function: The parseInt() function can be used to convert a string to an integer. To convert an input.value to an integer, you can use the following code:
    let y = parseInt(input2.value, 10);
    
    const sumaInputs = x + y;

    pResult.innerText = "Resultado: " + sumaInputs;
    //console.log(input1.value + input2.value);
    //console.log(x + y);
}


/* //Este comportamiento se puede cambiar, obligando al boton en el html a ser de tipo button
btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
    console.log('clic en el boton');
    console.log(event);
   //Using the Number() function: The Number() function can be used to convert a string, a boolean, or an object to a number. To convert an input.value to a number
    let x = Number(input1.value);
    //Using the parseInt() function: The parseInt() function can be used to convert a string to an integer. To convert an input.value to an integer, you can use the following code:
    let y = parseInt(input2.value, 10);
    
    const sumaInputs = x + y;

    pResult.innerText = "Resultado: " + sumaInputs;
    //console.log(input1.value + input2.value);
    //console.log(x + y);
} */