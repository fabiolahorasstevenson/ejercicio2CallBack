let inputNum1 = document.getElementById('num1');
let inputNum2 = document.getElementById('num2');
let btnSuma = document.getElementById('btnSumar');
let btnResta = document.getElementById('btnRestar');
let btnDiv = document.getElementById('btnDiv');
let btnMult = document.getElementById('btnMult');


document.getElementById('btnSumar').addEventListener('click', ()=> {
    console.log('Se ha hecho clic en el botón SUMAR');
    let suma = parseInt(inputNum1.value) +parseInt(inputNum2.value);
    console.log("El resultado es: "+suma);
    });
    
document.getElementById('btnRestar').addEventListener('click', ()=> {
    console.log('Se ha hecho clic en el botón RESTAR');
    let resta = parseInt(inputNum1.value) - parseInt(inputNum2.value);
    console.log("El resultado es: "+resta);
    });

document.getElementById('btnDiv').addEventListener('click', ()=> {
    console.log('Se ha hecho clic en el botón DIVIDIR');
    let div = parseInt(inputNum1.value) / parseInt(inputNum2.value);
    console.log("El resultado es: "+div);
    });

document.getElementById('btnMult').addEventListener('click', ()=> {
    console.log('Se ha hecho clic en el botón MULTIPLICAR');
    let mult = parseInt(inputNum1.value) * parseInt(inputNum2.value);
    console.log("El resultado es: "+mult);
    });