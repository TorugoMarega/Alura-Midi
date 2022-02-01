const tecla_pom = document.querySelector(".tecla_pom");
const som_tecla_pom = document.querySelector("#som_tecla_pom");


const listaTeclas = document.querySelectorAll('.tecla')



function tocaSom(seletorAudio){

   const elemento = document.querySelector(seletorAudio);
   
   if (elemento && elemento.localName === 'audio'){
        elemento.play()
   }

   else{
    console.log("Elemento não encontrado")
   }


}

for(let i=0; i<listaTeclas.length; i++){
    const tecla = listaTeclas[i];
    const instrumento = listaTeclas[i].classList[1];

    const idAudio = `#som_${instrumento}`;  //template string


    tecla.onclick = function (){    //função anonima
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {

        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}


