// Exercícios: Nível 1

// 1. Itere de 0 a 10 usando o loop for, faça o mesmo usando os loops while e do while

// FOR
for (let i = 0; i <= 10; i++) {
	console.log(i);
};

// WHILE
let i = 0;

while (i <= 10) {
	console.log(i);
	i++;
};

// DO...WHILE
let a = 0;

do {
	console.log(a);
	a++;
} while (a <= 10);

// 2. Itere de 10 a 0 usando o loop for, faça o mesmo usando os loops while e do while

// FOR
for (let i = 10; i >= 0; i--) {
	console.log(i);
};

// WHILE
let b = 10;

while (b >= 0) {
	console.log(b);
	b--;
};

// DO...WHILE
let c = 10;

do {
	console.log(c);
	c--;
} while (c >= 0);

// 3. Itere de 0 a n usando o loop for

let n = 20;

for (let i = 0; i <= n; i++) {
	console.log(i);
};

// 4. Escreva um loop que crie o seguinte padrão usando console.log():

for (let i = 1; i <= 7; i++) {
	console.log("#".repeat(i));
};

// 5. Use um loop para imprimir o seguinte padrão:

for (let i = 0; i <= 10; i++) {
	console.log(`${i} x ${i} = ${i * i}`)
};

// 6. Usando um loop, imprima o seguinte padrão

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

console.log( "i		iˆ2		1ˆ3");

for (let i = 0; i <= 10; i++) {
	console.log(`${i}		${i ** 2}		${i ** 3}`);
};

// 7. Use um loop for para iterar de 0 a 100 e imprimir apenas números pares

for (let i = 0; i <= 100; i++) {
	if (i % 2 === 0) {
	console.log(i);
	}
};

// 8. Use um loop for para iterar de 0 a 100 e imprimir apenas números ímpares

for (let i = 0; i <= 100; i++) {
	if (i % 2 !== 0) {
	console.log(i);
	}
};

// 9. Use um loop for para iterar de 0 a 100 e imprimir apenas números primos

for (let num = 2; num <= 100; num++) {
	let isPrime = true;


	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			isPrime = false;
			break;
		}
	}

	if (isPrime) {
		console.log(num);
	}
}

// 10. Use um loop for para iterar de 0 a 100 e imprimir a soma de todos os números.
// A soma de todos os números de 0 a 100 é 5050.

let soma = 0;

for (let i = 0; i <= 100; i++) {
	soma += i;
}

console.log(soma);

// 11. Use um loop for para iterar de 0 a 100 e imprimir a soma de todos os pares e a soma de todos os ímpares.
// A soma de todos os pares de 0 a 100 é 2550. E a soma de todos os ímpares de 0 a 100 é 2500. 

let somaPar = 0;
let somaImpar = 0;

for (let i = 0; i <= 100; i++) {
	if (i % 2 === 0) {
		somaPar += i;
	} else {
		somaImpar += i
	}
}

console.log(somaPar);
console.log(somaImpar);

// 12. Use um loop for para iterar de 0 a 100 e imprimir a soma de todos os pares e a soma de todos os ímpares. Imprima a soma dos pares e a soma dos ímpares como um array
//   [2550, 2500]

let somaPar2 = 0;
let somaImpar2 = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    somaPar2 += i;
  } else {
    somaImpar2 += i;
  }
}

console.log([somaPar2, somaImpar2]);

// 13. Desenvolva um pequeno script que gere um array de 5 números aleatórios

let numerosAleatorios = [];

for (let i = 0; i < 5; i++) {
  let numero = Math.floor(Math.random() * 10); 
  numerosAleatorios.push(numero);
}

console.log(numerosAleatorios);


// 14. Desenvolva um pequeno script que gere um array de 5 números aleatórios e os números devem ser únicos

let numerosUnicos = [];

while (numerosUnicos.length < 5) {
  let numero = Math.floor(Math.random() * 10); 
  if (!numerosUnicos.includes(numero)) {
    numerosUnicos.push(numero);
  }
}

console.log(numerosUnicos);


// 15. Desenvolva um pequeno script que gere um id aleatório de seis caracteres:
// 5j2khz
