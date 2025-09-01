const idades = [16, 22, 19, 25, 17];

// a) Use some para verificar se existe algum menor de idade

const verificar = idades.some(i => {
	return i <= 18;
});
console.log(verificar);

// b) Use every para verificar se todos são maiores de idade

const maior = idades.every(i => {
	return i >= 18;
});
console.log(maior);

// c) Use some com negação para verificar se existe alguém que NÃO é maior de idade

const negacao = idades.some(i => i < 18);
console.log(negacao);