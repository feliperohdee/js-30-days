const transacoes = [
  { id: "T001", tipo: "entrada", valor: 10, categoria: "salario", data: "2024-01-15" },
  { id: "T002", tipo: "saida", valor: 200, categoria: "alimentacao", data: "2024-01-16" },
  { id: "T003", tipo: "entrada", valor: 500, categoria: "freelance", data: "2024-01-17" },
  { id: "T004", tipo: "saida", valor: 800, categoria: "aluguel", data: "2024-01-18" },
  { id: "T005", tipo: "saida", valor: 30, categoria: "alimentacao", data: "2024-01-19" }
];
// a) Use find para encontrar a primeira transação que NÃO é de saída E que NÃO é menor que 100

const encontrar = transacoes.find(t => t.tipo !== "saida" && t.valor > 100);
console.log(encontrar);

// // b) Use filter para pegar transações que NÃO são de alimentação, depois findIndex para encontrar a primeira de "entrada"

// const encontrar2 = transacoes.filter(t => t.categoria !== "alimentacao");
// const encontrar3 = encontrar2.findIndex(t => t.tipo === "entrada");

// console.log(encontrar2);
// console.log(encontrar3);



// // c) Use some para verificar se existe transação que NÃO é de categoria "aluguel" OU "salario"

// const verificar = transacoes.some(t => t.categoria !== "aluguel" || t.categoria !== "salario");
// console.log(verificar);