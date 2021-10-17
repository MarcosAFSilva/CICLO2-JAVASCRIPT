
window.onload = function(){
    const numero = document.querySelector("#nbr");
    const botao = document.querySelector("#button");
    const resposta = document.querySelector("#resultado");
    
    botao.addEventListener('click', function(){
        tabuada();
    });

    
    function tabuada(){
        let i = 0;
        let x = Number(numero.value);
       resposta.innerHTML += `<br> O número selecionado é ${x}`;
       do {
           i++;
        resposta.innerHTML += `<br> ${x} vezes ${i} é igual a ${x*i}`;
       } while (i<10);
    };
    


}