![Trinta Dias de JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/banners/day_1_4.png)

- [📔 Dia 4](#-dia-4)
	- [Condicionais](#condicionais)
		- [If](#if)
		- [If Else](#if-else)
		- [If Else if Else](#if-else-if-else)
		- [Switch](#switch)
		- [Operadores Ternários](#operadores-ternários)
	- [💻 Exercícios](#-exercícios)
		- [Exercícios: Nível 1](#exercícios-nível-1)
		- [Exercícios: Nível 2](#exercícios-nível-2)
		- [Exercícios: Nível 3](#exercícios-nível-3)

# 📔 Dia 4

## Condicionais

As declarações condicionais são usadas para tomar decisões com base em diferentes condições. Por padrão, as declarações em um script JavaScript são executadas sequencialmente de cima para baixo. Se a lógica de processamento exigir, o fluxo sequencial de execução pode ser alterado de duas maneiras:

- Execução condicional: um bloco de uma ou mais declarações será executado se uma determinada expressão for verdadeira.
- Execução repetitiva: um bloco de uma ou mais declarações será executado repetidamente enquanto uma determinada expressão for verdadeira. Nesta seção, abordaremos as declarações _if_, _else_, _else if_. Os operadores lógicos e de comparação que aprendemos nas seções anteriores serão úteis aqui.

As condições podem ser implementadas usando as seguintes formas:

- if
- if else
- if else if else
- switch
- operador ternário

### If

Em JavaScript e outras linguagens de programação, a palavra-chave _if_ é usada para verificar se uma condição é verdadeira e para executar o bloco de código. Para criar uma condição `if`, precisamos da palavra-chave _if_, uma condição dentro de parênteses e um bloco de código dentro de chaves ({}).

```js
// sintaxe
if (condição) {
  //esta parte do código é executada para uma condição verdadeira (truthy)
}
```

**Exemplo:**

```js
let num = 3
if (num > 0) {
  console.log(`${num} é um número positivo`)
}
//  3 é um número positivo
```

Como você pode ver no exemplo de condição acima, 3 é maior que 0, então é um número positivo. A condição foi verdadeira e o bloco de código foi executado. No entanto, se a condição for falsa, não veremos nenhum resultado.

```js
let isRaining = true
if (isRaining) {
  console.log('Lembre-se de levar sua capa de chuva.')
}
```

O mesmo vale para a segunda condição, se `isRaining` for falso, o bloco `if` não será executado e não veremos nenhuma saída. Para ver o resultado de uma condição falsa, devemos ter outro bloco, que será o _else_.

### If Else

Se a condição for verdadeira, o primeiro bloco será executado, senão a condição `else` será executada.

```js
// sintaxe
if (condição) {
  // esta parte do código é executada para uma condição verdadeira (truthy)
} else {
  // esta parte do código é executada para uma condição falsa (falsy)
}
```

```js
let num = 3
if (num > 0) {
  console.log(`${num} é um número positivo`)
} else {
  console.log(`${num} é um número negativo`)
}
//  3 é um número positivo

num = -3
if (num > 0) {
  console.log(`${num} é um número positivo`)
} else {
  console.log(`${num} é um número negativo`)
}
//  -3 é um número negativo```

```js
let isRaining = true
if (isRaining) {
  console.log('Você precisa de uma capa de chuva.')
} else {
  console.log('Não precisa de capa de chuva.')
}
// Você precisa de uma capa de chuva.

isRaining = false
if (isRaining) {
  console.log('Você precisa de uma capa de chuva.')
} else {
  console.log('Não precisa de capa de chuva.')
}
// Não precisa de capa de chuva.
```

A última condição é falsa, portanto, o bloco `else` foi executado. E se tivermos mais de duas condições? Nesse caso, usaríamos as condições *else if*.

### If Else if Else

No nosso dia a dia, tomamos decisões diariamente. Tomamos decisões não verificando uma ou duas condições, mas sim com base em múltiplas condições. Assim como na nossa vida diária, a programação também está cheia de condições. Usamos *else if* quando temos múltiplas condições.

```js
// sintaxe
if (condição) {
     // código
} else if (condição) {
   // código
} else {
    //  código

}
```

**Exemplo:**

```js
let a = 0
if (a > 0) {
  console.log(`${a} é um número positivo`)
} else if (a < 0) {
  console.log(`${a} é um número negativo`)
} else if (a == 0) {
  console.log(`${a} é zero`)
} else {
  console.log(`${a} não é um número`)
}
```

```js
// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('Você precisa de uma capa de chuva.')
} else if (weather === 'cloudy') {
  console.log('Pode estar frio, você precisa de uma jaqueta.')
} else if (weather === 'sunny') {
  console.log('Saia livremente.')
} else {
  console.log('Não precisa de capa de chuva.')
}
```

### Switch

`Switch` é uma alternativa para **if else if else**.
A declaração `switch` começa com a palavra-chave *switch*, seguida por parênteses e um bloco de código. Dentro do bloco de código, teremos diferentes `case`. O bloco `case` é executado se o valor nos parênteses da declaração `switch` corresponder ao valor do `case`. A declaração `break` serve para terminar a execução, para que o código não continue a ser executado após a condição ser satisfeita. O bloco `default` é executado se nenhum dos `case` satisfizer a condição.

```js
switch(valorDoCase){
  case 1:
    // código
    break
  case 2:
   // código
   break
  case 3:
   // código
   break
  default:
   // código
}
```

```js
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('Você precisa de uma capa de chuva.')
    break
  case 'cloudy':
    console.log('Pode estar frio, você precisa de uma jaqueta.')
    break
  case 'sunny':
    console.log('Saia livremente.')
    break
  default:
    console.log('Não precisa de capa de chuva.')
}

// Switch Mais Exemplos
let dayUserInput = prompt('Que dia é hoje?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'segunda-feira':
    console.log('Hoje é segunda-feira')
    break
  case 'terça-feira':
    console.log('Hoje é terça-feira')
    break
  case 'quarta-feira':
    console.log('Hoje é quarta-feira')
    break
  case 'quinta-feira':
    console.log('Hoje é quinta-feira')
    break
  case 'sexta-feira':
    console.log('Hoje é sexta-feira')
    break
  case 'sábado':
    console.log('Hoje é sábado')
    break
  case 'domingo':
    console.log('Hoje é domingo')
    break
  default:
    console.log('Não é um dia da semana.')
}

```

// Exemplos para usar condições nos cases

```js
let num = prompt('Digite um número');
switch (true) {
  case num > 0:
    console.log('O número é positivo');
    break;
  case num == 0:
    console.log('O número é zero');
    break;
  case num < 0:
    console.log('O número é negativo');
    break;
  default:
    console.log('O valor inserido não era um número');
}
```

### Operadores Ternários

Outra maneira de escrever condicionais é usando operadores ternários. Já abordamos isso em outras seções, mas devemos mencioná-lo aqui também.

```js
let isRaining = true
isRaining
  ? console.log('Você precisa de uma capa de chuva.')
  : console.log('Não precisa de capa de chuva.')
```

🌕 Você é extraordinário e tem um potencial notável. Você acabou de completar os desafios do dia 4 e está quatro passos mais perto do seu caminho para a grandeza. Agora faça alguns exercícios para o seu cérebro e músculos.

## 💻 Exercícios

### Exercícios: Nível 1

1. Obtenha a entrada do usuário usando `prompt(“Digite sua idade:”)`. Se o usuário tiver 18 anos ou mais, dê o feedback: 'Você tem idade suficiente para dirigir', mas se não tiver 18, dê outro feedback informando para esperar o número de anos que ele precisa para completar 18.

   ```sh
   Digite sua idade: 30
   Você tem idade suficiente para dirigir.

   Digite sua idade: 15
   Faltam 3 anos para você poder dirigir.
   ```

2. Compare os valores de `myAge` e `yourAge` usando `if…else`. Com base na comparação, registre o resultado no console informando quem é mais velho (eu ou você). Use `prompt(“Digite sua idade:”)` para obter a idade como entrada.

   ```sh
   Digite sua idade: 30
   Você é 5 anos mais velho que eu.
   ```

3. Se `a` for maior que `b`, retorne 'a é maior que b', senão 'a é menor que b'. Tente implementar isso de duas maneiras:

    - usando if else
    - operador ternário.

    ```js
      let a = 4
      let b = 3
    ```

    ```sh
      4 é maior que 3
    ```

4. Números pares são divisíveis por 2 e o resto é zero. Como você verifica se um número é par ou ímpar usando JavaScript?

    ```sh
    Digite um número: 2
    2 é um número par

    Digite um número: 9
    9 é um número ímpar.
    ```

### Exercícios: Nível 2

1. Escreva um código que possa dar notas aos alunos de acordo com suas pontuações:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F
2. Verifique se a estação é Outono, Inverno, Primavera ou Verão.
   Se a entrada do usuário for:
   - Setembro, Outubro ou Novembro, a estação é Outono.
   - Dezembro, Janeiro ou Fevereiro, a estação é Inverno.
   - Março, Abril ou Maio, a estação é Primavera.
   - Junho, Julho ou Agosto, a estação é Verão.
3. Verifique se um dia é final de semana ou dia útil. Seu script receberá o dia como entrada.

```sh
    Qual é o dia hoje? Sábado
    Sábado é um final de semana.

    Qual é o dia hoje? sÁbaDo
    Sábado é um final de semana.

    Qual é o dia hoje? Sexta-feira
    Sexta-feira é um dia de trabalho.

    Qual é o dia hoje? SeXtA-FeIra
    Sexta-feira é um dia de trabalho.
  ```

### Exercícios: Nível 3

1. Escreva um programa que informe o número de dias em um mês.

  ```sh
    Digite um mês: Janeiro
    Janeiro tem 31 dias.

    Digite um mês: JANEIRO
    Janeiro tem 31 dias.

    Digite um mês: Fevereiro
    Fevereiro tem 28 dias.

    Digite um mês: FEvereiro
    Fevereiro tem 28 dias.
  ```

2. Escreva um programa que informe o número de dias em um mês, agora considerando o ano bissexto.


🎉 PARABÉNS! 🎉