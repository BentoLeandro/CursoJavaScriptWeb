var btnBuscar = document.querySelector("#buscar-paciente");

btnBuscar.addEventListener("click", function(event){
    event.preventDefault(); //retira os eventos padrões do botão...
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes1111");
    console.log("teste.....");
    
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            var resposta = xhr.responseText;    
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                adicionaPacienteTabela(paciente);
            });
        }else{
            var erroAjax = document.querySelector("#erro-ajax");
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }     
    });

    xhr.send();
});