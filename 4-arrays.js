// Exercício: Nível 1


// 1.1 Declare um array vazio.

let array = [];

// 1.2 Declare um array com mais de 5 elementos.

let frutas = ['banana', 'maça', 'morango', 'amora', 'uva', 'laranja', 'mamão'];

// 1.3 Encontre o comprimento do seu array.
console.log(frutas.length);

// 1.4 Obtenha o primeiro item, o item do meio e o último item do array.

console.log(
	frutas[0],
	frutas[Math.floor(frutas.length / 2)],
	frutas[frutas.length -1]
);

// 1.5 Declare um array chamado mixedDataTypes, coloque diferentes tipos de dados no array e encontre o comprimento do array. O tamanho do array deve ser maior que 5.

let mixedDataTypes = ['nome', 'idade', 'sexo', 'profissao', 'endereço', 'escolaridade'];
	console.log(mixedDataTypes.length);

// 1.6 Declare uma variável de array chamada itCompanies e atribua os valores iniciais Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon.

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 1.7 Imprima o array usando console.log().

console.log(itCompanies);

// 1.8 Imprima o número de empresas no array.

console.log(itCompanies.length)

// 1.9 Imprima a primeira empresa, a do meio e a última empresa.

console.log(
	itCompanies[0],
	itCompanies[Math.floor(itCompanies.length / 2)],
	itCompanies[itCompanies.length -1]
);

// 1.10 Imprima cada empresa.

console.log(itCompanies);

// 1.11 Mude o nome de cada empresa para maiúsculas, uma por uma, e imprima-as.

let itCompanies1 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let maiusculas = [];

for (let i = 0; i < itCompanies1.length; i++) {
    maiusculas.push(itCompanies1[i].toUpperCase());
}
console.log(maiusculas);

// 1.12 Imprima o array como uma frase: Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon são grandes empresas de TI.

let itCompanies2 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let frase = itCompanies2.slice(0, -1).join(', ') 
           + ' e ' 
           + itCompanies2[itCompanies2.length - 1] 
           + ' são grandes empresas de TI.';

console.log(frase);

// 1.13 Verifique se uma determinada empresa existe no array itCompanies. Se existir, retorne a empresa, senão retorne "empresa não encontrada".


let itCompanies3 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let empresaProcurada = 'Google';
	if(itCompanies3.includes(empresaProcurada)){
		console.log(empresaProcurada)
	} else {
		console.log("Empresa nao encontrada!");
	}

// 1.14 Filtre as empresas que têm mais de um 'o' sem usar o método filter.

let itCompanies4 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let resultado = [];

for (let i = 0; i < itCompanies4.length; i++) {
    let empresa = itCompanies4[i];
    let contadorO = 0;

    for (let j = 0; j < empresa.length; j++) {
        if (empresa[j].toLowerCase() === 'o') {
            contadorO++;
        }
    }

    if (contadorO > 1) {
        resultado.push(empresa);
    }
}

console.log(resultado);

// 1.15 Ordene o array usando o método sort().

let itCompanies5 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies5.sort();

console.log(itCompanies5);

// 1.16 Inverta o array usando o método reverse().

let itCompanies6 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies6.reverse();

console.log(itCompanies6);

// 1.17 Fatie as 3 primeiras empresas do array.

let itCompanies7 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let empresas = itCompanies7.splice(0, 3);

console.log(empresas);

// 1.18 Fatie as 3 últimas empresas do array.

let itCompanies8 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let empresas1 = itCompanies8.splice(4, 6);

console.log(empresas1);

// 1.19 Fatie a empresa ou empresas de TI do meio do array.


let itCompanies9 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let empresaDoMeio = itCompanies9.slice(indiceMeio, indiceMeio + 1);
console.log('Empresa do meio:', empresaDoMeio);

// 1.20 Remova a primeira empresa de TI do array.

let itCompanies10 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let primeiraEmpresa = itCompanies10.shift();

console.log(itCompanies10);

// 1.21 Remova a empresa ou empresas de TI do meio do array.

let itCompanies11 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let indiceMeio = Math.floor(itCompanies11.length / 2);
let empresaRemovida = itCompanies11.splice(indiceMeio, 1);

console.log(itCompanies11);

// 1.22 Remova a última empresa de TI do array.

let itCompanies12 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let remover = itCompanies12.pop();

console.log(itCompanies12);

// 1.23 Remova todas as empresas de TI.

let itCompanies13 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let empresasRemovidas = itCompanies13.splice(0);

console.log(itCompanies13);

// Exercício: Nível 2


// 2.1 Crie um arquivo countries.js separado e armazene o array de países nele. 
// Crie um arquivo web_techs.js separado e armazene o array webTechs nele. Acesse ambos os arquivos no arquivo main.js.

let feito = feito;

// 2.2 Primeiro, remova todas as pontuações, transforme a string em um array e conte o número de palavras no array.

let nEntendi = nEntendi;

// 2.3 No seguinte carrinho de compras, adicione, remova e edite itens:

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// adicione 'Meat' no início do seu carrinho de compras se ainda não tiver sido adicionado.
// adicione 'Sugar' no final do seu carrinho de compras se ainda não tiver sido adicionado.
// remova 'Honey' se você for alérgico a mel.
// modifique 'Tea' para 'Green Tea'.

let feito1 = feito;

// 2.4 No array de países, verifique se 'Ethiopia' existe. Se existir, imprima 'ETHIOPIA'. Se não existir, adicione-o à lista de países.

let feito2 = feito;

// 2.5 No array webTechs, verifique se 'Sass' existe. Se existir, imprima 'Sass é um pré-processador de CSS'. Se não existir, adicione 'Sass' ao array e imprima o array.

let feito3 = feito;

// 2.6 Concatene as duas variáveis a seguir e armazene o resultado em uma variável fullStack.

let feito4 = feito;

// Exercício: Nível 3


// 3.1 O seguinte é um array com as idades de 10 estudantes:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Ordene o array e encontre a idade mínima e máxima.

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let ordenar = ages.sort((a, b) => a - b);

let min = ordenar[0];               
let max = ordenar[ordenar.length-1];

console.log("Array ordenado:", ordenar);
console.log("Idade mínima:", min);
console.log("Idade máxima:", max);

// Encontre a idade mediana (o item do meio ou a média dos dois itens do meio).

let meio1 = Math.floor((ordenar.length / 2) - 1);
let meio2 = meio1 + 1;

let media = (ordenar[meio1] + ordenar[meio2]) / 2;

console.log(media);

// Encontre a idade média (a soma de todos os itens dividida pelo número de itens).

let soma = ages.reduce((total, valor) => total + valor, 0);
let media1 = soma / ages.length;

console.log(media1);

// Encontre a amplitude das idades (máximo menos mínimo).

let valor1 = 

// Compare o valor de (mínimo - média) e (máximo - média), use o método abs().



// 3.2 Fatie os dez primeiros países do array de países.

// 3.3 Encontre o(s) país(es) do meio no array de países.

// 3.4 Divida o array de países em dois arrays iguais se o número de países for par. Se não for par, adicione mais um país à primeira metade.