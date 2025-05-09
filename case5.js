/*
5 - Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function inverterString(s) {
    let sInvertida = "";
    for (let i = s.length - 1; i >= 0; i--) {
        sInvertida += s[i];
    }
    return sInvertida;
}

//Defina uma string para a verificação
let entrada = "Thiago";
console.log("String invertida: " + inverterString(entrada));

// A função inverterString percorre a string de trás para frente e vai concatenando os caracteres na variável sInvertida.
// O resultado aparece no console.
// Resultado para a string "Thiago" é "ogaihT".