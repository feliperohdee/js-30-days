const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a) Filtre apenas os números pares

const pares = numeros.filter(n => n % 2 === 0);
console.log(pares);

// b) Filtre apenas os números ímpares

const impares = numeros.filter(n => n % 2 !== 0);
console.log(impares);