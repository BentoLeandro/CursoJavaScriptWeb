var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //retira os eventos padrões do botão...

    var form = document.querySelector("#form-adiciona");
    var paciente = retornaDadosFormulario(form);

    var erros = validaPaciente(paciente);

    var msgErro = document.querySelector("#msg-erro");
    msgErro.innerHTML = "";
     
    if(erros.length > 0){        
        //for(var i=0; i < erros.length; i++){
        //    var liErro = document.createElement("li");
        //    liErro.textContent = erros[i];
        //    msgErro.appendChild(liErro);
        //}
        erros.forEach(function(erro){
            var liErro = document.createElement("li");
            liErro.textContent = erro;
            msgErro.appendChild(liErro);
        });       
        return;
    }

    console.log(paciente);    

    var tabela = document.querySelector("#tabela-pacientes");
    
    var pacienteTr = adicionaLinhaTabela(paciente);

    tabela.appendChild(pacienteTr);

    form.reset(); //limpa os campos do formulario
    //console.log(pacienteTr);
});

function retornaDadosFormulario(form){
    var dadosPaciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)        
    }
    return dadosPaciente;
}

function adicionaLinhaTabela(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente){
    var erros = [];
    
    if(paciente.nome.length == 0){
        erros.push("O campo Nome precisa ser informado!");
    }
    
    if (!validaPeso(paciente.peso)) {        
        erros.push("Peso Inválido..");
    }    

    if(!validaAltura(paciente.altura)){
        erros.push("Altura Inválida..");
    }

    if(paciente.gordura.length == 0){
        erros.push("O campo Gordura precisa ser informado!");
    }
    return erros;
}