var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  var resultado = document.getElementById("resultado");

  
  
    if (chute == numeroSecreto) {
      resultado.innerHTML = "Parabéns, você acertou!";
     
    } else if (chute > 10 || chute < 0) {
      resultado.innerHTML = "Por favor, insira um valor de 0 a 10.";
      
    } else if (chute > numeroSecreto) {
      resultado.innerHTML = `Infelizmente você errou! O número secreto é menor que ${chute}.`;
      
    } else if (chute < numeroSecreto) {
      resultado.innerHTML = `Infelizmente você errou! O número secreto é maior que ${chute}.`;
      
    } else {
      resultado.innerHTML = "Por favor, digite um número.";
  }
  
}
