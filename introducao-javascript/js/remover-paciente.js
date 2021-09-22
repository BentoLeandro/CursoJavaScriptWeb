var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");
tabela.addEventListener("click", function(event){
    //event.target retorna o filho que foi clicado. target = alvo.
    var alvoEvento = event.target; //td = celula da tabela.
    var PaiDoAlvo = alvoEvento.parentNode; // tr = a linha da tabela.
    if(alvoEvento.tagName == "TD"){    
        PaiDoAlvo.classList.add("fadeOut");
        setTimeout(function(){
            PaiDoAlvo.remove();
        }, 500);
    }
});

/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        //console.log("fui clicado com o duplo clique...");
        this.remove(); //this é o paciente que está executando a function. como o self no python
    });
});
*/
