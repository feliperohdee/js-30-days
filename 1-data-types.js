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

let frase = 'Você não pode terminar uma frase com porque porque porque é uma conjunção';
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