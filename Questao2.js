// Matheus Rayol Ferreira

// 2. Débora se inscreveu em uma rede social para se manter em contato com seus amigos. A página de cadastro exigia o preenchimento dos campos de nome e senha, porém a senha precisa ser forte. O site considera uma senha forte quando ela satisfaz os seguintes critérios:
// a. Possuir no mínimo 6 caracteres.
// b. Contém no mínimo 1 dígito.
// c. Contém no mínimo 1 letra em minúsculo.
// d. Contém no mínimo 1 letra em maiúsculo.
// e. Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+
// Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza se é uma senha forte. Para ajudar débora, construa um algoritmo que informe qual é o número mínimo de caracteres que devem ser adicionados para uma string qualquer ser considerada segura.

function validarSenha(string) {
    // Inicialização de variáveis
    // Constante com expressão regular contendo os parâmetros necessários para a senha ser considerada segura.
    const senhaSegura = 6;
    const expressao = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()-+])[A-Za-z\d!@#$%^&*()-+]{6,}$/;

    // Verifica se a string passada como parâmetro atende ao padrão definido na expressão regular.
    switch (expressao.test(string)) {
        // Caso a senha seja segura exibe a informação no console. Esta etapa é opcional, já que não havia necessidade de informá-la de acordo com o enunciado.
        case true:
            return "A senha é segura.";
        // Caso a senha não seja segura
        case false:
            // Verifica se a senha possui o número mínimo de caracteres necessários para ser considerada segura.
            if (string.length < senhaSegura) {
                // Caso não possua, exiba quantos caracteres a mais são necessários para que a senha seja considerada segura.
                return senhaSegura - string.length;
            } else {
                // Caso a senha possua o mínimo de caracteres e ainda assim não seja considerada segura, exiba a mensagem informando os requisitos para a senha.
                return "A senha não é segura.\nSenha segura: no mínimo 6 caracteres, contento um número, uma letra maiscula, uma letra minuscula e um caractere especial.";
            }
    }

}

// Validação de resultados

// Senha com quantidade de caracteres suficiente, mas sem atender aos requisitos.
console.log(validarSenha('123456789'));

// Senha sem a quantidade de caracteres mínimos necessários.
console.log(validarSenha('12345'));

// Senha com quantidade de caracteres suficiente e atendendo a todos os critérios.
console.log(validarSenha('@D210fa0'));
