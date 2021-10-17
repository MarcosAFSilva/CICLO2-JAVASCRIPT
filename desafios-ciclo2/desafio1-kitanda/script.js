window.onload = function(){
    let valorTotal = 0;

    const precoProdutos = [{nome: "Maça", preco: 3.90}, {nome: "Banana", preco: 1.70}, {nome: "Abacaxi", preco: 4.10}, {nome: "Melão", preco: 3.40}];
    precoProdutos.forEach(produto => {
        const elemento = document.createElement('li');
        elemento.innerHTML = produto.nome;
        document.getElementById("produtos").appendChild(elemento);
        
    } )

    const produtos = document.querySelectorAll("#produtos > li");
    produtos.forEach(li => {
        li.addEventListener('click', inserirProdutoNaCesta);
    })

    function inserirProdutoNaCesta(produto){
        const elementosDaCesta = document.querySelectorAll("#cestaDoCliente > li")
        for (el of elementosDaCesta){
            if(el.innerHTML == produto.target.innerHTML){
                alert("O PRODUTO JÁ ESTÁ NA CESTA");
                return
            } 
        }
        const elemento = document.createElement('li');
        elemento.innerHTML = produto.target.innerHTML;
        elemento.addEventListener('click', removerProdutoDaCesta)
        document.getElementById("cestaDoCliente").appendChild(elemento);
        mostrarTotal(produto.target.innerHTML, true);
    }


    function removerProdutoDaCesta(produto){
        produto.target.remove();
        mostrarTotal(produto.target.innerHTML, false);        
    }


    function mostrarTotal(nomeProduto, isSomar){
        const mostraTotalCompra = document.getElementById("mostraTotalCompra");
        const produtoFinal = precoProdutos.find(produto => produto.nome == nomeProduto);
        if(isSomar){
        valorTotal = Number(valorTotal) + produtoFinal.preco;
        } else {
        valorTotal = Number(valorTotal) - produtoFinal.preco;
        }

        mostraTotalCompra.value = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }



}