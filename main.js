function tocaSomPom(selectorAudio){
const elemento = document.querySelector(selectorAudio);
}

if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        conole.log('Elemento não encontrado ou selector inválido');
    }

}
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
      tocaSom(idAudio);
    }

 tecla.onkeydow = function (evento) { 

    if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.clasListi.add('ativa');
    }

}
 tecla.onketup = function () {
      tecla.classListi.remove9'ativa');
  }

}
