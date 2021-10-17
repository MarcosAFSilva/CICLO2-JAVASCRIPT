window.onload = function(){
    
    
    let dadosCep = async function (cep){
        let busca = cep.value;
        let url = `http://viacep.com.br/ws/${Number(busca)}/json/` ;
        try {
            let dadosFetch = await fetch(url, {
                mode: 'no-cors',
                credentials: 'include'
              });
            let dadosJson = await dadosFetch.json();
            console.log('dadosJson');
        } catch (error){
            alert(error);
        }
        
    }
    
    
const cep = parseInt(document.getElementById('cep').value);
const logradouro = document.getElementById('logradouro').value;
const bairro = document.getElementById('bairro').value;
const cidade = document.getElementById('cidade').value;
const uf = document.getElementById('uf').value;
const botao = document.getElementById('botao');
botao.addEventListener('click', dadosCep);





}

function resultadoBusca(dadosBusca){
    for( let dado in dadosBusca ){
        if(document.querySelector(`#rua`)){
            document.querySelector(`#rua`).value = dadosBusca;
        } else {
            alert('Cep não encontrado');
        }
        
    }
}





