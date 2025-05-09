/*
1 - Observe o trecho de código abaixo: 

int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA? 
*/

let indice = 13, soma = 0, k = 0;

while (k < indice) {
    k = k + 1;
    soma = soma + k;
}

console.log(soma);  

// Resultado: 91

// A variável soma acumula a soma dos números de 1 a 13. 
// O laço while itera até k ser igual a 13 e soma o valor de k a cada iteração.