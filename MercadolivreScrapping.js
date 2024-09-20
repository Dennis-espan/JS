// O seguinte comando deve ser usado em https://www.mercadolivre.com.br/
// O mesmo busca por produtos na pagina inicial e retornas seus preços desde que sejam menores que 300R$

const produto=document.querySelectorAll('.andes-money-amount.andes-money-amount--cents-superscript');

// Filtra e exibe os preços abaixo de 300R$
produto.forEach(pspan => {
    let ptexto = pspan.textContent.trim(); // Remove espaços em branco
    let preco = parseFloat(ptexto.replace('R$', '').replace('.', '').replace(',', '.').trim()); // Formata o preço

    if (preco < 300) {
        console.log(pspan); // Exibe o elemento
        console.log(ptexto); // Exibe o conteúdo do elemento (no caso o preço)
    }
});

// Abaixo eu repito o codigo mas para o site joiasprime.com.br, porém eu puxo o card do produto antes de puxar o preço

const produtos = document.querySelectorAll('.product-card');

produtos.forEach(produto => {
    let precoParaTexto = produto.querySelector('.product-card__price-to');
    let ptexto = precoParaTexto.textContent.trim();
    let preco = parseFloat(ptexto.replace('R$', '').replace('.', '').replace(',', '.').trim());
    let nomeProduto = produto.querySelector('.product-card__title').textContent.trim();
        
            if (preco < 600) {
            console.log(`Produto: ${nomeProduto}`);
            console.log(`Preço: ${ptexto}`);
      
    }
});

