// Matheus Rayol Ferreira

// Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma palavra podem ser realocadas para formar a outra palavra. Dada uma string qualquer, desenvolva um algoritmo que encontre o número de pares de substrings que são anagramas.

// Função para obtenção das substrings
function obterSubstrings(string) { // Inicialização das variáveis
    let i,
        j,
        resultado = [];

    // Percorre a string para obter todas as substrings
    for (i = 0; i < string.length; i++) {
        for (j = i + 1; j < string.length + 1; j++) {
            resultado.push(string.slice(i, j))
        }
    }
    return resultado
}

// Função para verificar se uma substring é anagrama de outra substring
function verificaPorAnagrama(string1, string2) { // Inicialização das variáveis
    const historico = {}

    // Verifica se as strings possuem o mesmo tamanho
    for (let i = 0; i < string1.length; i++) {
        const letra = string1[i]
        if (historico[letra]) {
            historico[letra]++
        } else {
            historico[letra] = 1
        }
    }

    for (let j = 0; j < string2.length; j++) {
        const letra = string2[j]
        if (historico[letra]) {
            historico[letra]--
        } else {
            return false
        }
    }

    // Verifica se todas as letras foram contabilizadas
    return true
}

// Função para realizar a contagem dos anagramas encontrados
function contarAnagramas(indiceAtual, array) { // Inicialização das variáveis
    const elementoAtual = array[indiceAtual]
    const arrayRest = array.slice(indiceAtual + 1)
    let contador = 0

    // Percorre o array para verificar se o elemento atual é anagrama de algum elemento do array
    for (let i = 0; i < arrayRest.length; i++) {
        if (elementoAtual.length === arrayRest[i].length && verificaPorAnagrama(elementoAtual, arrayRest[i])) {
            contador++
        }
    }

    // Retorna o contador
    return contador
}

// Função principal
function localizarPares(string) {
    const contadorDuplicados = string.split('').filter((v, i) => string.indexOf(v) !== i).length

    if (! contadorDuplicados) 
        return 0

    

    let contadorAnagramas = 0

    const array = obterSubstrings(string)

    for (let i = 0; i < array.length; i++) {
        contadorAnagramas += contarAnagramas(i, array)
    }

    // Retorna o número de pares de anagramas encontrados
    return contadorAnagramas
}

// Validação da função principal com os exemplos no enunciado
console.log(localizarPares('ovo'))
console.log(localizarPares('ifailuhkqq'))
