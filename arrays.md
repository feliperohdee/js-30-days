![Dia 5](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/banners/day_1_5.png)

- [📔 Dia 5](#-dia-5)
	- [Arrays](#arrays)
		- [Como criar um array vazio](#como-criar-um-array-vazio)
		- [Como criar um array com valores](#como-criar-um-array-com-valores)
		- [Criando um array usando split](#criando-um-array-usando-split)
		- [Acessando itens do array usando o índice](#acessando-itens-do-array-usando-o-índice)
		- [Modificando elementos do array](#modificando-elementos-do-array)
		- [Métodos para manipular arrays](#métodos-para-manipular-arrays)
			- [Construtor de Array](#construtor-de-array)
			- [Criando valores estáticos com fill](#criando-valores-estáticos-com-fill)
			- [Concatenando arrays usando concat](#concatenando-arrays-usando-concat)
			- [Obtendo o comprimento do array](#obtendo-o-comprimento-do-array)
			- [Obtendo o índice de um elemento no array](#obtendo-o-índice-de-um-elemento-no-array)
			- [Obtendo o último índice de um elemento no array](#obtendo-o-último-índice-de-um-elemento-no-array)
			- [Verificando se é um array](#verificando-se-é-um-array)
			- [Convertendo array para string](#convertendo-array-para-string)
			- [Juntando elementos do array](#juntando-elementos-do-array)
			- [Fatiando (slice) elementos do array](#fatiando-slice-elementos-do-array)
			- [Método splice em array](#método-splice-em-array)
			- [Adicionando um item a um array usando push](#adicionando-um-item-a-um-array-usando-push)
			- [Removendo o elemento final usando pop](#removendo-o-elemento-final-usando-pop)
			- [Removendo um elemento do início](#removendo-um-elemento-do-início)
			- [Adicionando um elemento no início](#adicionando-um-elemento-no-início)
			- [Invertendo a ordem do array](#invertendo-a-ordem-do-array)
			- [Ordenando elementos no array](#ordenando-elementos-no-array)
		- [Array de arrays](#array-de-arrays)
	- [💻 Exercício](#-exercício)
		- [Exercício: Nível 1](#exercício-nível-1)
		- [Exercício: Nível 2](#exercício-nível-2)
		- [Exercício: Nível 3](#exercício-nível-3)

# 📔 Dia 5

## Arrays

Em contraste com as variáveis, um array pode armazenar _múltiplos valores_. Cada valor em um array tem um _índice_, e cada índice tem uma _referência em um endereço de memória_. Cada valor pode ser acessado usando seus _índices_. O índice de um array começa em _zero_, e o índice do último elemento é o comprimento do array menos um.

Um array é uma coleção de diferentes tipos de dados que são ordenados e mutáveis (modificáveis). Um array permite armazenar elementos duplicados e diferentes tipos de dados. Um array pode estar vazio ou pode ter valores de diferentes tipos de dados.

### Como criar um array vazio

Em JavaScript, podemos criar um array de diferentes maneiras. Vamos ver as diferentes formas de criar um array.
É muito comum usar _const_ em vez de _let_ para declarar uma variável de array. Se você usa `const`, significa que não usará esse nome de variável novamente.

- Usando o construtor Array

```js
// sintaxe
const arr = Array()
// ou
// let arr = new Array()
console.log(arr) // []
```

- Usando colchetes ([])

```js
// sintaxe
// Esta é a maneira mais recomendada de criar uma lista vazia
const arr = []
console.log(arr)
```

### Como criar um array com valores

Array com valores iniciais. Usamos a propriedade _length_ para encontrar o comprimento de um array.

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array de números
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array de strings, frutas
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array de strings, vegetais
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array de strings, produtos
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array de tecnologias web
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array de strings, países

// Imprime o array e seu comprimento

console.log('Números:', numbers)
console.log('Quantidade de números:', numbers.length)

console.log('Frutas:', fruits)
console.log('Quantidade de frutas:', fruits.length)

console.log('Vegetais:', vegetables)
console.log('Quantidade de vegetais:', vegetables.length)

console.log('Produtos de origem animal:', animalProducts)
console.log('Quantidade de produtos de origem animal:', animalProducts.length)

console.log('Tecnologias web:', webTechs)
console.log('Quantidade de tecnologias web:', webTechs.length)

console.log('Países:', countries)
console.log('Quantidade de países:', countries.length)```

```sh
Números: [0, 3.14, 9.81, 37, 98.6, 100]
Quantidade de números: 6
Frutas: ['banana', 'orange', 'mango', 'lemon']
Quantidade de frutas: 4
Vegetais: ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
Quantidade de vegetais: 5
Produtos de origem animal: ['milk', 'meat', 'butter', 'yoghurt']
Quantidade de produtos de origem animal: 4
Tecnologias web: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
Quantidade de tecnologias web: 7
Países: ['Finland', 'Estonia', 'Denmark', 'Sweden', 'Norway']
Quantidade de países: 5
```

- Um array pode ter itens de diferentes tipos de dados

```js
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr contendo diferentes tipos de dados
console.log(arr)
```

### Criando um array usando split

Como vimos na seção anterior, podemos dividir uma string em diferentes posições e transformá-la em um array. Vejamos os exemplos abaixo.

```js
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'Eu amo ensinar e capacitar pessoas. Eu ensino HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// o texto tem caracteres especiais, pense em como você pode obter apenas as palavras
// ["Eu", "amo", "ensinar", "e", "capacitar", "pessoas.", "Eu", "ensino", "HTML,", "CSS,", "JS,", "React,", "Python"]
```

### Acessando itens do array usando o índice

Acessamos cada elemento em um array usando seu índice. O índice de um array começa em 0. A imagem abaixo mostra claramente o índice de cada elemento no array.

![arr index](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/array_index.png)

```js
const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // estamos acessando o primeiro item usando seu índice

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// O último índice pode ser calculado da seguinte forma

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit)  // lemon
```

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // conjunto de números

console.log(numbers.length)  // => para saber o tamanho do array, que é 6
console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0])      //  -> 0
console.log(numbers[5])      //  -> 100

let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]) // -> 100
```

```js
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // Lista de tecnologias web

console.log(webTechs)        // todos os itens do array
console.log(webTechs.length) // => para saber o tamanho do array, que é 7
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB

let lastIndex = webTechs.length - 1
console.log(webTechs[lastIndex]) // -> MongoDB
```

```js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
] // Lista de países

console.log(countries)      // -> todos os países no array
console.log(countries[0])   //  -> Albania
console.log(countries[10])  //  -> Kenya

let lastIndex = countries.length - 1;
console.log(countries[lastIndex]) //  -> Kenya
```

```js
const shoppingCart = [
  'Milk',
  'Mango',
  'Tomato',
  'Potato',
  'Avocado',
  'Meat',
  'Eggs',
  'Sugar'
] // Lista de produtos alimentícios

console.log(shoppingCart) // -> todo o carrinho de compras no array
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar

let lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]) //  -> Sugar
```

### Modificando elementos do array

Um array é mutável (modificável). Uma vez que um array é criado, podemos modificar o conteúdo dos seus elementos.

```js
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      // alterando 1 no índice 0 para 10
numbers[1] = 20      // alterando 2 no índice 1 para 20

console.log(numbers) // [10, 20, 3, 4, 5]

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries[0] = 'Afghanistan'  // Substituindo Albania por Afghanistan
let lastIndex = countries.length - 1
countries[lastIndex] = 'Korea' // Substituindo Kenya por Korea

console.log(countries)
```

```sh
["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]
```

### Métodos para manipular arrays

Existem diferentes métodos para manipular um array. Estes são alguns dos métodos disponíveis para lidar com arrays: _Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift_.

#### Construtor de Array

Array: Para criar um array.

```js
const arr = Array() // cria um array vazio
console.log(arr)

const eightEmptyValues = Array(8) // cria oito valores vazios
console.log(eightEmptyValues) // [empty x 8]
```

#### Criando valores estáticos com fill

fill: Preenche todos os elementos do array com um valor estático.

```js
const arr = Array() // cria um array vazio
console.log(arr)

const eightXvalues = Array(8).fill('X') // cria oito elementos com o valor 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // cria oito elementos com o valor '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // cria 4 elementos com o valor '4'
console.log(four4values) // [4, 4, 4, 4]
```

#### Concatenando arrays usando concat

concat: Para concatenar dois arrays.

```js
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]
```

```js
const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array de frutas
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array de vegetais
const fruitsAndVegetables = fruits.concat(vegetables)                 // concatena os dois arrays

console.log(fruitsAndVegetables)
```

```sh
["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]
```

#### Obtendo o comprimento do array

Length: Para saber o tamanho do array.

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length) // -> 5 é o tamanho do array
```

#### Obtendo o índice de um elemento no array

indexOf: Para verificar se um item existe em um array. Se existir, retorna o índice, senão retorna -1.

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0
console.log(numbers.indexOf(6)) // -> -1
```

Verifique se um elemento existe em um array.

- Verificar itens em uma lista

```js
// vamos verificar se 'banana' existe no array

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index === -1){
   console.log('Esta fruta não existe no array')  
} else {
    console.log('Esta fruta existe no array')
}
// Esta fruta existe no array

// podemos usar também o operador ternário aqui
index === -1 ? console.log('Esta fruta não existe no array'): console.log('Esta fruta existe no array')

// vamos verificar se 'avocado' existe no array
let indexOfAvocado = fruits.indexOf('avocado')  // -1, se o elemento não for encontrado o índice é -1
if(indexOfAvocado === -1){
   console.log('Esta fruta não existe no array')  
} else {
    console.log('Esta fruta existe no array')
}
// Esta fruta não existe no array
```

#### Obtendo o último índice de um elemento no array

lastIndexOf: Retorna a posição do último item no array. Se existir, retorna o índice, senão retorna -1.

```js
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6
console.log(numbers.lastIndexOf(4)) //  3
console.log(numbers.lastIndexOf(6)) // -1
```

includes: Para verificar se um item existe em um array. Se existir, retorna `true`, senão retorna `false`.

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false
console.log(numbers.includes(1)) // true
console.log(numbers.includes(6)) // false

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // Lista de tecnologias web

console.log(webTechs.includes('Node'))  // true
console.log(webTechs.includes('C'))     // false
```

#### Verificando se é um array

Array.isArray: Para verificar se o tipo de dado é um array.

```js
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100
console.log(Array.isArray(number)) // false
```

#### Convertendo array para string

toString: Converte o array para uma string.

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
```

#### Juntando elementos do array

join: É usado para juntar os elementos do array. O argumento que passamos no método `join` será inserido entre os elementos do array, que é retornado como uma string. Por padrão, ele junta com uma vírgula, mas podemos passar diferentes parâmetros de string para serem juntados entre os itens.

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // Lista de tecnologias web

console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
```

#### Fatiando (slice) elementos do array

Slice: Para cortar múltiplos itens em um intervalo. Ele recebe dois parâmetros: posição inicial e posição final. Não inclui a posição final.

```js
  const numbers = [1,2,3,4,5]

  console.log(numbers.slice()) // -> copia todos os itens
  console.log(numbers.slice(0)) // -> copia todos os itens
  console.log(numbers.slice(0, numbers.length)) // copia todos os itens
  console.log(numbers.slice(1,4)) // -> [2,3,4] // não inclui a posição final
```

#### Método splice em array

Splice: Recebe três parâmetros: Posição inicial, número de itens a serem removidos e número de itens a serem adicionados.

```js
  const numbers = [1, 2, 3, 4, 5]
  numbers.splice()
  console.log(numbers)                // -> remove todos os itens

```

```js
  const numbers = [1, 2, 3, 4, 5]
	numbers.splice(0,1)
  console.log(numbers)            // remove o primeiro item
```

```js
  const numbers = [1, 2, 3, 4, 5, 6]
	numbers.splice(3, 3, 7, 8, 9)
  console.log(numbers)  // -> [1, 2, 3, 7, 8, 9] //remove três itens e os substitui por três novos itens
```

#### Adicionando um item a um array usando push

Push: adicionando um item no final. Para adicionar um item ao final de um array existente, usamos o método `push`.

```js
// sintaxe
const arr  = ['item1', 'item2','item3']
arr.push('novo item')
console.log(arr)
// ['item1', 'item2','item3','novo item']
```

```js
const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers) // -> [1,2,3,4,5,6]

numbers.pop() // -> remove um item do final
console.log(numbers) // -> [1,2,3,4,5]
```

```js
let fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.push('apple')
console.log(fruits)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push('lime')
console.log(fruits)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']
```

#### Removendo o elemento final usando pop

pop: Removendo um item do final.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> remove um item do final
console.log(numbers) // -> [1,2,3,4]
```

#### Removendo um elemento do início

shift: Removendo um elemento do início do array.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove um item do início
console.log(numbers) // -> [2,3,4,5]```

#### Adicionando um elemento no início

unshift: Adicionando um elemento no início do array.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> adiciona um item no início
console.log(numbers) // -> [0,1,2,3,4,5]
```

#### Invertendo a ordem do array

reverse: inverte a ordem de um array.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.reverse() // -> inverte a ordem do array
console.log(numbers) // [5, 4, 3, 2, 1]

numbers.reverse()
console.log(numbers) // [1, 2, 3, 4, 5]
```

#### Ordenando elementos no array

sort: organiza os elementos do array em ordem crescente. `Sort` aceita uma função de callback; veremos como usar `sort` com uma função de callback nas próximas seções.

```js
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse() // após ordenar, podemos inverter
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
```

### Array de arrays

Um array pode armazenar diferentes tipos de dados, incluindo outro array. Vamos criar um array de arrays.

```js
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]```

🌕 Você é diligente e já conquistou bastante. Você acabou de completar os desafios do dia 5 e está 5 passos à frente em seu caminho para a grandeza. Agora faça alguns exercícios para o seu cérebro e para os seus músculos.

## 💻 Exercício

### Exercício: Nível 1

```js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
```

1. Declare um array _vazio_.
2. Declare um array com mais de 5 elementos.
3. Encontre o comprimento do seu array.
4. Obtenha o primeiro item, o item do meio e o último item do array.
5. Declare um array chamado _mixedDataTypes_, coloque diferentes tipos de dados no array e encontre o comprimento do array. O tamanho do array deve ser maior que 5.
6. Declare uma variável de array chamada `itCompanies` e atribua os valores iniciais Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon.
7. Imprima o array usando _console.log()_.
8. Imprima o número de empresas no array.
9. Imprima a primeira empresa, a do meio e a última empresa.
10. Imprima cada empresa.
11. Mude o nome de cada empresa para maiúsculas, uma por uma, e imprima-as.
12. Imprima o array como uma frase: Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon são grandes empresas de TI.
13. Verifique se uma determinada empresa existe no array `itCompanies`. Se existir, retorne a empresa, senão retorne "empresa _não encontrada_".
14. Filtre as empresas que têm mais de um 'o' sem usar o método `filter`.
15. Ordene o array usando o método _sort()_.
16. Inverta o array usando o método _reverse()_.
17. Fatie as 3 primeiras empresas do array.
18. Fatie as 3 últimas empresas do array.
19. Fatie a empresa ou empresas de TI do meio do array.
20. Remova a primeira empresa de TI do array.
21. Remova a empresa ou empresas de TI do meio do array.
22. Remova a última empresa de TI do array.
23. Remova todas as empresas de TI.

### Exercício: Nível 2

1. Crie um arquivo `countries.js` separado e armazene o array de países nele. Crie um arquivo `web_techs.js` separado e armazene o array `webTechs` nele. Acesse ambos os arquivos no arquivo `main.js`.
2. Primeiro, remova todas as pontuações, transforme a string em um array e conte o número de palavras no array.

    ```js
    let text =
    'Eu amo ensinar e capacitar pessoas. Eu ensino HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
    ```

    ```sh
    ["Eu", "amo", "ensinar", "e", "capacitar", "pessoas", "Eu", "ensino", "HTML", "CSS", "JS", "React", "Python"]
  
    13
    ```

3. No seguinte carrinho de compras, adicione, remova e edite itens:

    ```js
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    ```

   - adicione 'Meat' no início do seu carrinho de compras se ainda não tiver sido adicionado.
   - adicione 'Sugar' no final do seu carrinho de compras se ainda não tiver sido adicionado.
   - remova 'Honey' se você for alérgico a mel.
   - modifique 'Tea' para 'Green Tea'.
4. No array de países, verifique se 'Ethiopia' existe. Se existir, imprima 'ETHIOPIA'. Se não existir, adicione-o à lista de países.
5. No array `webTechs`, verifique se 'Sass' existe. Se existir, imprima 'Sass é um pré-processador de CSS'. Se não existir, adicione 'Sass' ao array e imprima o array.
6. Concatene as duas variáveis a seguir e armazene o resultado em uma variável `fullStack`.

    ```js
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
  
    console.log(fullStack)
    ```

    ```sh
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    ```

### Exercício: Nível 3

1. O seguinte é um array com as idades de 10 estudantes:

    ```js
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```

    - Ordene o array e encontre a idade mínima e máxima.
    - Encontre a idade mediana (o item do meio ou a média dos dois itens do meio).
    - Encontre a idade média (a soma de todos os itens dividida pelo número de itens).
    - Encontre a amplitude das idades (máximo menos mínimo).
    - Compare o valor de (mínimo - média) e (máximo - média), use o método _abs()_.
2. Fatie os dez primeiros países do [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js).
3. Encontre o(s) país(es) do meio no [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js).
4. Divida o array de países em dois arrays iguais se o número de países for par. Se não for par, adicione mais um país à primeira metade.
  
🎉 PARABÉNS! 🎉