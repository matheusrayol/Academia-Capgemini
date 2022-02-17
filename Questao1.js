// Matheus Rayol Ferreira
// 1. Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.

// Função escada
function escada(n) {
    // Inicialização de variáveis
    let linha = '';
    let espaco = '';

    // Loop para criação da linha e espaços
    for (let i = 0; i < n; i++) {
        linha += '*';
        espaco = ' '.repeat(n - i - 1);
        // Imprime as linhas enquanto a o valor de i for menor que o valor de n, respeitando a necessidade de espaços.
        console.log(espaco + linha);
    }
}

// Chamada da função para conferência
escada(6)