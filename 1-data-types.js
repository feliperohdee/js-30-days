// EXERCICIO NIVEL 1

// 1. Declare uma variável chamada `challenge` e atribua a ela um valor inicial **'30 Dias de JavaScript'**.

let challenge = '30 Dias de JavaScript';

// 2. Imprima a string no console do navegador usando __console.log()__

console.log(challenge);

// 3. Imprima o __length__ da string no console do navegador usando _console.log()_

console.log(challenge.length);

// 4. Altere todos os caracteres da string para letras maiúsculas usando o método __toUpperCase()__

console.log(challenge.toUpperCase());

// 5. Altere todos os caracteres da string para letras minúsculas usando o método __toLowerCase()__

console.log(challenge.toLowerCase());

// 6. Corte (fatie) a primeira palavra da string usando o método substr() ou substring()

console.log(challenge.substring(0, 2)); 

// 7. Fatie uma frase Dias de JavaScript de 30 Dias de JavaScript .

console.log(challenge.substring(2, 21)); 

// 8. Verifique se a string contém a palavra Script usando o método include()

console.log (challenge.includes('Script'));

// 9. Divida uma string em um array usando o método split()

console.log(challenge.split());

// 10. Divida uma string 30 dias de JavaScript no espaço usando o método split()

console.log(challenge.split(''));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide uma string em uma virgula e a transforma em um array.

let paises = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(paises.split(','));

// 12. Altere 30 dias de JavaScript para 30 dias de Python usando o método replace() .

console.log(challenge.replace('JavaScript', 'Python'));

// 13. Qual é o caractere no índice 15 na string '30 Dias de JavaScript'? Use o método charAt() .

console.log(challenge.charAt(15))

// 14. Qual é o código do caractere J na string '30 Dias de JavaScript' usando charCodeAt()

console.log(challenge.charCodeAt(11));

// 15. Use indexOf para determinar a posição da primeira ocorrência de a em 30 dias de JavaScript

console.log(challenge.indexOf('a'));

// 16. Use lastIndexOf para determinar a posição da última ocorrência em 30 dias de JavaScript.

console.log(challenge.lastIndexOf('JavaScript'));

// 17. Use indexOf para encontrar a posição da primeira ocorrência da palavra porque na seguinte frase: 'Você não pode terminar uma frase com porque porque porque é uma conjunção'

let frase1 = 'Você não pode terminar uma frase com porque porque porque é uma conjunção';
console.log(frase.indexOf('porque'));

// 18. Use lastIndexOf para encontrar a posição da última ocorrência da palavra porque na seguinte frase: 'Você não pode terminar uma frase com porque porque porque é uma conjunção'

console.log(frase.lastIndexOf('porque'));

// 19. Use a busca para encontrar a posição da primeira ocorrência da palavra porque na seguinte frase: 'Você não pode terminar uma frase com porque porque porque é uma conjunção'

console.log(frase.search('porque'));

// 20. Use trim() para remover qualquer espaço em branco no início e no final de uma string. Ex: '30 Dias de JavaScript'.

console.log(challenge.trim());

// 21. Use o métodostartWith () com uma string 30 dias de JavaScript e faça o resultado ser verdadeiro

console.log(challenge.startsWith('30 Dias de JavaScript'));

// 22. Use o método endsWith() com uma string 30 dias de JavaScript e faça o resultado ser verdadeiro

console.log(challenge.endsWith('30 Dias de JavaScript'));


// 23. Use o método match() para encontrar todos os "A" em 30 dias de JavaScript (NAO ENTENDI)

console.log(challenge.match(30))

// 24. Use concat() e junte '30 Dias de' e 'JavaScript' em uma única string, '30 Dias de JavaScript'

let parte1 = '30 Dias de';
let parte2 = 'JavaScript';	
console.log(parte1.concat(' ', parte2));

// 25. Use o método repeat() para imprimir 30 dias de JavaScript 2 vezes

console.log(challenge.repeat(2));




// EXERCICIO NIVEL 2




// 1 Usando console.log() imprima a seguinte declaração: A citação 'Não há exercício melhor para o coração do que se abaixar e levantar as pessoas.' de John Holmes nos ensina a ajudar uns aos outros.

let citacao = "'Não há exercício melhor para o coração do que se abaixar e levantar as pessoas.'";
let autor = 'de John Holmes nos ensina a ajudar uns aos outros.'
console.log(citacao.concat('', autor));

// 2. Usando console.log() imprima a seguinte citação de Madre Teresa: "O amor não é paternalista e a caridade não se trata de pena, trata-se de amor. Caridade e amor são a mesma coisa - com caridade você dá amor, então não dê apenas dinheiro, mas estenda a mão."

