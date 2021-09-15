var titulo = document.querySelector(".titulo");
titulo.textContent = "Teste do Titulo alterado...";

var paciente = document.querySelector("#primeiro");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

var imc = peso / (altura * altura);

if (peso < 0 || peso > 500){
    console.log("Peso inválido...");
    pesoValido = false;
    tdImc.textContent = "Peso inválido!"
}

if(altura < 0 || altura > 4.00){
    console.log("Altura inválida...");
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
}

if(pesoValido && alturaValida){
    //paciente.querySelector(".info-imc").textContent = imc;    
    tdImc.textContent = imc;
}

console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(altura);
console.log(imc);