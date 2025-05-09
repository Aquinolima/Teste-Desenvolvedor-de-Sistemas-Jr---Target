/*
2 - Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function verificaFibonacci(num) {
    let a = 0, b = 1;
    while (a < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return a === num;
}

//Defina o numero para a verificação
let numero = 8;

if (verificaFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}


// A função verificaFibonacci gera a sequência de Fibonacci até o número informado ou até ultrapassá-lo.
// O número informado é verificado para saber se pertence à sequência de Fibonacci.
// O resultado aparece no console.