const usuarios = [
  { id: 1, nome: "Ana", idade: 25 },
  { id: 2, nome: "Bruno", idade: 30 },
  { id: 3, nome: "Carlos", idade: 22 },
];

// a) Use find para encontrar o usuário com nome "Bruno"

const encontrar = usuarios.find((n) => {
  return n.nome === "Bruno"
});
console.log(encontrar);

// b) Use find para encontrar o primeiro usuário maior de idade (>= 18)

const maior = usuarios.find((i) => {
	 return i.idade >= 18
});
console.log(maior);

