- [📔 Dia 2](#-dia-2)
	- [Tipos de Dados](#tipos-de-dados)
		- [Tipos de Dados Primitivos](#tipos-de-dados-primitivos)
		- [Tipos de Dados Não Primitivos](#tipos-de-dados-não-primitivos)
	- [Números](#números)
		- [Declarando Tipos de Dados Numéricos](#declarando-tipos-de-dados-numéricos)
		- [Objeto Math](#objeto-math)
			- [Gerador de Número Aleatório](#gerador-de-número-aleatório)
	- [Strings](#strings)
		- [Concatenação de Strings](#concatenação-de-strings)
			- [Concatenando com o Operador de Adição](#concatenando-com-o-operador-de-adição)
			- [Strings Literais Longas](#strings-literais-longas)
			- [Sequências de Escape em Strings](#sequências-de-escape-em-strings)
			- [Template Literals (Template Strings)](#template-literals-template-strings)
		- [Métodos de String](#métodos-de-string)
	- [Verificando Tipos de Dados e Conversão](#verificando-tipos-de-dados-e-conversão)
		- [Verificando Tipos de Dados](#verificando-tipos-de-dados)
		- [Alterando o Tipo de Dado (Casting)](#alterando-o-tipo-de-dado-casting)
			- [String para Int](#string-para-int)
			- [String para Float](#string-para-float)
			- [Float para Int](#float-para-int)
	- [💻 Dia 2: Exercícios](#-dia-2-exercícios)
		- [Exercício: Nível 1](#exercício-nível-1)
		- [Exercício: Nível 2](#exercício-nível-2)
		- [Exercícios: Nível 3](#exercícios-nível-3)

# 📔 Dia 2

## Tipos de Dados

Na seção anterior, mencionamos um pouco sobre tipos de dados. Dados ou valores têm tipos de dados. Os tipos de dados descrevem as características dos dados. Os tipos de dados podem ser divididos em dois:

1. Tipos de dados primitivos
2. Tipos de dados não primitivos (Referências de Objeto)

### Tipos de Dados Primitivos

Os tipos de dados primitivos em JavaScript incluem:

1. Números - Inteiros, floats
2. Strings - Qualquer dado entre aspas simples, aspas duplas ou crases
3. Booleanos - valor verdadeiro ou falso
4. Nulo - valor vazio ou nenhum valor
5. Indefinido - uma variável declarada sem um valor
6. Símbolo - Um valor único que pode ser gerado pelo construtor Symbol

Os tipos de dados não primitivos em JavaScript incluem:

1. Objetos
2. Arrays

Agora, vamos ver o que exatamente significam tipos de dados primitivos e não primitivos.
Tipos de dados *primitivos* são tipos de dados imutáveis (não modificáveis). Uma vez que um tipo de dado primitivo é criado, não podemos modificá-lo.

**Exemplo:**

```js
let palavra = 'JavaScript'
```

Se tentarmos modificar a string armazenada na variável *palavra*, o JavaScript deve gerar um erro. Qualquer tipo de dado entre aspas simples, aspas duplas ou crase é um tipo de dado string.

```js
palavra[0] = 'Y'
```

Esta expressão não altera a string armazenada na variável *palavra*. Portanto, podemos dizer que as strings não são modificáveis ou, em outras palavras, imutáveis.
Os tipos de dados primitivos são comparados por seus valores. Vamos comparar diferentes valores de dados. Veja o exemplo abaixo:

```js
let numUm = 3
let numDois = 3

console.log(numUm == numDois)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let luzAcesa = true
let luzApagada = false

console.log(luzAcesa == luzApagada) // false
```

### Tipos de Dados Não Primitivos

Tipos de dados *não primitivos* são modificáveis ou mutáveis. Podemos modificar o valor de tipos de dados não primitivos depois que eles são criados.
Vamos ver criando um array. Um array é uma lista de valores de dados em um colchete. Os arrays podem conter tipos de dados iguais ou diferentes. Os valores do array são referenciados por seu índice. No JavaScript, o índice do array começa em zero. Ou seja, o primeiro elemento de um array é encontrado no índice zero, o segundo elemento no índice um e o terceiro elemento no índice dois, etc.

```js
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]
```

Como você pode ver, um array, que é um tipo de dado não primitivo, é mutável. Os tipos de dados não primitivos não podem ser comparados por valor. Mesmo que dois tipos de dados não primitivos tenham as mesmas propriedades e valores, eles não são estritamente iguais.

```js
let nums = [1, 2, 3]
let numeros = [1, 2, 3]

console.log(nums == numeros)  // false

let usuarioUm = {
nome:'Asabeneh',
funcao:'ensinando',
pais:'Finlândia'
}

let usuarioDois = {
nome:'Asabeneh',
funcao:'ensinando',
pais:'Finlândia'
}

console.log(usuarioUm == usuarioDois) // false
```

Regra geral, não comparamos tipos de dados não primitivos. Não compare arrays, funções ou objetos.
Valores não primitivos são chamados de tipos de referência, porque são comparados por referência em vez de valor. Dois objetos são estritamente iguais apenas se se referirem ao mesmo objeto subjacente.

```js
let nums = [1, 2, 3]
let numeros = nums

console.log(nums == numeros)  // true

let usuarioUm = {
nome:'Asabeneh',
funcao:'ensinando',
pais:'Finlândia'
}

let usuarioDois = usuarioUm

console.log(usuarioUm == usuarioDois)  // true
```

Se você está tendo dificuldade em entender a diferença entre tipos de dados primitivos e não primitivos, você não é o único. Acalme-se e vá para a próxima seção e tente voltar depois de algum tempo. Agora vamos começar os tipos de dados pelo tipo número.

## Números

Números são inteiros e valores decimais que podem realizar todas as operações aritméticas.
Vamos ver alguns exemplos de Números.

### Declarando Tipos de Dados Numéricos

```js
let idade = 35
const gravidade = 9.81  // usamos const para valores que não mudam, constante gravitacional em m/s2
let massa = 72         // massa em Quilograma
const PI = 3.14       // pi uma constante geométrica

// Mais Exemplos
const pontoDeEbulicao = 100 // temperatura em oC, ponto de ebulição da água que é uma constante
const tempCorporal = 37      // oC temperatura média do corpo humano, que é uma constante

console.log(idade, gravidade, massa, PI, pontoDeEbulicao, tempCorporal)
```

### Objeto Math

Em JavaScript, o Objeto Math fornece muitos métodos para trabalhar com números.

```js
const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Arredondando para o número mais próximo
// se acima de 0.5 para cima, se menor que 0.5 para baixo

console.log(Math.round(PI))                // 3 para arredondar valores para o número mais próximo

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 arredondando para baixo

console.log(Math.ceil(PI))                 // 4 arredondando para cima

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, retorna o valor mínimo

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, retorna o valor máximo

const randNum = Math.random() // cria um número aleatório entre 0 e 0.999999
console.log(randNum)

// Vamos criar um número aleatório entre 0 e 10

const num = Math.floor(Math.random () * 11) // cria um número aleatório entre 0 e 10
console.log(num)

//Valor absoluto
console.log(Math.abs(-10))      // 10

//Raiz quadrada
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Potência
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logaritmo
// Retorna o logaritmo natural com base E de x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Retorna o logaritmo natural de 2 e 10 respectivamente
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometria
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
```

#### Gerador de Número Aleatório

O Objeto Math do JavaScript tem um método `random()` que gera um número de 0 a 0.999999999...

```js
let randomNum = Math.random() // gera de 0 a 0.999...
```

Agora, vamos ver como podemos usar o método `random()` para gerar um número aleatório entre 0 e 10:

```js
let randomNum = Math.random()         // gera de 0 a 0.999
let numEntreZeroEDez = randomNum * 11

console.log(numEntreZeroEDez)         // isso dá: min 0 e max 10.99

let randomNumArredondadoParaBaixo = Math.floor(numEntreZeroEDez)
console.log(randomNumArredondadoParaBaixo)    // isso dá entre 0 e 10
```

## Strings

Strings são textos, que estão sob aspas **_simples_**, **_duplas_** ou **_crase_**. Para declarar uma string, precisamos de um nome de variável, operador de atribuição e um valor entre aspas simples, aspas duplas ou crase.
Vamos ver alguns exemplos de strings:

```js
let espaco = ' '           // uma string de espaço vazio
let primeiroNome = 'Asabeneh'
let ultimoNome = 'Yetayeh'
let pais = 'Finlândia'
let cidade = 'Helsinki'
let linguagem = 'JavaScript'
let trabalho = 'professor'
let citacao = "O ditado,'Ver para crer' não está correto em 2020."
let citacaoComCrase = `O ditado,'Ver para crer' não está correto em 2020.`
```

### Concatenação de Strings

Conectar duas ou mais strings é chamado de concatenação.
Usando as strings declaradas na seção anterior de Strings:

```js
let nomeCompleto = primeiroNome + espaco + ultimoNome; // concatenação, juntando duas strings.
console.log(nomeCompleto);
```

```sh
Asabeneh Yetayeh
```

Podemos concatenar strings de maneiras diferentes.

#### Concatenando com o Operador de Adição

Concatenar usando o operador de adição é uma maneira antiga. Essa forma de concatenar é tediosa e propensa a erros. É bom saber como concatenar dessa forma, mas sugiro fortemente o uso de template strings do ES6 (explicado mais adiante).

```js
// Declarando diferentes variáveis de diferentes tipos de dados
let espaco = ' '
let primeiroNome = 'Asabeneh'
let ultimoNome = 'Yetayeh'
let pais = 'Finlândia'
let cidade = 'Helsinki'
let linguagem = 'JavaScript'
let trabalho = 'professor'
let idade = 250

let nomeCompleto = primeiroNome + espaco + ultimoNome
let infoPessoaUm = nomeCompleto + '. Eu tenho ' + idade + ' anos. Eu moro na ' + pais; // adição de string ES5

console.log(infoPessoaUm)
```

```sh
Asabeneh Yetayeh. Eu tenho 250 anos. Eu moro na Finlândia
```

#### Strings Literais Longas

Uma string pode ser um único caractere, um parágrafo ou uma página. Se o comprimento da string for muito grande, ela não caberá em uma linha. Podemos usar o caractere de barra invertida (\\) no final de cada linha para indicar que a string continuará na próxima linha.
**Exemplo:**

```js
const paragrafo = "Meu nome é Asabeneh Yetayeh. Eu moro na Finlândia, Helsinki.\
Eu sou um professor e amo ensinar. Eu ensino HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Análise de Dados e D3.js para quem estiver interessado em aprender. \
No final de 2019, eu estava pensando em expandir meu ensino e alcançar \
uma audiência global e comecei um desafio de Python de 20 de novembro a 19 de dezembro.\
Foi uma das experiências mais gratificantes e inspiradoras.\
Agora, estamos em 2020. Estou gostando de preparar o desafio 30DiasDeJavaScript e \
espero que você também esteja gostando."

console.log(paragrafo)
```

#### Sequências de Escape em Strings

Em JavaScript e outras linguagens de programação, `\` seguido por alguns caracteres é uma sequência de escape. Vamos ver os caracteres de escape mais comuns:

- \n: nova linha
- \t: Tab, significa 8 espaços
- \\\\: Barra invertida
- \\': Aspas simples (')
- \\": Aspas duplas (")
  
```js
console.log('Espero que todos estejam gostando do desafio 30 Dias de JavaScript.\nVocê está?') // quebra de linha
console.log('Dias\tTópicos\tExercícios')
console.log('Dia 1\t3\t5')
console.log('Dia 2\t3\t5')
console.log('Dia 3\t3\t5')
console.log('Dia 4\t3\t5')
console.log('Este é um símbolo de barra invertida (\\)') // Para escrever uma barra invertida
console.log('Em toda linguagem de programação começa com \"Olá, Mundo!\"')
console.log("Em toda linguagem de programação começa com \'Olá, Mundo!\'")
console.log('O ditado \'Ver para crer\' não está correto em 2020')
```

Saída no console:

```sh
Espero que todos estejam gostando do desafio 30 Dias de JavaScript.
Você está?
Dias  Tópicos  Exercícios
Dia 1 3 5
Dia 2 3 5
Dia 3 3 5
Dia 4 3 5
Este é um símbolo de barra invertida (\)
Em toda linguagem de programação começa com "Olá, Mundo!"
Em toda linguagem de programação começa com 'Olá, Mundo!'
O ditado 'Ver para crer' não está correto em 2020
```

#### Template Literals (Template Strings)

Para criar template strings, usamos duas crases. Podemos injetar dados como expressões dentro de uma template string. Para injetar dados, colocamos a expressão entre chaves ({}) precedida por um sinal de $. Veja a sintaxe abaixo.

```js
//Sintaxe
`Texto literal da string`
`Texto literal da string ${expressao}`
```

**Exemplo: 1**

```js
console.log(`A soma de 2 e 3 é 5`)              // escrevendo os dados estaticamente
let a = 2
let b = 3
console.log(`A soma de ${a} e ${b} é ${a + b}`) // injetando os dados dinamicamente
```

**Exemplo: 2**

```js
let primeiroNome = 'Asabeneh'
let ultimoNome = 'Yetayeh'
let pais = 'Finlândia'
let cidade = 'Helsinki'
let linguagem = 'JavaScript'
let trabalho = 'professor'
let idade = 250
let nomeCompleto = primeiroNome + ' ' + ultimoNome

let infoPessoaDois = `Eu sou ${nomeCompleto}. Eu tenho ${idade} anos. Eu moro na ${pais}.` //ES6 - método de interpolação de string
let infoPessoaTres = `Eu sou ${nomeCompleto}. Eu moro em ${cidade}, ${pais}. Eu sou um ${trabalho}. Eu ensino ${linguagem}.`
console.log(infoPessoaDois)
console.log(infoPessoaTres)
```

```sh
Eu sou Asabeneh Yetayeh. Eu tenho 250 anos. Eu moro na Finlândia.
Eu sou Asabeneh Yetayeh. Eu moro em Helsinki, Finlândia. Eu sou um professor. Eu ensino JavaScript.
```

Usando um template de string ou método de interpolação de string, podemos adicionar expressões, que podem ser um valor ou algumas operações (comparação, operações aritméticas, operação ternária).

```js
let a = 2
let b = 3
console.log(`${a} é maior que ${b}: ${a > b}`)
```

```sh
2 é maior que 3: false
```

### Métodos de String

Tudo em JavaScript é um objeto. Uma string é um tipo de dado primitivo, o que significa que não podemos modificá-la depois de criada. O objeto string tem muitos métodos de string. Existem diferentes métodos de string que podem nos ajudar a trabalhar com strings.

1. *length*: O método *length* da string retorna o número de caracteres em uma string, incluindo o espaço vazio.

**Exemplo:**

```js
let js = 'JavaScript'
console.log(js.length)         // 10
let primeiroNome = 'Asabeneh'
console.log(primeiroNome.length)  // 8
```

2. *Acessando caracteres em uma string*: Podemos acessar cada caractere em uma string usando seu índice. Na programação, a contagem começa em 0. O primeiro índice da string é zero, e o último índice é o comprimento da string menos um.

  ![Acessando string por índice](../images/string_indexes.png)
  
Vamos acessar diferentes caracteres na string 'JavaScript'.

```js
let string = 'JavaScript'
let primeiraLetra = string[0]

console.log(primeiraLetra)           // J

let segundaLetra = string[1]       // a
let terceiraLetra = string[2]
let ultimaLetra = string[9]

console.log(ultimaLetra)            // t

let ultimoIndice = string.length - 1

console.log(ultimoIndice)  // 9
console.log(string[ultimoIndice])    // t
```

3. *toUpperCase()*: este método transforma a string em letras maiúsculas.

```js
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let primeiroNome = 'Asabeneh'

console.log(primeiroNome.toUpperCase())  // ASABENEH

let pais = 'Finlândia'

console.log(pais.toUpperCase())    // FINLÂNDIA
```

4. *toLowerCase()*: este método transforma a string em letras minúsculas.

```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let primeiroNome = 'Asabeneh'

console.log(primeiroNome.toLowerCase())  // asabeneh

let pais = 'Finlândia'

console.log(pais.toLowerCase())   // finlândia
```

5. *substr()*: Leva dois argumentos, o índice inicial e o número de caracteres a serem fatiados.

```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let pais = 'Finlândia'
console.log(pais.substr(3, 4))   // lândia
```

6. *substring()*: Leva dois argumentos, o índice inicial e o índice final, mas não inclui o caractere no índice final.

```js
let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let pais = 'Finlândia'

console.log(pais.substring(0, 3))   // Fin
console.log(pais.substring(3, 7))   // lândia
console.log(pais.substring(3))      // lândia
```

7. *split()*: O método split divide uma string em um local especificado.

```js
let string = '30 Dias de JavaScript'

console.log(string.split())     // Converte para um array -> ["30 Dias de JavaScript"]
console.log(string.split(' '))  // Divide em um array no espaço -> ["30", "Dias", "de", "JavaScript"]

let primeiroNome = 'Asabeneh'

console.log(primeiroNome.split())    // Converte para um array -> ["Asabeneh"]
console.log(primeiroNome.split(''))  // Divide em um array a cada letra ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let paises = 'Finlândia, Suécia, Noruega, Dinamarca e Islândia'

console.log(paises.split(','))  // divide em um array na vírgula -> ["Finlândia", " Suécia", " Noruega", " Dinamarca", " e Islândia"]
console.log(paises.split(', ')) //  ["Finlândia", "Suécia", "Noruega", "Dinamarca", "e Islândia"]
```

8. *trim()*: Remove o espaço em branco no início ou no final de uma string.

```js
let string = '   30 Dias de JavaScript   '

console.log(string)
console.log(string.trim(' '))

let primeiroNome = ' Asabeneh '

console.log(primeiroNome)
console.log(primeiroNome.trim())  // ainda remove os espaços no início e no final da string
```

```sh
   30 Dias de JavasCript   
30 Dias de JavasCript
  Asabeneh 
Asabeneh
```

9. *includes()*: Recebe um argumento de substring e verifica se o argumento da substring existe na string. *includes()* retorna um booleano. Se uma substring existir em uma string, retorna verdadeiro, caso contrário, retorna falso.

```js
let string = '30 Dias de JavaScript'

console.log(string.includes('Dias'))     // true
console.log(string.includes('dias'))     // false - é sensível a maiúsculas e minúsculas!
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let pais = 'Finlândia'

console.log(pais.includes('fin'))     // false
console.log(pais.includes('Fin'))     // true
console.log(pais.includes('lândia'))    // true
console.log(pais.includes('Lândia'))    // false
```

10. *replace()*: recebe como parâmetro a substring antiga e uma nova substring.

```js
string.replace(substringAntiga, novaSubstring)
```

```js
let string = '30 Dias de JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Dias de Python

let pais = 'Finlândia'
console.log(pais.replace('Fin', 'Noman'))       // Nomanlândia
```

11. *charAt()*: Recebe um índice e retorna o valor nesse índice.

```js
string.charAt(indice)
```

```js
let string = '30 Dias de JavaScript'
console.log(string.charAt(0))        // 3

let ultimoIndice = string.length - 1
console.log(string.charAt(ultimoIndice)) // t```

12. *charCodeAt()*: Recebe um índice e retorna o código do caractere (número ASCII) do valor nesse índice.

```js
string.charCodeAt(indice)
```

```js
let string = '30 Dias de JavaScript'
console.log(string.charCodeAt(3))        // D, o número ASCII é 68

let ultimoIndice = string.length - 1
console.log(string.charCodeAt(ultimoIndice)) // t, o ASCII é 116
```

13. *indexOf()*: Recebe uma substring e, se a substring existir em uma string, retorna a primeira posição da substring; se não existir, retorna -1.

```js
string.indexOf(substring)
```

```js
let string = '30 Dias de JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Dias'))       // 3
console.log(string.indexOf('dias'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     // 15
console.log(string.indexOf('script'))     // -1
```

14. *lastIndexOf()*: Recebe uma substring e, se a substring existir em uma string, retorna a última posição da substring; se não existir, retorna -1.

```js
//sintaxe
string.lastIndexOf(substring)
```

```js
let string = 'Eu amo JavaScript. Se você não ama JavaScript, o que mais você pode amar.'

console.log(string.lastIndexOf('amar'))       // 69
console.log(string.lastIndexOf('você'))        // 32
console.log(string.lastIndexOf('JavaScript')) // 38
```

15. *concat()*: recebe muitas substrings e as une.

```js
string.concat(substring, substring, substring)
```

```js
let string = '30'
console.log(string.concat("Dias", "de", "JavaScript")) // 30DiasdeJavaScript

let pais = 'Fin'
console.log(pais.concat("lândia")) // Finlândia
```

16. *startsWith*: recebe uma substring como argumento e verifica se a string começa com essa substring especificada. Retorna um booleano (verdadeiro ou falso).

```js
//sintaxe
string.startsWith(substring)
```

```js
let string = 'Amor é a melhor coisa neste mundo'

console.log(string.startsWith('Amor'))   // true
console.log(string.startsWith('amor'))   // false
console.log(string.startsWith('mundo'))  // false

let pais = 'Finlândia'

console.log(pais.startsWith('Fin'))   // true
console.log(pais.startsWith('fin'))   // false
console.log(pais.startsWith('lândia'))  //  false
```

17. *endsWith*: recebe uma substring como argumento e verifica se a string termina com essa substring especificada. Retorna um booleano (verdadeiro ou falso).

```js
string.endsWith(substring)
```

```js
let string = 'Amor é o sentimento mais poderoso do mundo'

console.log(string.endsWith('mundo'))         // true
console.log(string.endsWith('amor'))          // false
console.log(string.endsWith('do mundo')) // true

let pais = 'Finlândia'

console.log(pais.endsWith('lândia'))         // true
console.log(pais.endsWith('fin'))          // false
console.log(pais.endsWith('Fin'))          //  false
```

18. *search*: recebe uma substring como argumento e retorna o índice da primeira correspondência. O valor de pesquisa pode ser uma string ou um padrão de expressão regular.

```js
string.search(substring)
```

```js
let string = 'Eu amo JavaScript. Se você não ama JavaScript, o que mais pode amar.'
console.log(string.search('amo'))          // 3
console.log(string.search(/javascript/gi))  // 7
```

19. *match*: recebe uma substring ou padrão de expressão regular como argumento e retorna um array se houver correspondência, caso contrário, retorna nulo. Vamos ver como é um padrão de expressão regular. Começa com o sinal / e termina com o sinal /.

```js
let string = 'amor'
let padraoUm = /amor/     // sem nenhuma flag
let padraoDois = /amor/gi   // g-significa pesquisar em todo o texto, i - insensível a maiúsculas e minúsculas
```

Sintaxe do Match

```js
// sintaxe
string.match(substring)
```

```js
let string = 'Eu amo JavaScript. Se você não ama JavaScript, o que mais pode amar.'
console.log(string.match('amo'))
```

```sh
["amo", index: 3, input: "Eu amo JavaScript. Se você não ama JavaScript, o que mais pode amar.", groups: undefined]
```

```js
let padrao = /amo/gi
console.log(string.match(padrao))   // ["amo", "ama", "amar"]
```

Vamos extrair números do texto usando uma expressão regular. Esta não é a seção de expressão regular, não entre em pânico! Abordaremos expressões regulares mais tarde.

```js
let txt = 'Em 2019, eu executei 30 Dias de Python. Agora, em 2020, estou super animado para começar este desafio'
let regEx = /\d+/

// d com caractere de escape significa d não um d normal, mas atua como um dígito
// + significa um ou mais números de dígitos,
// se houver g depois disso, significa global, pesquisar em todos os lugares.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
```

20. *repeat()*: recebe um número como argumento e retorna a versão repetida da string.

```js
string.repeat(n)
```

```js
let string = 'amor'
console.log(string.repeat(10)) // amoramoramoramoramoramoramoramoramoramor
```

## Verificando Tipos de Dados e Conversão

### Verificando Tipos de Dados

Para verificar o tipo de dado de uma determinada variável, usamos o método _typeof_.

**Exemplo:**

```js
// Diferentes tipos de dados em javascript
// Vamos declarar diferentes tipos de dados

let primeiroNome = 'Asabeneh'      // string
let ultimoNome = 'Yetayeh'        // string
let pais = 'Finlândia'         // string
let cidade = 'Helsinki'           // string
let idade = 250                   // número, não é minha idade real, não se preocupe com isso
let trabalho                         // undefined, porque um valor não foi atribuído

console.log(typeof 'Asabeneh')  // string
console.log(typeof primeiroNome)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof trabalho)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object
```

### Alterando o Tipo de Dado (Casting)

- Casting: Convertendo um tipo de dado para outro. Usamos _parseInt()_, _parseFloat()_, _Number()_, _+ sign_, _str()_
  Quando fazemos operações aritméticas, strings numéricas devem primeiro ser convertidas para inteiro ou float, caso contrário, retorna um erro.

#### String para Int

Podemos converter uma string numérica para um número. Qualquer número dentro de aspas é uma string numérica. Um exemplo de uma string numérica: '10', '5', etc.
Podemos converter string para número usando os seguintes métodos:

- parseInt()
- Number()
- Sinal de mais(+)

```js
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10
```

```js
let num = '10'
let numInt = Number(num)

console.log(numInt) // 10
```

```js
let num = '10'
let numInt = +num

console.log(numInt) // 10
```

#### String para Float

Podemos converter uma string de número float para um número float. Qualquer número float dentro de aspas é uma string de número float. Um exemplo de uma string de número float: '9.81', '3.14', '1.44', etc.
Podemos converter string float para número usando os seguintes métodos:

- parseFloat()
- Number()
- Sinal de mais(+)

```js
let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = +num

console.log(numFloat) // 9.81```

#### Float para Int

Podemos converter números float em inteiros.
Usamos o seguinte método para converter float para int:

- parseInt()
  
```js
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
```

🌕 Você é incrível. Você acabou de completar os desafios do dia 2 e está dois passos à frente em seu caminho para a grandeza. Agora faça alguns exercícios para o seu cérebro e para os seus músculos.

## 💻 Dia 2: Exercícios

### Exercício: Nível 1

1. Declare uma variável chamada `challenge` e atribua a ela um valor inicial **'30 Dias de JavaScript'**.
2. Imprima a string no console do navegador usando __console.log()__
3. Imprima o __length__ da string no console do navegador usando _console.log()_
4. Altere todos os caracteres da string para letras maiúsculas usando o método __toUpperCase()__
5. Altere todos os caracteres da string para letras minúsculas usando o método __toLowerCase()__
6. Corte (fatie) a primeira palavra da string usando o método __substr()__ ou __substring()__
7. Fatie a frase *Dias de JavaScript* de *30 Dias de JavaScript*.
8. Verifique se a string contém a palavra __Script__ usando o método __includes()__
9. Divida a __string__ em um __array__ usando o método __split()__
10. Divida a string 30 Dias de JavaScript no espaço usando o método __split()__
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __divida__ a string na vírgula e a transforme em um array.
12. Altere 30 Dias de JavaScript para 30 Dias de Python usando o método __replace()__.
13. Qual é o caractere no índice 15 na string '30 Dias de JavaScript'? Use o método __charAt()__.
14. Qual é o código do caractere J na string '30 Dias de JavaScript' usando __charCodeAt()__
15. Use __indexOf__ para determinar a posição da primeira ocorrência de __a__ em 30 Dias de JavaScript
16. Use __lastIndexOf__ para determinar a posição da última ocorrência de __a__ em 30 Dias de JavaScript.
17. Use __indexOf__ para encontrar a posição da primeira ocorrência da palavra __porque__ na seguinte frase:__'Você não pode terminar uma frase com porque porque porque é uma conjunção'__
18. Use __lastIndexOf__ para encontrar a posição da última ocorrência da palavra __porque__ na seguinte frase:__'Você não pode terminar uma frase com porque porque porque é uma conjunção'__
19. Use __search__ para encontrar a posição da primeira ocorrência da palavra __porque__ na seguinte frase:__'Você não pode terminar uma frase com porque porque porque é uma conjunção'__
20. Use __trim()__ para remover qualquer espaço em branco no início e no final de uma string. Ex: ' 30 Dias de JavaScript '.
21. Use o método __startsWith()__ com a string *30 Dias de JavaScript* e faça o resultado ser verdadeiro
22. Use o método __endsWith()__ com a string *30 Dias de JavaScript* e faça o resultado ser verdadeiro
23. Use o método __match()__ para encontrar todos os __a__’s em 30 Dias de JavaScript
24. Use __concat()__ e junte '30 Dias de' e 'JavaScript' em uma única string, '30 Dias de JavaScript'
25. Use o método __repeat()__ para imprimir 30 Dias de JavaScript 2 vezes

### Exercício: Nível 2

1. Usando console.log() imprima a seguinte declaração:

    ```sh
    A citação 'Não há exercício melhor para o coração do que se abaixar e levantar as pessoas.' de John Holmes nos ensina a ajudar uns aos outros.
    ```

2. Usando console.log() imprima a seguinte citação da Madre Teresa:

    ```sh
    "O amor não é paternalista e a caridade não se trata de pena, trata-se de amor. Caridade e amor são a mesma coisa - com caridade você dá amor, então não dê apenas dinheiro, mas estenda a mão."
    ```

3. Verifique se typeof '10' é exatamente igual a 10. Se não, torne-o exatamente igual.
4. Verifique se parseFloat('9.8') é igual a 10, se não, torne-o exatamente igual a 10.
5. Verifique se 'on' é encontrado tanto em python quanto em jargon
6. _Espero que este curso não esteja cheio de jargões_. Verifique se _jargão_ está na frase.
7. Gere um número aleatório entre 0 e 100, inclusive.
8. Gere um número aleatório entre 50 e 100, inclusive.
9. Gere um número aleatório entre 0 e 255, inclusive.
10. Acesse os caracteres da string 'JavaScript' usando um número aleatório.
11. Use console.log() e caracteres de escape para imprimir o seguinte padrão.

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

12. Use __substr__ para fatiar a frase __porque porque porque__ da seguinte sentença:__'Você não pode terminar uma frase com porque porque porque é uma conjunção'__

### Exercícios: Nível 3

1. 'O amor é a melhor coisa deste mundo. Alguns encontraram seu amor e alguns ainda estão procurando por seu amor.' Conte o número da palavra __amor__ nesta frase.
2. Use __match()__ para contar o número de todos os __porque__ na seguinte frase:__'Você não pode terminar uma frase com porque porque porque é uma conjunção'__
3. Limpe o seguinte texto e encontre a palavra mais frequente (dica, use replace e expressões regulares).

    ```js
        const frase = '%Eu $sou@% um %prof@essor%, &e& eu a%#mo %ens@in@ar%;. N@ão $há na@da; &tão& ma@is gratificante quanto educ@r &e& @emp%o@derar pe@ssoas. ;Eu achei o ens@ino m%a@is interessante qu@e qualquer out#ro %tra@balho. %Is@so te mo@tiv#a a ser um prof@essor!? %Es#te 30#Dias&DeJavaScript &é tam@bém $o $resul@tado do &amor& de ens&inar'
    ```

4. Calcule a renda anual total da pessoa extraindo os números do seguinte texto. 'Ele ganha 5000 euros de salário por mês, 10000 euros de bônus anual, 15000 euros de cursos online por mês.'

🎉 PARABÉNS! 🎉
