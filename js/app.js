/*
function comprar() {
    
    // Recuperando os nomes dos ingressos e a quantidade digitada.
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    
    
    if (quantidade == 0 || isNaN(quantidade)) {
        alert('A quantidade deve ser maior que zero!');
        return;
    }
   // Comparando o ingresso selecionado.
    if (tipoDeIngresso == 'pista') {
        comprarPista(quantidade);
    } else if (tipoDeIngresso == 'superior') {
        comprarSuperior(quantidade);
    } else
        comprarInferior(quantidade);

       

    function comprarPista(quantidade) {
       let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
       if (quantidade > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
        } else{
            qtdPista = qtdPista - quantidade;
            document.getElementById('qtd-pista').textContent = qtdPista;
            alert('Compra realizada com sucesso!');
        }
    }

    function comprarSuperior(quantidade) {
        let comprarSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        if (quantiade > comprarSuperior) {
         alert('Quantidade indisponível para tipo superior');
         } else{
            comprarSuperior = comprarSuperior - quantidade;
             document.getElementById('qtd-superior').textContent = comprarSuperior;
             alert('Compra realizada com sucesso!');
         }
     }

     function comprarInferior(quantidade) {
        let comprarInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        if (quantidade > comprarInferior) {
         alert('Quantidade indisponível para tipo inferior');
         } else{
            comprarInferior = comprarInferior - quantidade;
             document.getElementById('qtd-inferior').textContent = comprarInferior;
             alert('Compra realizada com sucesso!');
         }
        
     }
    
    }
    */

  function comprar() {
    let numero = parseInt(prompt('Digite um número'));
    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            alert(`${numero} é par`);
        } else {
            alert(`${numero} é impar`);
        }
    } else {
        alert( 'Por favor digite um numero válido');
    }
  }
  
 comprar();