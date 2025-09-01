const numeros = [2, 3, 4, 6, 7, 8, 9, 12, 15];

// Filtre números que NÃO são múltiplos de 3

const naoMultiplos = numeros.filter(n => {
	return n % 3 !== 0
});
console.log(naoMultiplos);
