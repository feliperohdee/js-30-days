const vendedores = [
  { nome: "Ana", vendas: [300, 250, 400] },
  { nome: "Carlos", vendas: [100, 200, 150] },
  { nome: "Bruno", vendas: [50, 75, 25] },
];
// a) Use find para encontrar o vendedor que tem pelo menos uma venda > 300

const encontrar = vendedores.find((v) => {
  return v.vendas.some((venda) => venda > 300);
});
console.log(encontrar);

// b) Use findIndex para encontrar a posição do vendedor que NÃO tem nenhuma venda > 200

const encontrar2 = vendedores.find((v) => !(v > 200));
/*
vendedores.find((v) => {
  return v.vendas.some((venda) => venda < 200);
});
*/
console.log(encontrar2);
