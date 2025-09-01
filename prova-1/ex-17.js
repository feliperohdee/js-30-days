const avaliacoes = [
  { produto: "A", nota: 4, recomendado: true },
  { produto: "B", nota: 2, recomendado: false },
  { produto: "C", nota: 5, recomendado: true },
  { produto: "D", nota: 3, recomendado: false }
];
// a) Use every para verificar se todos os produtos NÃO têm nota menor que 2

const encontrar = !avaliacoes.every(a => a < 2);
console.log(encontrar);

// b) Use some para verificar se existe pelo menos um produto que NÃO é recomendado

const encontrar2 = avaliacoes.some(a => a.recomendado === false);
console.log(encontrar2);

// c) Use every com negação para verificar se NÃO é verdade que todos são recomendados

const encontrar3 = avaliacoes.some(a => !(a.recomendado === true));
console.log(encontrar3);