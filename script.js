
var numeroSorteado;
var pontos = 0;

function escolherDificuldade(){

  //pegando grupo de radiobox pelo name
  let dificuldadeSelecionada = document.getElementsByName('dificuldade');
  let numeroTentativas = document.querySelector('.numero-tentativas');

  for (var i = 0; i < dificuldadeSelecionada.length; i++){

    if(dificuldadeSelecionada[i].checked){
      
      console.log(dificuldadeSelecionada[i].value);

      if(dificuldadeSelecionada[i].value == "facil"){

        tentativas = 5;
        numeroSorteado = parseInt(Math.random()*10 + 1);

      } else if(dificuldadeSelecionada[i].value == "medio"){

        tentativas = 7;
        numeroSorteado = parseInt(Math.random()*20 + 1);
      
      } else{

        tentativas = 10;
        numeroSorteado = parseInt(Math.random()*40 + 1);
        
      }
      numeroTentativas.innerHTML = tentativas;
      break;

    }
        
  }

  console.log(numeroSorteado);

}

function chutar(){

  let inputValor = parseInt(document.getElementById('inputValor').value);
  let resultado = document.getElementById('resultado');
  let numeroTentativas = document.querySelector('.numero-tentativas');

  for (tentativas ; tentativas > 0; ) {
    
    if(inputValor == numeroSorteado){

      //soma pontos ao acertar
      pontos ++
      document.getElementById('pontos-numero').innerHTML = pontos;
      
      resultado.innerHTML = 'Muito bem! Você descobriu o número secreto';
      
      mostrarBotao();        
      
    } else{

      //A cada erro as tentativas diminuem
      tentativas--;

      //Mostra tentativas
      numeroTentativas.innerHTML = tentativas;

      if(tentativas > 0){

        //Dicas do número ser maior ou menor
        if( inputValor < numeroSorteado ){
        resultado.innerHTML = 'Dica: o número é maior';

        } else{

          resultado.innerHTML = 'Dica: o número é menor';

        }
      }else{

        resultado.innerHTML = 'Poxa você não acertou :( O número era: ' + numeroSorteado;

        mostrarBotao();
  
        break;

      }

    }
    
    break;

  }
  
}

function reset(){

  escolherDificuldade();
  document.getElementById('inputValor').value = "";
  document.getElementById('resultado').innerHTML = "";
  mostrarBotao();
 
}

function mostrarBotao(){
  
  var botaoReset = document.getElementById('reset');

  if(botaoReset.style.display == "block" ){

    botaoReset.style.display = "none";

  } else{

    botaoReset.style.display = "block";

  }
  
}