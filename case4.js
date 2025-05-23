/*
4 - Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
* SP – R$67.836,43
* RJ – R$36.678,66
* MG – R$29.229,88
* ES – R$27.165,48
* Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
*/

const faturamentoEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcular o valor total
const totalFaturamento = Object.values(faturamentoEstado).reduce((acc, valor) => acc + valor, 0);

// Calcular o percentual de cada estado
for (const [estado, valor] of Object.entries(faturamentoEstado)) {
    const percentual = (valor / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

// O cálculo do percentual é realizado percorrendo os valores de faturamento e comparando com o total de faturamento.
/*
        Resultado
        SP: 37.53%
        RJ: 20.29%
        MG: 16.17%
        ES: 15.03%
        Outros: 10.98%
*/