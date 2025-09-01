<div align="center">
  <h1> 30 Dias De JavaScript: Funções</h1>
</div>

![Trinta Dias De JavaScript](https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/images/banners/day_1_7.png)

- [📔 Dia 7](#-dia-7)
	- [Funções](#funções)
		- [Declaração de Função](#declaração-de-função)
		- [Função sem parâmetro e retorno](#função-sem-parâmetro-e-retorno)
		- [Função retornando valor](#função-retornando-valor)
		- [Função com um parâmetro](#função-com-um-parâmetro)
		- [Função com dois parâmetros](#função-com-dois-parâmetros)
		- [Função com muitos parâmetros](#função-com-muitos-parâmetros)
		- [Função com número ilimitado de parâmetros](#função-com-número-ilimitado-de-parâmetros)
			- [Número ilimitado de parâmetros em função regular](#número-ilimitado-de-parâmetros-em-função-regular)
			- [Número ilimitado de parâmetros em arrow function](#número-ilimitado-de-parâmetros-em-arrow-function)
		- [Função Anônima](#função-anônima)
		- [Função de Expressão](#função-de-expressão)
		- [Funções Auto-Invocáveis](#funções-auto-invocáveis)
		- [Arrow Function](#arrow-function)
		- [Função com parâmetros padrão](#função-com-parâmetros-padrão)
		- [Declaração de função versus Arrow function](#declaração-de-função-versus-arrow-function)
	- [💻 Exercícios](#-exercícios)
		- [Exercícios: Nível 1](#exercícios-nível-1)
		- [Exercícios: Nível 2](#exercícios-nível-2)
		- [Exercícios: Nível 3](#exercícios-nível-3)

# 📔 Dia 7

## Funções

Até agora, vimos muitas funções JavaScript embutidas. Nesta seção, vamos nos concentrar em funções personalizadas. O que é uma função? Antes de começarmos a criar funções, vamos entender o que é uma função e por que precisamos delas?

Uma função é um bloco de código ou declarações de programação reutilizáveis, projetado para executar uma determinada tarefa.
Uma função é declarada pela palavra-chave `function` seguida por um nome, seguido por parênteses `()`. Os parênteses podem receber um parâmetro. Se uma função receber um parâmetro, ela será chamada com um argumento. Uma função também pode receber um parâmetro padrão. Para armazenar dados em uma função, a função deve retornar certos tipos de dados. Para obter o valor, chamamos ou invocamos uma função.
Uma função torna o código:

- limpo e fácil de ler
- reutilizável
- fácil de testar

Uma função pode ser declarada ou criada de algumas maneiras:

- _Função de declaração_
- _Função de expressão_
- _Função anônima_
- _Arrow function_

### Declaração de Função

Vamos ver como declarar uma função e como chamar uma função.

```js
// declarando uma função sem parâmetro
function nomeDaFuncao() {
  // o código vai aqui
}
nomeDaFuncao() // chamando a função pelo seu nome e com parênteses
```

### Função sem parâmetro e retorno

Uma função pode ser declarada sem um parâmetro.

**Exemplo:**

```js
// função sem parâmetro, uma função que eleva um número ao quadrado
function quadrado() {
  let num = 2
  let quad = num * num
  console.log(quad)
}

quadrado() // 4

// função sem parâmetro
function somarDoisNumeros() {
  let numUm = 10
  let numDois = 20
  let soma = numUm + numDois

  console.log(soma)
}

somarDoisNumeros() // uma função precisa ser chamada pelo seu nome para ser executada
```

```js
  function imprimirNomeCompleto (){
      let primeiroNome = 'Asabeneh'
      let sobrenome = 'Yetayeh'
      let espaco = ' '
      let nomeCompleto = primeiroNome + espaco + sobrenome
      console.log(nomeCompleto)
}

imprimirNomeCompleto() // chamando uma função
```

### Função retornando valor

As funções também podem retornar valores; se uma função não retornar valores, o valor da função é `undefined`. Vamos reescrever as funções acima com `return`. De agora em diante, retornaremos o valor para uma função em vez de imprimi-lo.

```js
function imprimirNomeCompleto (){
      let primeiroNome = 'Asabeneh'
      let sobrenome = 'Yetayeh'
      let espaco = ' '
      let nomeCompleto = primeiroNome + espaco + sobrenome
      return nomeCompleto
}
console.log(imprimirNomeCompleto())
```

```js

  function somarDoisNumeros() {
      let numUm = 2
      let numDois = 3
      let total = numUm + numDois
      return total

  }

console.log(somarDoisNumeros())
```

### Função com um parâmetro

Em uma função, podemos passar diferentes tipos de dados (número, string, booleano, objeto, função) como parâmetro.

```js
// função com um parâmetro
function nomeDaFuncao(parm1) {
  // o código vai aqui
}
nomeDaFuncao(parm1) // durante a chamada ou invocação, um argumento é necessário

function areaDoCirculo(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaDoCirculo(10)) // deve ser chamada com um argumento

function quadrado(numero) {
  return numero * numero
}

console.log(quadrado(10))
```

### Função com dois parâmetros

```js
// função com dois parâmetros
function nomeDaFuncao(parm1, parm2) {
  // o código vai aqui
}
nomeDaFuncao(parm1, parm2) // durante a chamada ou invocação, dois argumentos são necessários
// A função sem parâmetro não recebe entrada, então vamos criar uma função com parâmetros
function somarDoisNumeros(numUm, numDois) {
  let soma = numUm + numDois
  console.log(soma)
}
somarDoisNumeros(10, 20) // chamando funções
// Se uma função não retorna, ela não armazena dados, então ela deve retornar

function somarDoisNumeros(numUm, numDois) {
  let soma = numUm + numDois
  return soma
}

console.log(somarDoisNumeros(10, 20))
function imprimirNomeCompleto(primeiroNome, sobrenome) {
  return `${primeiroNome} ${sobrenome}`
}
console.log(imprimirNomeCompleto('Asabeneh', 'Yetayeh'))
```

### Função com muitos parâmetros

```js
// função com múltiplos parâmetros
function nomeDaFuncao(parm1, parm2, parm3,...){
  // o código vai aqui
}
nomeDaFuncao(parm1,parm2,parm3,...) // durante a chamada ou invocação, três argumentos são necessários


// esta função recebe um array como parâmetro e soma os números no array
function somarValoresDoArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma = soma + arr[i];
  }
  return soma;
}
const numeros = [1, 2, 3, 4, 5];
    // chamando uma função
console.log(somarValoresDoArray(numeros));


    const areaDoCirculo = (raio) => {
      let area = Math.PI * raio * raio;
      return area;
    }
console.log(areaDoCirculo(10))

```

### Função com número ilimitado de parâmetros

Às vezes, não sabemos quantos argumentos o usuário vai passar. Portanto, devemos saber como escrever uma função que possa receber um número ilimitado de argumentos. A maneira como fazemos isso tem uma diferença significativa entre uma declaração de função (função regular) e uma arrow function. Vejamos exemplos tanto em declaração de função quanto em arrow function.

#### Número ilimitado de parâmetros em função regular

Uma declaração de função fornece um objeto `arguments` tipo array com escopo de função. Tudo o que passamos como argumento na função pode ser acessado a partir do objeto `arguments` dentro das funções. Vejamos um exemplo.

 ```js
// Vamos acessar o objeto arguments
​
function somarTodosNumeros() {
  console.log(arguments)
}

somarTodosNumeros(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

```

```js
// declaração de função
​
function somarTodosNumeros() {
  let soma = 0
  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i]
  }
  return soma
}

console.log(somarTodosNumeros(1, 2, 3, 4)) // 10
console.log(somarTodosNumeros(10, 20, 13, 40, 10))  // 93
console.log(somarTodosNumeros(15, 20, 30, 25, 10, 33, 40))  // 173
```

#### Número ilimitado de parâmetros em arrow function

Uma arrow function não possui o objeto `arguments` com escopo de função. Para implementar uma função que recebe um número ilimitado de argumentos em uma arrow function, usamos o operador spread seguido por qualquer nome de parâmetro. Tudo o que passamos como argumento na função pode ser acessado como um array na arrow function. Vejamos um exemplo.

 ```js
// Vamos acessar o objeto arguments
​
const somarTodosNumeros = (...args) => {
  // console.log(arguments), objeto arguments não encontrado em arrow function
  // em vez disso, usamos um parâmetro seguido pelo operador spread (...)
  console.log(args)
}

somarTodosNumeros(1, 2, 3, 4)
// [1, 2, 3, 4]

```

```js
// declaração de função
​
const somarTodosNumeros = (...args) => {
  let soma = 0
  for (const elemento of args) {
    soma += elemento
  }
  return soma
}

console.log(somarTodosNumeros(1, 2, 3, 4)) // 10
console.log(somarTodosNumeros(10, 20, 13, 40, 10))  // 93
console.log(somarTodosNumeros(15, 20, 30, 25, 10, 33, 40))  // 173
```

### Função Anônima

Função anônima ou sem nome

```js
const funcaoAnonima = function() {
  console.log(
    'Eu sou uma função anônima e meu valor é armazenado em funcaoAnonima'
  )
}
```

### Função de Expressão

Funções de expressão são funções anônimas. Depois de criarmos uma função sem nome, a atribuímos a uma variável. Para retornar um valor da função, devemos chamar a variável. Veja o exemplo abaixo.

```js

// Expressão de função
const quadrado = function(n) {
  return n * n
}

console.log(quadrado(2)) // -> 4
```

### Funções Auto-Invocáveis

Funções auto-invocáveis são funções anônimas que não precisam ser chamadas para retornar um valor.

```js
(function(n) {
  console.log(n * n)
})(2) // 4, mas em vez de apenas imprimir, se quisermos retornar e armazenar os dados, fazemos como mostrado abaixo

let numQuadrado = (function(n) {
  return n * n
})(10)

console.log(numQuadrado)
```

### Arrow Function

Arrow function é uma alternativa para escrever uma função, no entanto, a declaração de função e a arrow function têm algumas pequenas diferenças.

A arrow function usa uma seta em vez da palavra-chave `function` para declarar uma função. Vejamos a declaração de função e a arrow function.

```js
// É assim que escrevemos uma função normal ou de declaração
// Vamos mudar esta função de declaração para uma arrow function
function quadrado(n) {
  return n * n
}

console.log(quadrado(2)) // 4

const quadrado = n => {
  return n * n
}

console.log(quadrado(2))  // -> 4

// se tivermos apenas uma linha no bloco de código, ela pode ser escrita da seguinte forma, retorno explícito
const quadrado = n => n * n  // -> 4
```

```js
const mudarParaMaiusculas = arr => {
  const novoArr = []
  for (const elemento of arr) {
    novoArr.push(elemento.toUpperCase())
  }
  return novoArr
}

const paises = ['Finlandia', 'Suecia', 'Noruega', 'Dinamarca', 'Islandia']
console.log(mudarParaMaiusculas(paises))

// ["FINLANDIA", "SUECIA", "NORUEGA", "DINAMARCA", "ISLANDIA"]
```

```js
const imprimirNomeCompleto = (primeiroNome, sobrenome) => {
  return `${primeiroNome} ${sobrenome}`
}

console.log(imprimirNomeCompleto('Asabeneh', 'Yetayeh'))
```

A função acima tem apenas a instrução `return`, portanto, podemos retorná-la explicitamente da seguinte forma.

```js
const imprimirNomeCompleto = (primeiroNome, sobrenome) => `${primeiroNome} ${sobrenome}`

console.log(imprimirNomeCompleto('Asabeneh', 'Yetayeh'))
```

### Função com parâmetros padrão

Às vezes, passamos valores padrão para os parâmetros; quando invocamos a função, se não passarmos um argumento, o valor padrão será usado. Tanto a declaração de função quanto a arrow function podem ter um valor ou valores padrão.

```js
// sintaxe
// Declarando uma função
function nomeDaFuncao(param = valor) {
  // códigos
}

// Chamando a função
nomeDaFuncao()
nomeDaFuncao(arg)
```

**Exemplo:**

```js
function saudações(nome = 'Pedro') {
  let mensagem = `${nome}, bem-vindo(a) aos 30 Dias de JavaScript!`
  return mensagem
}

console.log(saudações())
console.log(saudações('Asabeneh'))
```

```js
function gerarNomeCompleto(primeiroNome = 'Asabeneh', sobrenome = 'Yetayeh') {
  let espaco = ' '
  let nomeCompleto = primeiroNome + espaco + sobrenome
  return nomeCompleto
}

console.log(gerarNomeCompleto())
console.log(gerarNomeCompleto('David', 'Smith'))
```

```js
function calcularIdade(anoNascimento, anoAtual = 2019) {
  let idade = anoAtual - anoNascimento
  return idade
}

console.log('Idade: ', calcularIdade(1819))
```

```js
function pesoDoObjeto(massa, gravidade = 9.81) {
  let peso = massa * gravidade + ' N' // o valor deve ser alterado para string primeiro
  return peso
}

console.log('Peso de um objeto em Newton: ', pesoDoObjeto(100)) // 9.81 gravidade na superfície da Terra
console.log('Peso de um objeto em Newton: ', pesoDoObjeto(100, 1.62)) // gravidade na superfície da Lua
```

Vejamos como escrevemos as funções acima com arrow functions.

```js
// sintaxe
// Declarando uma função
const nomeDaFuncao = (param = valor) => {
  // códigos
}

// Chamando a função
nomeDaFuncao()
nomeDaFuncao(arg)
```

**Exemplo:**

```js
const saudações = (nome = 'Pedro') => {
  let mensagem = nome + ', bem-vindo(a) aos 30 Dias de JavaScript!'
  return mensagem
}

console.log(saudações())
console.log(saudações('Asabeneh'))
```

```js
const gerarNomeCompleto = (primeiroNome = 'Asabeneh', sobrenome = 'Yetayeh') => {
  let espaco = ' '
  let nomeCompleto = primeiroNome + espaco + sobrenome
  return nomeCompleto
}

console.log(gerarNomeCompleto())
console.log(gerarNomeCompleto('David', 'Smith'))
```

```js

const calcularIdade = (anoNascimento, anoAtual = 2019) => anoAtual - anoNascimento
console.log('Idade: ', calcularIdade(1819))
```

```js
const pesoDoObjeto = (massa, gravidade = 9.81) => massa * gravidade + ' N'
  
console.log('Peso de um objeto em Newton: ', pesoDoObjeto(100)) // 9.81 gravidade na superfície da Terra
console.log('Peso de um objeto em Newton: ', pesoDoObjeto(100, 1.62)) // gravidade na superfície da Lua
```

### Declaração de função versus Arrow function

Será abordado em outra seção.

🌕 Você é uma estrela em ascensão, agora você conhece funções. Agora, você está super-carregado com o poder das funções. Você acabou de completar os desafios do dia 7 e está 7 passos à frente em seu caminho para a grandeza. Agora faça alguns exercícios para seu cérebro e para seus músculos.



## 💻 Exercícios

### Exercícios: Nível 1

1. Declare uma função `_fullName_` e faça com que ela imprima seu nome completo.
2. Declare uma função `_fullName_` e agora ela recebe `firstName`, `lastName` como parâmetro e retorna seu nome completo.
3. Declare uma função `_addNumbers_` e ela recebe dois parâmetros e retorna a soma.
4. A área de um retângulo é calculada da seguinte forma: `_area = length x width_`. Escreva uma função que calcula `_areaOfRectangle_`.
5. O perímetro de um retângulo é calculado da seguinte forma: `_perimeter= 2x(length + width)_`. Escreva uma função que calcula `_perimeterOfRectangle_`.
6. O volume de um prisma retangular é calculado da seguinte forma: `_volume = length x width x height_`. Escreva uma função que calcula `_volumeOfRectPrism_`.
7. A área de um círculo é calculada da seguinte forma: `_area = π x r x r_`. Escreva uma função que calcula `_areaOfCircle_`.
8. A circunferência de um círculo é calculada da seguinte forma: `_circumference = 2πr_`. Escreva uma função que calcula `_circumOfCircle_`.
9. A densidade de uma substância é calculada da seguinte forma: `_density= mass/volume_`. Escreva uma função que calcula `_density_`.
10. A velocidade é calculada dividindo a distância total percorrida por um objeto em movimento pela quantidade total de tempo gasto. Escreva uma função que calcula a velocidade de um objeto em movimento, `_speed_`.
11. O peso de uma substância é calculado da seguinte forma: `_weight = mass x gravity_`. Escreva uma função que calcula `_weight_`.
12. A temperatura em oC pode ser convertida para oF usando esta fórmula: `_oF = (oC x 9/5) + 32_`. Escreva uma função que converta oC para oF `_convertCelsiusToFahrenheit_`.
13. O índice de massa corporal (IMC) é calculado da seguinte forma: `_bmi = weight in Kg / (height x height) in m2_`. Escreva uma função que calcula `_bmi_`. O IMC é usado para definir amplamente diferentes grupos de peso em adultos com 20 anos ou mais. Verifique se uma pessoa está `_underweight, normal, overweight_` ou `_obese_` com base nas informações fornecidas abaixo.

    - Os mesmos grupos se aplicam a homens e mulheres.
    - `_Underweight_` (Abaixo do peso): IMC inferior a 18,5
    - `_Normal weight_` (Peso normal): IMC de 18,5 a 24,9
    - `_Overweight_` (Sobrepeso): IMC de 25 a 29,9
    - `_Obese_` (Obeso): IMC de 30 ou mais

14. Escreva uma função chamada `_checkSeason_`, que recebe um parâmetro de mês e retorna a estação: Outono, Inverno, Primavera ou Verão.
15. `Math.max` retorna seu maior argumento. Escreva uma função `findMax` que recebe três argumentos e retorna o máximo deles sem usar o método `Math.max`.

    ```js
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
    ```
  
### Exercícios: Nível 2

1. A equação linear é calculada da seguinte forma: `_ax + by + c = 0_`. Escreva uma função que calcula o valor de uma equação linear, `_solveLinEquation_`.
1. A equação quadrática é calculada da seguinte forma: `_ax2 + bx + c = 0_`. Escreva uma função que calcula o valor ou os valores de uma equação quadrática, `_solveQuadEquation_`.

    ```js
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
    ```

1. Declare uma função chamada `_printArray_`. Ela recebe um array como parâmetro e imprime cada valor do array.
1. Escreva uma função chamada `_showDateTime_` que exibe a hora neste formato: 08/01/2020 04:08 usando o objeto Date.

    ```sh
    showDateTime()
    08/01/2020 04:08
    ```

1. Declare uma função chamada `_swapValues_`. Esta função troca o valor de x por y.

    ```js
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
    ```

1. Declare uma função chamada `_reverseArray_`. Ela recebe um array como parâmetro e retorna o inverso do array (não use método).

    ```js
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
    ```

1. Declare uma função chamada `_capitalizeArray_`. Ela recebe um array como parâmetro e retorna o array capitalizado.
1. Declare uma função chamada `_addItem_`. Ela recebe um parâmetro de item e retorna um array após adicionar o item.
1. Declare uma função chamada `_removeItem_`. Ela recebe um parâmetro de índice e retorna um array após remover um item.
1. Declare uma função chamada `_sumOfNumbers_`. Ela recebe um parâmetro de número e soma todos os números nesse intervalo.
1. Declare uma função chamada `_sumOfOdds_`. Ela recebe um parâmetro de número e soma todos os números ímpares nesse intervalo.
1. Declare uma função chamada `_sumOfEven_`. Ela recebe um parâmetro de número e soma todos os números pares nesse intervalo.
1. Declare uma função chamada `evensAndOdds`. Ela recebe um número inteiro positivo como parâmetro e conta o número de pares e ímpares no número.

    ```sh
    evensAndOdds(100);
    O número de ímpares é 50.
    O número de pares é 51.
    ```

1. Escreva uma função que recebe qualquer número de argumentos e retorna a soma dos argumentos.

    ```js
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
    ```

1. Escreva uma função que gera um `_randomUserIp_`.
1. Escreva uma função que gera um `_randomMacAddress_`.
1. Declare uma função chamada `_randomHexaNumberGenerator_`. Quando esta função é chamada, ela gera um número hexadecimal aleatório. A função retorna o número hexadecimal.

    ```sh
    console.log(randomHexaNumberGenerator());
    '#ee33df'
    ```

1. Declare uma função chamada `_userIdGenerator_`. Quando esta função é chamada, ela gera um ID de sete caracteres. A função retorna o ID.

    ```sh
    console.log(userIdGenerator());
    41XTDbE
    ```

### Exercícios: Nível 3

1. Modifique a função `_userIdGenerator_`. Declare uma função chamada `_userIdGeneratedByUser_`. Ela não recebe nenhum parâmetro, mas recebe duas entradas usando `prompt()`. Uma das entradas é o número de caracteres e a segunda entrada é o número de IDs que devem ser gerados.

    ```sh
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
    ```

1. Escreva uma função chamada `_rgbColorGenerator_` e ela gera cores RGB.

    ```sh
    rgbColorGenerator()
    rgb(125,244,255)
    ```

1. Escreva uma função **_arrayOfHexaColors_** que retorna qualquer número de cores hexadecimais em um array.
1. Escreva uma função **_arrayOfRgbColors_** que retorna qualquer número de cores RGB em um array.
1. Escreva uma função **_convertHexaToRgb_** que converte cor hexadecimal para RGB e retorna uma cor RGB.
1. Escreva uma função **_convertRgbToHexa_** que converte RGB para cor hexadecimal e retorna uma cor hexadecimal.
1. Escreva uma função **_generateColors_** que pode gerar qualquer número de cores hexadecimais ou RGB.

    ```js
    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors('hexa', 1)) // '#b334ef'
    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    ```

1. Chame sua função `_shuffleArray_`, ela recebe um array como parâmetro e retorna um array embaralhado.
1. Chame sua função `_factorial_`, ela recebe um número inteiro como parâmetro e retorna o fatorial do número.
1. Chame sua função `_isEmpty_`, ela recebe um parâmetro e verifica se ele está vazio ou não.
1. Chame sua função `_sum_`, ela recebe qualquer número de argumentos e retorna a soma.
1. Escreva uma função chamada `_sumOfArrayItems_`, ela recebe um parâmetro de array e retorna a soma de todos os itens. Verifique se todos os itens do array são do tipo numérico. Caso contrário, retorne um feedback razoável.
1. Escreva uma função chamada `_average_`, ela recebe um parâmetro de array e retorna a média dos itens. Verifique se todos os itens do array são do tipo numérico. Caso contrário, retorne um feedback razoável.
1. Escreva uma função chamada `_modifyArray_` que recebe um array como parâmetro e modifica o quinto item do array e retorna o array. Se o comprimento do array for menor que cinco, ela retorna 'item não encontrado'.

    ```js
    console.log(modifyArray(['Abacate', 'Tomate', 'Batata','Manga', 'Limão','Cenoura']);
    ```

    ```sh
    ['Abacate', 'Tomate', 'Batata','Manga', 'LIMÃO', 'Cenoura']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    ```

    ```sh
    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    ```

    ```sh
      'Não Encontrado'
    ```

1. Escreva uma função chamada `_isPrime_`, que verifica se um número é primo.
1. Escreva funções que verificam se todos os itens em um array são únicos.
1. Escreva uma função que verifica se todos os itens do array são do mesmo tipo de dado.
1. Nomes de variáveis JavaScript não suportam caracteres especiais ou símbolos, exceto \$ ou \_. Escreva uma função **isValidVariable** que verifica se uma variável é válida ou inválida.
1. Escreva uma função que retorna um array de sete números aleatórios em um intervalo de 0-9. Todos os números devem ser únicos.

    ```js
    sevenRandomNumbers()
    [(1, 4, 5, 7, 9, 8, 0)]
    ```

1. Escreva uma função chamada `reverseCountries`, que recebe um array de países, primeiro copia o array e retorna o inverso do array original.

🎉 PARABÉNS! 🎉
