![Trinta Dias de JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/banners/day_1_3.png)

- [📔 Dia 3](#-dia-3)
	- [Booleanos](#booleanos)
		- [Valores Truthy](#valores-truthy)
		- [Valores Falsy](#valores-falsy)
	- [Undefined](#undefined)
	- [Null](#null)
	- [Operadores](#operadores)
		- [Operadores de atribuição](#operadores-de-atribuição)
		- [Operadores Aritméticos](#operadores-aritméticos)
		- [Operadores de Comparação](#operadores-de-comparação)
		- [Operadores Lógicos](#operadores-lógicos)
		- [Operador de Incremento](#operador-de-incremento)
		- [Operador de Decremento](#operador-de-decremento)
		- [Operadores Ternários](#operadores-ternários)
		- [Precedência de Operadores](#precedência-de-operadores)
	- [Métodos da Janela (Window)](#métodos-da-janela-window)
		- [Método Window alert()](#método-window-alert)
		- [Método Window prompt()](#método-window-prompt)
		- [Método Window confirm()](#método-window-confirm)
	- [Objeto Date](#objeto-date)
		- [Criando um objeto de tempo](#criando-um-objeto-de-tempo)
		- [Obtendo o ano completo](#obtendo-o-ano-completo)
		- [Obtendo o mês](#obtendo-o-mês)
		- [Obtendo a data](#obtendo-a-data)
		- [Obtendo o dia](#obtendo-o-dia)
		- [Obtendo as horas](#obtendo-as-horas)
		- [Obtendo os minutos](#obtendo-os-minutos)
		- [Obtendo os segundos](#obtendo-os-segundos)
		- [Obtendo o tempo](#obtendo-o-tempo)
	- [💻 Dia 3: Exercícios](#-dia-3-exercícios)
		- [Exercícios: Nível 1](#exercícios-nível-1)
		- [Exercícios: Nível 2](#exercícios-nível-2)
		- [Exercícios: Nível 3](#exercícios-nível-3)

# 📔 Dia 3

## Booleanos

Um tipo de dado booleano representa um dos dois valores: _true_ (verdadeiro) ou _false_ (falso). O valor booleano é verdadeiro ou falso. O uso desses tipos de dados ficará claro quando você começar a usar o operador de comparação. Qualquer comparação retorna um valor booleano, que é verdadeiro ou falso.

**Exemplo: Valores Booleanos**

```js
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false
```

Nós concordamos que valores booleanos são `true` ou `false`.

### Valores Truthy

- Todos os números (positivos e negativos) são truthy, exceto o zero.
- Todas as strings são truthy, exceto uma string vazia ('').
- O booleano `true`.

### Valores Falsy

- 0
- 0n
- null
- undefined
- NaN
- o booleano `false`
- '', "", ``, string vazia

É bom lembrar desses valores truthy e falsy. Em uma seção posterior, nós os usaremos com condições para tomar decisões.

## Undefined

Se declararmos uma variável e não atribuirmos um valor a ela, o valor será `undefined`. Além disso, se uma função não estiver retornando um valor, ela retornará `undefined`.

```js
let firstName
console.log(firstName) // indefinido, porque ainda não foi atribuído um valor
```

## Null

```js
let empty = null
console.log(empty) // -> null, significa nenhum valor
```

## Operadores

### Operadores de atribuição

Um sinal de igual em JavaScript é um operador de atribuição. Ele é usado para atribuir um valor a uma variável.

```js
let firstName = 'Asabeneh'
let country = 'Finland'```

Operadores de Atribuição

![Assignment operators](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/assignment_operators.png)

### Operadores Aritméticos

Operadores aritméticos são operadores matemáticos.

- Adição(+): a + b
- Subtração(-): a - b
- Multiplicação(*): a * b
- Divisão(/): a / b
- Módulo(%): a % b
- Exponenciação(**): a ** b

```js
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

```

```js
const PI = 3.14
let radius = 100          // comprimento em metros

//Vamos calcular a área de um círculo
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // em m/s2
let mass = 72             // em Quilogramas

// Vamos calcular o peso de um objeto
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperatura em oC, ponto de ebulição da água
const bodyTemp = 37       // temperatura corporal em oC


// Concatenando string com números usando interpolação de string
/*
 O ponto de ebulição da água é 100 oC.
 A temperatura do corpo humano é 37 oC.
 A gravidade da terra é 9.81 m/s2.
 */
console.log(
  `O ponto de ebulição da água é ${boilingPoint} oC.\nA temperatura do corpo humano é ${bodyTemp} oC.\nA gravidade da Terra é ${gravity} m / s2.`
)
```

### Operadores de Comparação

Em programação, comparamos valores; usamos operadores de comparação para comparar dois valores. Verificamos se um valor é maior, menor ou igual a outro valor.

![Comparison Operators](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/comparison_operators.png)
**Exemplo: Operadores de Comparação**

```js
console.log(3 > 2)              // true, porque 3 é maior que 2
console.log(3 >= 2)             // true, porque 3 é maior que 2
console.log(3 < 2)              // false,  porque 3 é maior que 2
console.log(2 < 3)              // true, porque 2 é menor que 3
console.log(2 <= 3)             // true, porque 2 é menor que 3
console.log(3 == 2)             // false, porque 3 não é igual a 2
console.log(3 != 2)             // true, porque 3 não é igual a 2
console.log(3 == '3')           // true, compara apenas o valor
console.log(3 === '3')          // false, compara tanto o valor quanto o tipo de dado
console.log(3 !== '3')          // true, compara tanto o valor quanto o tipo de dado
console.log(3 != 3)             // false, compara apenas o valor
console.log(3 !== 3)            // false, compara tanto o valor quanto o tipo de dado
console.log(0 == false)         // true, equivalente
console.log(0 === false)        // false, não são exatamente iguais
console.log(0 == '')            // true, equivalente
console.log(0 == ' ')           // true, equivalente
console.log(0 === '')           // false, não são exatamente iguais
console.log(1 == true)          // true, equivalente
console.log(1 === true)         // false, não são exatamente iguais
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, não é igual
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false
```

Tente entender as comparações acima com alguma lógica. Tentar memorizar sem lógica pode ser difícil.
JavaScript é uma linguagem de programação um tanto peculiar. O código JavaScript executa e retorna um resultado, mas a menos que você seja bom nisso, pode não ser o resultado desejado.

Como regra geral, se um valor não for `true` com `==`, ele não será igual com `===`. Usar `===` é mais seguro do que usar `==`. O [link](https://dorey.github.io/JavaScript-Equality-Table/) a seguir tem uma lista exaustiva de comparações de tipos de dados.

### Operadores Lógicos

Os símbolos a seguir são os operadores lógicos comuns: `&&` (e), `||` (ou) e `!` (negação).
O operador `&&` retorna `true` apenas se ambos os operandos forem `true`.
O operador `||` retorna `true` se um dos operandos for `true`.
O operador `!` nega `true` para `false` e `false` para `true`.

```js
// Exemplo do operador && (e)

const check = 4 > 3 && 10 > 5         // true && true -> true
const check = 4 > 3 && 10 < 5         // true && false -> false
const check = 4 < 3 && 10 < 5         // false && false -> false

// Exemplo do operador || (ou)

const check = 4 > 3 || 10 > 5         // true  || true -> true
const check = 4 > 3 || 10 < 5         // true  || false -> true
const check = 4 < 3 || 10 < 5         // false || false -> false

//! Exemplos de negação

let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true
```

### Operador de Incremento

Em JavaScript, usamos o operador de incremento para aumentar um valor armazenado em uma variável. O incremento pode ser pré ou pós-incremento. Vejamos cada um deles:

1. Pré-incremento

```js
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
```

2. Pós-incremento

```js
let count = 0
console.log(count++)        // 0
console.log(count)          // 1
```

Na maioria das vezes, usamos o pós-incremento. No mínimo, você deve se lembrar de como usar o operador de pós-incremento.

### Operador de Decremento

Em JavaScript, usamos o operador de decremento para diminuir um valor armazenado em uma variável. O decremento pode ser pré ou pós-decremento. Vejamos cada um deles:

1. Pré-decremento

```js
let count = 0
console.log(--count) // -1
console.log(count)  // -1
```

2. Pós-decremento

```js
let count = 0
console.log(count--) // 0
console.log(count)   // -1
```

### Operadores Ternários

O operador ternário permite escrever uma condição. Outra maneira de escrever condicionais é usando operadores ternários. Veja os exemplos a seguir:

```js
let isRaining = true
isRaining
  ? console.log('Você precisa de uma capa de chuva.')
  : console.log('Não há necessidade de uma capa de chuva.')
isRaining = false

isRaining
  ? console.log('Você precisa de uma capa de chuva.')
  : console.log('Não há necessidade de uma capa de chuva.')
```

```sh
Você precisa de uma capa de chuva.
Não há necessidade de uma capa de chuva.
```

```js
let number = 5
number > 0
  ? console.log(`${number} é um número positivo`)
  : console.log(`${number} é um número negativo`)
number = -5

number > 0
  ? console.log(`${number} é um número positivo`)
  : console.log(`${number} é um número negativo`)
```

```sh
5 é um número positivo
-5 é um número negativo
```

### Precedência de Operadores

Gostaria de recomendar que você leia sobre a precedência de operadores neste [link](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence).

## Métodos da Janela (Window)

### Método Window alert()

Como você viu no início, o método `alert()` exibe uma caixa de alerta com uma mensagem especificada e um botão OK. É um método nativo e aceita um argumento.

```js
alert(message)
```

```js
alert('Bem-vindo ao 30DiasDeJavaScript')
```

Não use `alert` em excesso, pois é perturbador e irritante; use-o apenas para testar.

### Método Window prompt()

O método `prompt` da janela exibe uma caixa de diálogo com uma entrada em seu navegador para receber valores, e os dados de entrada podem ser armazenados em uma variável. O método `prompt()` aceita dois argumentos. O segundo argumento é opcional.

```js
prompt('texto obrigatório', 'texto opcional')
```

```js
let number = prompt('Digite um número', 'o número vai aqui')
console.log(number)
```

### Método Window confirm()

O método `confirm()` exibe uma caixa de diálogo com uma mensagem especificada, juntamente com os botões OK e Cancelar. Uma caixa de confirmação é frequentemente usada para pedir permissão ao usuário para executar algo. O `confirm()` da janela aceita uma string como argumento. Clicar em OK retorna o valor `true`, enquanto clicar no botão Cancelar retorna o valor `false`.

```js
const agree = confirm('Você tem certeza que quer deletar?')
console.log(agree) // o resultado será true ou false dependendo do que você clicar na caixa de diálogo
```

Estes não são todos os métodos da janela; teremos uma seção separada para nos aprofundarmos nos métodos da janela.

## Objeto Date

O tempo é uma coisa importante. Gostamos de saber a que horas uma determinada atividade ou evento ocorre. Em JavaScript, a hora e a data atuais são criadas usando o Objeto `Date` do JavaScript. O objeto que criamos usando o objeto `Date` fornece muitos métodos para trabalhar com data e hora. Os métodos que usamos para obter informações de data e hora de um objeto de data começam com a palavra _get_, pois eles fornecem a informação. _getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()_

![Date time Object](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/date_time_object.png)

### Criando um objeto de tempo

Uma vez que criamos um objeto de tempo, o objeto de tempo fornecerá informações sobre o tempo. Vamos criar um objeto de tempo.

```js
const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Horário Padrão do Leste Europeu)
```

Criamos um objeto de tempo e podemos acessar qualquer informação de data e hora do objeto usando os métodos `get` que mencionamos na tabela.

### Obtendo o ano completo

Vamos extrair ou obter o ano completo de um objeto de tempo.

```js
const now = new Date()
console.log(now.getFullYear()) // 2020
```

### Obtendo o mês

Vamos extrair ou obter o mês de um objeto de tempo.

```js
const now = new Date()
console.log(now.getMonth()) // 0, porque o mês é Janeiro, mês(0-11)
```

### Obtendo a data

Vamos extrair ou obter a data do mês de um objeto de tempo.

```js
const now = new Date()
console.log(now.getDate()) // 4, porque o dia do mês é 4, dia(1-31)
```

### Obtendo o dia

Vamos extrair ou obter o dia da semana de um objeto de tempo.

```js
const now = new Date()
console.log(now.getDay()) // 6, porque o dia é Sábado, que é o 7º dia
// Domingo é 0, Segunda-feira é 1 e Sábado é 6
// Obtendo o dia da semana como um número (0-6)
```

### Obtendo as horas

Vamos extrair ou obter as horas de um objeto de tempo.

```js
const now = new Date()
console.log(now.getHours()) // 0, porque a hora é 00:56:41```

### Obtendo os minutos

Vamos extrair ou obter os minutos de um objeto de tempo.

```js
const now = new Date()
console.log(now.getMinutes()) // 56, porque a hora é 00:56:41
```

### Obtendo os segundos

Vamos extrair ou obter os segundos de um objeto de tempo.

```js
const now = new Date()
console.log(now.getSeconds()) // 41, porque a hora é 00:56:41
```

### Obtendo o tempo

Este método retorna o tempo em milissegundos desde 1º de janeiro de 1970. Também é conhecido como Tempo Unix. Podemos obter o tempo Unix de duas maneiras:

1. Usando _getTime()_

```js
const now = new Date() //
console.log(now.getTime()) // 1578092201341, este é o número de segundos passados desde 1 de janeiro de 1970 até 4 de janeiro de 2020, 00:56:41
```

2. Usando _Date.now()_

```js
const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, este é o número de segundos passados desde 1 de janeiro de 1970 até 4 de janeiro de 2020, 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true
```

Vamos formatar esses valores para um formato de tempo legível por humanos.
**Exemplo:**

```js
const now = new Date()
const year = now.getFullYear() // retorna o ano
const month = now.getMonth() + 1 // retorna o mês (0 - 11)
const date = now.getDate() // retorna a data (1 - 31)
const hours = now.getHours() // retorna o número (0 - 23)
const minutes = now.getMinutes() // retorna o número (0 - 59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
```

🌕 Você tem uma energia ilimitada. Você acabou de completar os desafios do dia 3 e está três passos à frente em seu caminho para a grandeza. Agora, faça alguns exercícios para o seu cérebro e para os seus músculos.

## 💻 Dia 3: Exercícios

### Exercícios: Nível 1

1.  Declare as variáveis `firstName`, `lastName`, `country`, `city`, `age`, `isMarried`, `year` e atribua valores a elas. Use o operador `typeof` para verificar os diferentes tipos de dados.
2.  Verifique se o `typeof` de '10' é igual a 10.
3.  Verifique se `parseInt('9.8')` é igual a 10.
4.  O valor booleano é verdadeiro ou falso.
    1.  Escreva três instruções em JavaScript que resultem em um valor truthy.
    2.  Escreva três instruções em JavaScript que resultem em um valor falsy.
5.  Descubra o resultado da seguinte expressão de comparação primeiro sem usar `console.log()`. Depois de decidir o resultado, confirme-o usando `console.log()`.
    1.  `4 > 3`
    2.  `4 >= 3`
    3.  `4 < 3`
    4.  `4 <= 3`
    5.  `4 == 4`
    6.  `4 === 4`
    7.  `4 != 4`
    8.  `4 !== 4`
    9.  `4 != '4'`
    10. `4 == '4'`
    11. `4 === '4'`
    12. Encontre o comprimento de 'python' e 'jargon' e faça uma declaração de comparação falsy.
6.  Descubra o resultado das seguintes expressões primeiro sem usar `console.log()`. Depois de decidir o resultado, confirme-o usando `console.log()`.
    1.  `4 > 3 && 10 < 12`
    2.  `4 > 3 && 10 > 12`
    3.  `4 > 3 || 10 < 12`
    4.  `4 > 3 || 10 > 12`
    5.  `!(4 > 3)`
    6.  `!(4 < 3)`
    7.  `!(false)`
    8.  `!(4 > 3 && 10 < 12)`
    9.  `!(4 > 3 && 10 > 12)`
    10. `!(4 === '4')`
    11. Não existe 'on' tanto em 'dragon' quanto em 'python'.
7.  Use o objeto `Date` para realizar as seguintes atividades:
    1.  Qual é o ano hoje?
    2.  Qual é o mês hoje como um número?
    3.  Qual é a data de hoje?
    4.  Qual é o dia de hoje como um número?
    5.  Quais são as horas agora?
    6.  Quais são os minutos agora?
    7.  Descubra o número de segundos decorridos desde 1º de janeiro de 1970 até agora.

### Exercícios: Nível 2

1.  Escreva um script que solicite ao usuário para inserir a base e a altura de um triângulo e calcule a área do triângulo (área = 0.5 * b * h).
    ```sh
    Digite a base: 20
    Digite a altura: 10
    A área do triângulo é 100
    ```
2.  Escreva um script que solicite ao usuário para inserir o lado a, o lado b e o lado c de um triângulo e calcule o perímetro do triângulo (perímetro = a + b + c).
    ```sh
    Digite o lado a: 5
    Digite o lado b: 4
    Digite o lado c: 3
    O perímetro do triângulo é 12
    ```
3.  Obtenha o comprimento e a largura usando `prompt` e calcule a área de um retângulo (área = comprimento * largura) e o perímetro do retângulo (perímetro = 2 * (comprimento + largura)).
4.  Obtenha o raio usando `prompt` e calcule a área de um círculo (área = pi * r * r) e a circunferência de um círculo (c = 2 * pi * r), onde pi = 3.14.
5.  Calcule a inclinação, a intersecção com o eixo x e a intersecção com o eixo y de y = 2x - 2.
6.  A inclinação é m = (y₂-y₁)/(x₂-x₁). Encontre a inclinação entre o ponto (2, 2) e o ponto (6, 10).
7.  Compare a inclinação das duas questões acima.
8.  Calcule o valor de y (y = x² + 6x + 9). Tente usar diferentes valores de x e descubra para qual valor de x, y é 0.
9.  Escreva um script que solicite ao usuário para inserir as horas e a taxa por hora. Calcule o pagamento da pessoa.
    ```sh
    Digite as horas: 40
    Digite a taxa por hora: 28
    Seu ganho semanal é 1120
    ```
10. Se o comprimento do seu nome for maior que 7, diga "seu nome é longo", senão diga "seu nome é curto".
11. Compare o comprimento do seu primeiro nome com o do seu sobrenome e você deve obter esta saída.
    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```
    ```sh
    Seu primeiro nome, Asabeneh, é mais longo que seu sobrenome, Yetayeh
    ```
12. Declare duas variáveis, _myAge_ e _yourAge_, e atribua valores iniciais a elas.
    ```js
    let myAge = 250
    let yourAge = 25
    ```
    ```sh
    Eu sou 225 anos mais velho que você.
    ```
13. Usando `prompt`, obtenha o ano em que o usuário nasceu e, se o usuário tiver 18 anos ou mais, permita que ele dirija; caso contrário, diga ao usuário para esperar uma certa quantidade de anos.
    ```sh
    Digite o ano de nascimento: 1995
    Você tem 25 anos. Você tem idade suficiente para dirigir.

    Digite o ano de nascimento: 2005
    Você tem 15 anos. Você poderá dirigir em 3 anos.
    ```
14. Escreva um script que solicite ao usuário para inserir o número de anos. Calcule o número de segundos que uma pessoa pode viver. Suponha que alguém viva exatamente cem anos.
    ```sh
    Digite o número de anos que você viveu: 100
    Você viveu 3153600000 segundos.
    ```
15. Crie um formato de hora legível por humanos usando o objeto `Date`:
    1.  AAAA-MM-DD HH:mm
    2.  DD-MM-AAAA HH:mm
    3.  DD/MM/AAAA HH:mm

### Exercícios: Nível 3

1.  Crie um formato de hora legível por humanos usando o objeto `Date`. A hora e o minuto devem sempre ter dois dígitos (7 horas deve ser 07 e 5 minutos deve ser 05).
    1.  AAAA-MM-DD HH:mm, ex: 2020-01-02 07:05