const funcionarios = [
  { nome: "João", depto: "TI", salario: 5000, ativo: true },
  { nome: "Maria", depto: "RH", salario: 3000, ativo: false },
  { nome: "Pedro", depto: "TI", salario: 4000, ativo: true },
  { nome: "Ana", depto: "Vendas", salario: 3500, ativo: true }
];
// a) Use filter para encontrar funcionários que NÃO são do TI E que NÃO ganham menos de 4000

const encontrar = funcionarios.filter(f => f.depto !== "TI" && f.salario >= 4000);

console.log(encontrar);


// b) Use find para encontrar funcionário que NÃO está inativo OU que NÃO é do RH

const encontrar2 = funcionarios.find(f => f.ativo === true || f.depto !== "RH");
console.log(encontrar2);