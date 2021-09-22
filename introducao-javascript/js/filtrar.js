var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    //console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    /*
    pacientes.forEach(function(paciente){
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        console.log(nome);
    });
    */
    if(this.value.length > 0){
        for(i=0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            console.log(this.value);
            if(nome != this.value){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        });
    }
});