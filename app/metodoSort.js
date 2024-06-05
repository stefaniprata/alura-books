let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdernarPorPreco.addEventListener('click', ordernarPorPreco);

function ordernarPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}