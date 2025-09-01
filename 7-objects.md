<div align="center">
  <h1> 30 Dias De JavaScript: Objetos</h1>
</div>

![Trinta Dias De JavaScript](https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/images/banners/day_1_8.png)

- [📔 Dia 8](#-dia-8)
	- [Escopo](#escopo)
		- [Objeto Global Window](#objeto-global-window)
		- [Escopo global](#escopo-global)
		- [Escopo local](#escopo-local)
	- [📔 Objeto](#-objeto)
		- [Criando um objeto vazio](#criando-um-objeto-vazio)
		- [Criando um objeto com valores](#criando-um-objeto-com-valores)
		- [Obtendo valores de um objeto](#obtendo-valores-de-um-objeto)
		- [Criando métodos de objeto](#criando-métodos-de-objeto)
		- [Definindo uma nova chave para um objeto](#definindo-uma-nova-chave-para-um-objeto)
		- [Métodos de Objeto](#métodos-de-objeto)
			- [Obtendo chaves de objeto usando Object.keys()](#obtendo-chaves-de-objeto-usando-objectkeys)
			- [Obtendo valores de objeto usando Object.values()](#obtendo-valores-de-objeto-usando-objectvalues)
			- [Obtendo chaves e valores de objeto usando Object.entries()](#obtendo-chaves-e-valores-de-objeto-usando-objectentries)
			- [Verificando propriedades usando hasOwnProperty()](#verificando-propriedades-usando-hasownproperty)
	- [💻 Exercícios](#-exercícios)
		- [Exercícios: Nível 1](#exercícios-nível-1)
		- [Exercícios: Nível 2](#exercícios-nível-2)
		- [Exercícios: Nível 3](#exercícios-nível-3)

# 📔 Dia 8

## Escopo

Variável é a parte fundamental da programação. Declaramos variáveis para armazenar diferentes tipos de dados. Para declarar uma variável usamos as palavras-chave _var_, _let_ e _const_. Uma variável pode ser declarada em diferentes escopos. Nesta seção, veremos as variáveis de escopo, o escopo das variáveis quando usamos var ou let.
Os escopos de variáveis podem ser:

- Global
- Local

Variáveis podem ser declaradas globalmente ou localmente. Veremos tanto o escopo global quanto o local.
Qualquer coisa declarada sem let, var ou const tem escopo global.

Vamos imaginar que temos um arquivo scope.js.

### Objeto Global Window

Sem usar console.log() abra seu navegador e verifique, você verá o valor de a e b se você digitar a ou b no navegador. Isso significa que a e b já estão disponíveis na janela.

```js
//scope.js
a = 'JavaScript' // declarar uma variável sem let ou const a torna disponível no objeto window e pode ser encontrada em qualquer lugar
b = 10 // esta é uma variável de escopo global e encontrada no objeto window
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // acessível
```

### Escopo global

Uma variável declarada globalmente pode ser acessada em qualquer lugar no mesmo arquivo. Mas o termo global é relativo. Pode ser global para o arquivo ou pode ser global em relação a algum bloco de código.

```js
//scope.js
let a = 'JavaScript' // é um escopo global, será encontrado em qualquer lugar neste arquivo
let b = 10 // é um escopo global, será encontrado em qualquer lugar neste arquivo
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, acessível
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, acessível
```

### Escopo local

Uma variável declarada como local pode ser acessada apenas em um determinado bloco de código.

- Escopo de Bloco
- Escopo de Função

```js
//scope.js
let a = 'JavaScript' // é um escopo global, será encontrado em qualquer lugar neste arquivo
let b = 10 // é um escopo global, será encontrado em qualquer lugar neste arquivo
// Escopo da função
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, acessível
  let value = false
// escopo do bloco
  if (true) {
    // podemos acessar da função e de fora da função, mas 
    // variáveis declaradas dentro do if não serão acessadas fora do bloco if
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // não podemos acessar c porque o escopo de c é apenas o bloco if
  console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, acessível
```

Agora você tem uma compreensão de escopo. Uma variável declarada com *var* tem escopo apenas de função, mas uma variável declarada com *let* ou *const* tem escopo de bloco (bloco de função, bloco if, bloco de loop, etc.). Bloco em JavaScript é um código entre duas chaves ({}).

```js
//scope.js
function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81

for(var i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
console.log(i) // 3

```

No ES6 e superior, existem *let* e *const*, então você não sofrerá com a astúcia do *var*. Quando usamos *let*, nossa variável tem escopo de bloco e não infectará outras partes do nosso código.

```js
//scope.js
function letsLearnScope() {
  // você pode usar let ou const, mas como gravidade é constante eu prefiro usar const
  const gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  const  gravity = 9.81
  console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for(let i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined

```

O escopo de *let* e *const* é o mesmo. A diferença é apenas na reatribuição. Não podemos alterar ou reatribuir o valor da variável `const`. Eu sugiro fortemente que você use *let* e *const*, pois ao usá-los você escreverá um código limpo e evitará erros difíceis de depurar. Como regra geral, você pode usar *let* para qualquer valor que mude, *const* para qualquer valor constante, e para um array, objeto, função de seta e expressão de função.

## 📔 Objeto

Tudo pode ser um objeto e os objetos têm propriedades e as propriedades têm valores, então um objeto é um par chave-valor. A ordem da chave não é reservada, ou seja, não há ordem.
Para criar um objeto literal, usamos duas chaves.

### Criando um objeto vazio

Um objeto vazio

```js
const person = {}
```

### Criando um objeto com valores

Agora, o objeto `person` possui as propriedades `firstName`, `lastName`, `age`, `location`, `skills` e `isMarried`. O valor das propriedades ou chaves pode ser uma string, número, booleano, um objeto, null, undefined ou uma função.

Vamos ver alguns exemplos de objeto. Cada chave possui um valor no objeto.

```js
const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // {length: 20, width: 20}

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true
}
console.log(person)
```

### Obtendo valores de um objeto

Podemos acessar os valores de um objeto usando dois métodos:

- usando . seguido do nome da chave se o nome da chave for uma palavra
- usando colchetes e aspas

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545'
}

// acessando valores usando .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// o valor pode ser acessado usando colchetes e o nome da chave
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// por exemplo, para acessar o número de telefone usamos apenas o método de colchetes
console.log(person['phone number'])
```

### Criando métodos de objeto

Agora, o objeto `person` possui a propriedade `getFullName`. `getFullName` é uma função dentro do objeto `person` e a chamamos de método de objeto. A palavra-chave `_this_` refere-se ao próprio objeto. Podemos usar a palavra `_this_` para acessar os valores de diferentes propriedades do objeto. Não podemos usar uma função de seta como método de objeto porque a palavra `this` se refere à janela dentro de uma função de seta, em vez do próprio objeto. Exemplo de objeto:

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getFullName())
// Asabeneh Yetayeh
```

### Definindo uma nova chave para um objeto

Um objeto é uma estrutura de dados mutável e podemos modificar o conteúdo de um objeto após sua criação.

Definindo novas chaves em um objeto

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())
```

```sh
Asabeneh Yetayeh é um professor.
Ele mora na Finlândia.
Ele ensina HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor e SasS.
```

### Métodos de Objeto

Existem diferentes métodos para manipular um objeto. Vejamos alguns dos métodos disponíveis.

_Object.assign_: Para copiar um objeto sem modificar o objeto original

```js
const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `Eu sou ${this.firstName} e moro em ${this.city}, ${this.country}. Tenho ${this.age} anos.`
  }
}

//Métodos de Objeto: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person)
console.log(copyPerson)
```

#### Obtendo chaves de objeto usando Object.keys()

_Object.keys_: Para obter as chaves ou propriedades de um objeto como um array

```js
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']
```

#### Obtendo valores de objeto usando Object.values()

_Object.values_:Para obter os valores de um objeto como um array

```js
const values = Object.values(copyPerson)
console.log(values)
```

#### Obtendo chaves e valores de objeto usando Object.entries()

_Object.entries_: Para obter as chaves e os valores em um array

```js
const entries = Object.entries(copyPerson)
console.log(entries)
```

#### Verificando propriedades usando hasOwnProperty()

_hasOwnProperty_: Para verificar se uma chave ou propriedade específica existe em um objeto

```js
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))
```

🌕 Você é incrível. Agora, você está super carregado com o poder dos objetos. Você acabou de completar os desafios do dia 8 e está 8 passos à frente no seu caminho para a grandeza. Agora faça alguns exercícios para o seu cérebro e para o seu músculo.

## 💻 Exercícios

### Exercícios: Nível 1

1. Crie um objeto vazio chamado dog
1. Imprima o objeto dog no console
1. Adicione as propriedades name, legs, color, age e bark para o objeto dog. A propriedade bark é um método que retorna _woof woof_
1. Obtenha os valores de name, legs, color, age e bark do objeto dog
1. Defina novas propriedades para o objeto dog: breed, getDogInfo

### Exercícios: Nível 2

1. Encontre a pessoa que tem muitas habilidades no objeto users.
1. Conte os usuários logados, conte os usuários que têm pontos maiores ou iguais a 50 do seguinte objeto.

   ````js
   const users = {
     Alex: {
       email: 'alex@alex.com',
       skills: ['HTML', 'CSS', 'JavaScript'],
       age: 20,
       isLoggedIn: false,
       points: 30
     },
     Asab: {
       email: 'asab@asab.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
       age: 25,
       isLoggedIn: false,
       points: 50
     },
     Brook: {
       email: 'daniel@daniel.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
       age: 30,
       isLoggedIn: true,
       points: 50
     },
     Daniel: {
       email: 'daniel@alex.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
       age: 20,
       isLoggedIn: false,
       points: 40
     },
     John: {
       email: 'john@john.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
       age: 20,
       isLoggedIn: true,
       points: 50
     },
     Thomas: {
       email: 'thomas@thomas.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
       age: 20,
       isLoggedIn: false,
       points: 40
     },
     Paul: {
       email: 'paul@paul.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
       age: 20,
       isLoggedIn: false,
       points: 40
     }
   }```

1. Encontre as pessoas que são desenvolvedores full stack MERN no objeto users
1. Defina seu nome no objeto users sem modificar o objeto users original
1. Obtenha todas as chaves ou propriedades do objeto users
1. Obtenha todos os valores do objeto users
1. Use o objeto countries para imprimir o nome de um país, capital, populações e idiomas.

### Exercícios: Nível 3

1. Crie um objeto literal chamado _personAccount_. Ele tem as propriedades _firstName, lastName, incomes, expenses_ e tem os métodos _totalIncome, totalExpense, accountInfo, addIncome, addExpense_ e _accountBalance_. Incomes é um conjunto de rendas e sua descrição e expenses é um conjunto de rendas e sua descrição.
2. **** Perguntas: 2, 3 e 4 são baseadas nos dois arrays seguintes: users e products ()

  ```js
      const users = [
      {
          _id: 'ab12ex',
          username: 'Alex',
          email: 'alex@alex.com',
          password: '123123',
          createdAt:'08/01/2020 9:00 AM',
          isLoggedIn: false
      },
      {
          _id: 'fg12cy',
          username: 'Asab',
          email: 'asab@asab.com',
          password: '123456',
          createdAt:'08/01/2020 9:30 AM',
          isLoggedIn: true
      },
      {
          _id: 'zwf8md',
          username: 'Brook',
          email: 'brook@brook.com',
          password: '123111',
          createdAt:'08/01/2020 9:45 AM',
          isLoggedIn: true
      },
      {
          _id: 'eefamr',
          username: 'Martha',
          email: 'martha@martha.com',
          password: '123222',
          createdAt:'08/01/2020 9:50 AM',
          isLoggedIn: false
      },
      {
          _id: 'ghderc',
          username: 'Thomas',
          email: 'thomas@thomas.com',
          password: '123333',
          createdAt:'08/01/2020 10:00 AM',
          isLoggedIn: false
      }
      ];

      const products = [
    {
      _id: 'eedfcf',
      name: 'celular',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: Sistema Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV: Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]
  ```

  Imagine que você está obtendo a coleção de usuários acima de um banco de dados MongoDB.
    a. Crie uma função chamada signUp que permite ao usuário ser adicionado à coleção. Se o usuário já existir, informe-o que ele já possui uma conta.
    b. Crie uma função chamada signIn que permite ao usuário fazer login no aplicativo

3. O array de produtos possui três elementos e cada um deles possui seis propriedades.
    a. Crie uma função chamada rateProduct que avalia o produto
    b. Crie uma função chamada averageRating que calcula a avaliação média de um produto

4. Crie uma função chamada likeProduct. Esta função ajudará a curtir o produto se ele não tiver sido curtido e remover a curtida se já tiver sido curtido.


🎉 PARABÉNS! 🎉