let frase = '"O amor não é paternalista e a caridade não se trata de pena, trata-se de amor. Caridade e amor são a mesma coisa - com caridade você dá amor, então não dê apenas dinheiro, mas estenda a mão."';
console.log(frase);

// 3. Verifique se typeof '10' é exatamente igual a 10. Se não, torne-o exatamente igual.

let num10 = 10
console.log(num10)

// 4. Verifique se parseFloat('9.8') é igual a 10, se não, torne-o exatamente igual a 10.

let num = 9.8;
// let numInteiro = Math.ceil(parseInt(num))
console.log(Math.ceil(parseFloat(num)));

// 5. Verifique se 'on' é encontrado tanto em python quanto em jargão

console.log("python".includes("on") && "jargão".includes("on"));

// 6. Espero que este curso não esteja cheio de jargões . Verifique se o jargão está na frase. (*search= console.log -1 (n encontrado))

let fraseJargao = 'Espero que este curso não esteja cheio de jargões'; 
console.log(fraseJargao.includes('jargão')); 

// 7. Gere um número aleatório entre 0 e 100, inclusive.

let numAleatorio = Math.floor(Math.random () * 101);
console.log(numAleatorio);

// 8. Gere um número aleatório entre 50 e 100, inclusive.

let numAleatorio2 = Math.floor(Math.random (49) * 101);
console.log(numAleatorio);

// 9. Gere um número aleatório entre 0 e 255, inclusive.

let numAleatorio3 = Math.floor(Math.random () * 256);
console.log(numAleatorio);

// 10. Acesse os caracteres da string 'JavaScript' usando um número aleatório.

let text = 'JavaScritp';
let aleatorio = Math.floor(Math.random() * text.length);
console.log(aleatorio);

// 11. Use console.log() e caracteres de escape para imprimir o seguinte padrão.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

console.log("1 1 1 1 1");
console.log("2 1 2 4 8");
console.log("3 1 3 9 27");
console.log("4 1 4 16 64");
console.log("5 1 5 25 125");

// 12. Use substr para fatiar a frase porque porque porque da seguinte sentença: 'Você não pode terminar uma frase com porque porque porque é uma conjunção'

let frasePorque = 'Você não pode terminar uma frase com porque porque porque é uma conjunção';
console.log(frasePorque.substring(36, 57));





// EXERCICIO NIVEL 3





// 1. 'O amor é a melhor coisa deste mundo. Alguns encontraram seu amor e alguns ainda estão procurando por seu amor.' Conte o número da palavra amor nesta frase.

let fraseAmor = 'O amor é a melhor coisa deste mundo. Alguns encontraram seu amor e alguns ainda estão procurando por seu amor.';
console.log(fraseAmor.match(/amor/g));

// 2. Use match() para contar o número de todos os porque na seguinte frase:'Você não pode terminar uma frase com porque porque porque é uma conjunção'

let frasePq = 'Você não pode terminar uma frase com porque porque porque é uma conjunção';
console.log(frasePq.match(/porque/g));

// 3- Limpe o seguinte texto e encontre a palavra mais frequente (dica, use replace e expressões regulares).

// 		  const frase = '%Eu $sou@% um %prof@essor%, &e& eu a%#mo %ens@in@ar%;. N@ão $há na@da; &tão& ma@is gratificante quanto educ@r &e& @emp%o@derar pe@ssoas. ;Eu achei o ens@ino m%a@is interessante qu@e qualquer out#ro %tra@balho. %Is@so te mo@tiv#a a ser um prof@essor!? %Es#te 30#Dias&DeJavaScript &é tam@bém $o $resul@tado do &amor& de ens&inar'

let fraseA = '%Eu $sou@% um %prof@essor%, &e& eu a%#mo %ens@in@ar%;. N@ão $há na@da; &tão& ma@is gratificante quanto educ@r &e& @emp%o@derar pe@ssoas. ;Eu achei o ens@ino m%a@is interessante qu@e qualquer out#ro %tra@balho. %Is@so te mo@tiv#a a ser um prof@essor!? %Es#te 30#Dias&DeJavaScript &é tam@bém $o $resul@tado do &amor& de ens&inar'
let limparTexto = fraseA.replace


// 4. Calcule a renda anual total da pessoa extraindo os números do seguinte texto. 'Ele ganha 5000 euros de salário por mês, 10000 euros de bônus anual, 15000 euros de cursos online por mês.'

let textoB = 'Ele ganha 5000 euros de salário por mês, 10000 euros de bônus anual, 15000 euros de cursos online por mês.';
let valorA = 5000
let valorB = 10000
let valorC = 15000

console.log(valorA + valorB + valorC)