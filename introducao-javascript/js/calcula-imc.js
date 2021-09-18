function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso < 500){
        return true;
    }else{
        return false;
    }

}

function validaAltura(altura){
    if (altura > 0 && altura < 4.00){
        return true;
    }else{
        return false;
    }
}

var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);


for(i=0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);    

    if (!pesoValido){
        console.log("Peso inválido...");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        //paciente.style.backgroundColor = "red";
        //paciente.style.color = "white";
        paciente.classList.add("paciente-invalido");        
    }

    if(!alturaValida){
        console.log("Altura inválida...");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        //paciente.style.backgroundColor = "red";
        //paciente.style.color = "white";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
        //paciente.querySelector(".info-imc").textContent = imc;    
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

var titulo = document.querySelector(".titulo");

//    função anonima
titulo.addEventListener("click", function(){
    console.log("outra maneira de utilizar a function...")
});

//  função nomeada...
//titulo.addEventListener("click", mostrarMensagem);
function mostrarMensagem(){
    console.log("Olá eu fui clicado!");
}


titulo.addEventListener("click", mostrarMensagem);
