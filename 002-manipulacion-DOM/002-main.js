const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('btnCalcular');
const pResult = document.querySelector('#result')

function btnOnClick(){
    console.log('clic en el boton');
    //Using the Number() function: The Number() function can be used to convert a string, a boolean, or an object to a number. To convert an input.value to a number
    let x = Number(input1.value);
    //Using the parseInt() function: The parseInt() function can be used to convert a string to an integer. To convert an input.value to an integer, you can use the following code:
    let y = parseInt(input2.value, 10);
    
    const sumaInputs = x + y;

    pResult.innerText = "Resultado: " + sumaInputs;
    //console.log(input1.value + input2.value);
    //console.log(x + y);
}