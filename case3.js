/*
3 - Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
* O menor valor de faturamento ocorrido em um dia do mês;
* O maior valor de faturamento ocorrido em um dia do mês;
* Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE: 

a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;

b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

*/

// Resolução


  // Vetor de faturamento mensal (considerando que 0.0 indica dias sem faturamento)
  const faturamento_mensal = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
  ];

// Função para pegar apenas os valores maiores que 0
function filtrarValoresValidos(dados) {
    let validos = [];
    for (let i = 0; i < dados.length; i++) {
      if (dados[i].valor > 0) {
        validos.push(dados[i].valor);
      }
    }
    return validos;
  }
  
  // Função para encontrar o menor valor
  function encontrarMenor(lista) {
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
    return menor;
  }
  
  // Função para encontrar o maior valor
  function encontrarMaior(lista) {
    let maior = lista[0];
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > maior) {
        maior = lista[i];
      }
    }
    return maior;
  }
  
  // Função para calcular a média
  function calcularMedia(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
      soma += lista[i];
    }
    return soma / lista.length;
  }
  
  // Função para contar quantos valores estão acima da média
  function contarAcimaDaMedia(lista, media) {
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] > media) {
        contador++;
      }
    }
    return contador;
  }
  
 
  let valoresValidos = filtrarValoresValidos(faturamento_mensal);
  let menorValor = encontrarMenor(valoresValidos);
  let maiorValor = encontrarMaior(valoresValidos);
  let media = calcularMedia(valoresValidos);
  let diasAcima = contarAcimaDaMedia(valoresValidos, media);
  
  // Mostrando o resultado
  console.log("Menor valor de faturamento: " + menorValor.toFixed(2));
  console.log("Maior valor de faturamento: " + maiorValor.toFixed(2));
  console.log("Número de dias acima da média: " + diasAcima);

/*
Explicação do código:
O código começa filtrando os dias com faturamento, ou seja, ignora os dias com valor 0.0, que representam finais de semana ou feriados.

Funções:
filtrarValoresValidos: Percorre o array original e retorna apenas os valores maiores que zero, ou seja, os dias com faturamento.
encontrarMenor: Recebe uma lista de valores e retorna o menor número presente nela, comparando um a um.
encontrarMaior: Recebe uma lista de valores e retorna o maior número presente nela, comparando um a um.
calcularMedia: Soma todos os valores da lista e divide pela quantidade de elementos para encontrar a média mensal de faturamento (considerando apenas dias úteis).
contarAcimaDaMedia: Percorre a lista e conta quantos valores são maiores do que a média calculada.

Resultado:
Menor valor de faturamento: 373.78
Maior valor de faturamento: 48924.24
Número de dias acima da média: 10
*/