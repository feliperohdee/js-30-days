<div align="center">
  <h1> 30 Dias De JavaScript: Loops</h1>
</div>

![Day 5](https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/images/banners/day_1_6.png)

- [📔 Dia 6](#-dia-6)
	- [Loops](#loops)
		- [Loop for](#for-loop)
		- [Loop while](#while-loop)
		- [Loop do while](#do-while-loop)
		- [Loop for of](#for-of-loop)
		- [break](#break)
		- [continue](#continue)
	- [💻 Exercícios: Dia 6](#-exercisesday-6)
		- [Exercícios: Nível 1](#exercises-level-1)
		- [Exercícios: Nível 2](#exercises-level-2)
		- [Exercícios: Nível 3](#exercises-level-3)

# 📔 Dia 6

## Loops

A maioria das atividades que fazemos na vida são cheias de repetições. Imagine se eu pedir para você imprimir de 0 a 100 usando console.log(). Para implementar essa tarefa simples, pode levar de 2 a 5 minutos; esse tipo de tarefa tediosa e repetitiva pode ser realizada usando um loop. Se você prefere assistir aos vídeos, pode conferir os [tutoriais em vídeo](https://www.youtube.com/channel/UCM4xOopkYiPwJqyKsSqL9mw).

Em linguagens de programação, para realizar tarefas repetitivas, usamos diferentes tipos de loops. Os exemplos a seguir são os loops comumente usados em JavaScript e em outras linguagens de programação.

### Loop for

```js
// Estrutura do loop for
for(inicialização, condição, incremento/decremento){
  // o código vai aqui
}
```

```js
for(let i = 0; i <= 5; i++){
  console.log(i)
}

// 0 1 2 3 4 5
```

```js
for(let i = 5; i >= 0; i--){
  console.log(i)
}

// 5 4 3 2 1 0
```

```js
for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}
```

```sh
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
```

```js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
```

Somando todos os elementos no array

```js
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // pode ser abreviado, sum += numbers[i]

}

console.log(sum)  // 15
```

Criando um novo array baseado no array existente

```js
const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0
for(let i = 0; i < numbers.length; i++){
  newArr.push( numbers[i] ** 2)

}

console.log(newArr)  // [1, 4, 9, 16, 25]
```

```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### Loop while

```js
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5
```

### Loop do while

```js
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// 0 1 2 3 4 5
```

### Loop for of

Usamos o loop for of para arrays. É uma maneira muito prática de iterar por um array se não estamos interessados no índice de cada elemento no array.

```js
for (const element of arr) {
  // o código vai aqui
}
```

```js

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num)
}

// 1 4 9 16 25

// somando todos os números no array
let sum = 0
for (const num of numbers) {
  sum = sum + num  
	// pode ser abreviado assim, sum += num
  // depois disso, usaremos a sintaxe mais curta (+=, -=, *=, /= etc)
}
console.log(sum) // 15

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // pega apenas a primeira letra de cada elemento,  H C J R N M
}

```

```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countries){
  newArr.push(country.toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### break

Break é usado para interromper um loop.

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}

// 0 1 2
```

O código acima para se o 3 for encontrado no processo de iteração.

### continue

Usamos a palavra-chave *continue* para pular certas iterações. 

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

// 0 1 2 4 5
```

🌕 Você é tão corajoso, chegou até aqui. Agora, você ganhou o poder de automatizar tarefas repetitivas e tediosas. Você acabou de completar os desafios do dia 6 e está 6 passos à frente no seu caminho para a grandeza. Agora faça alguns exercícios para o seu cérebro e para o seu músculo.

## 💻 Exercícios: Dia 6

### Exercícios: Nível 1

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

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  ```

1. Itere de 0 a 10 usando o loop for, faça o mesmo usando os loops while e do while
2. Itere de 10 a 0 usando o loop for, faça o mesmo usando os loops while e do while
3. Itere de 0 a n usando o loop for
4. Escreva um loop que crie o seguinte padrão usando console.log():

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```

5. Use um loop para imprimir o seguinte padrão:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```

6. Usando um loop, imprima o seguinte padrão

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```

7. Use um loop for para iterar de 0 a 100 e imprimir apenas números pares
8. Use um loop for para iterar de 0 a 100 e imprimir apenas números ímpares
9. Use um loop for para iterar de 0 a 100 e imprimir apenas números primos
10. Use um loop for para iterar de 0 a 100 e imprimir a soma de todos os números.

    ```sh
    A soma de todos os números de 0 a 100 é 5050.
    ```

11. Use um loop for para iterar de 0 a 100 e imprimir a soma de todos os pares e a soma de todos os ímpares.

    ```sh
    A soma de todos os pares de 0 a 100 é 2550. E a soma de todos os ímpares de 0 a 100 é 2500.
    ```

12. Use um loop for para iterar de 0 a 100 e imprimir a soma de todos os pares e a soma de todos os ímpares. Imprima a soma dos pares e a soma dos ímpares como um array

    ```sh
      [2550, 2500]
    ```

13. Desenvolva um pequeno script que gere um array de 5 números aleatórios
14. Desenvolva um pequeno script que gere um array de 5 números aleatórios e os números devem ser únicos
15. Desenvolva um pequeno script que gere um id aleatório de seis caracteres:

    ```sh
    5j2khz
    ```

### Exercícios: Nível 2

1. Desenvolva um pequeno script que gere um id aleatório com qualquer número de caracteres:

    ```sh
      fe3jo1gl124g
    ```

    ```sh
      xkqci4utda1lmbelpkm03rba
    ```

1. Escreva um script que gere um número hexadecimal aleatório.

    ```sh
    '#ee33df'
    ```

1. Escreva um script que gere um número de cor rgb aleatório.

    ```sh
    rgb(240,180,80)
    ```

1. Usando o array de países acima, crie o seguinte novo array.

    ```sh
    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    ```

1. Usando o array de países acima, crie um array para os comprimentos dos países.

    ```sh
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    ```

1. Use o array de países para criar o seguinte array de arrays:

    ```sh
      [
      ['Albania', 'ALB', 7],
      ['Bolivia', 'BOL', 7],
      ['Canada', 'CAN', 6],
      ['Denmark', 'DEN', 7],
      ['Ethiopia', 'ETH', 8],
      ['Finland', 'FIN', 7],
      ['Germany', 'GER', 7],
      ['Hungary', 'HUN', 7],
      ['Ireland', 'IRE', 7],
      ['Iceland', 'ICE', 7],
      ['Japan', 'JAP', 5],
      ['Kenya', 'KEN', 5]
    ]
    ```

2. No array de países acima, verifique se há um país ou países que contêm a palavra 'land'. Se houver países contendo 'land', imprima-os como um array. Se não houver país contendo a palavra 'land', imprima 'Todos esses países são sem terra'.

    ```sh
    ['Finland','Ireland', 'Iceland']
    ```

3. No array de países acima, verifique se há um país ou países que terminam com o sufixo 'ia'. Se houver países que terminam com 'ia', imprima-os como um array. Se não houver país contendo a palavra 'ai', imprima 'Estes são países que terminam sem ia'.

    ```sh
    ['Albania', 'Bolivia','Ethiopia']
    ```

4. Usando o array de países acima, encontre o país que contém o maior número de caracteres.

      ```sh
      Ethiopia
      ```

5. Usando o array de países acima, encontre o país que contém apenas 5 caracteres.

    ```sh
    ['Japan', 'Kenya']
    ```

6. Encontre a palavra mais longa no array webTechs
7. Use o array webTechs para criar o seguinte array de arrays:

    ```sh
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    ```

8. Um aplicativo criado usando MongoDB, Express, React e Node é chamado de aplicativo MERN stack. Crie o acrônimo MERN usando o array mernStack
9. Itere pelo array ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando um loop for ou for of e imprima os itens.
10. Este é um array de frutas, ['banana', 'orange', 'mango', 'lemon'] inverta a ordem usando um loop sem usar o método reverse.
11. Imprima todos os elementos do array conforme mostrado abaixo.

    ```js
      const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]
    ````

    ```sh
      HTML
      CSS
      JS
      REACT
      NODE
      EXPRESS
      MONGODB
    ```

### Exercícios: Nível 3

1. Copie o array de países (evite mutação)
1. Arrays são mutáveis. Crie uma cópia do array que não modifica o original. Classifique o array copiado e armazene-o em uma variável sortedCountries
1. Classifique o array webTechs e o array mernStack
1. Extraia todos os países que contêm a palavra 'land' do [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e imprima-os como um array
1. Encontre o país que contém o maior número de caracteres no [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
1. Extraia todos os países que contêm a palavra 'land' do [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e imprima-os como um array
1. Extraia todos os países que contêm apenas quatro caracteres do [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e imprima-os como um array
1. Extraia todos os países que contêm duas ou mais palavras do [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e imprima-os como um array
1. Inverta o [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js), coloque cada país em maiúsculas e armazene-o como um array

🎉 PARABÉNS! 🎉
