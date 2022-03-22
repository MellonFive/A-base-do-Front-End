/*
Quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

Para isso vamos precisar trabalhar com dois elementos:
1 - Listagem
2 - Cartão do pokemon

Precisamos criar duas variáveis no JS para trabalhar  com os elementos da tela.

Vamos precisar trabalhar  com um evento de clique feito pelo usuário na listagem de pokemon.

- Remover a classe aberto só do cartão que está aberto.
- Ao clicar em um pokemon da listagem, pegamos o id desse pokemon para saber qual cartão mostrar.
- Remover a classe ativo que marca o pokemon selecionado
- Adicionar a classe ativo no item da lista selecionado
*/

// Precisamos criar duas variáveis no JS para trabalhar  com os elementos da tela.
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
console.log(pokemonsCard)

listaSelecaoPokemons.forEach(pokemon => {
    // Vamos precisar trabalhar  com um evento de clique feito pelo usuário na listagem de pokemon.
    pokemon.addEventListener('click', () => {
        //- Remover a classe aberto só do cartão que está aberto.
    })
})