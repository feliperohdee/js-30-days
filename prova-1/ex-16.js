const pedidos = [
  { numero: 1001, cliente: "João", itens: 3, total: 250, urgente: false },
  { numero: 1002, cliente: "Maria", itens: 1, total: 100, urgente: true },
  { numero: 1003, cliente: "Pedro", itens: 5, total: 500, urgente: false },
  { numero: 1004, cliente: "Ana", itens: 2, total: 200, urgente: true }
];
// Use findIndex para encontrar a posição do primeiro pedido que NÃO é urgente E que NÃO tem total menor que 300

const encontrar = pedidos.findIndex(p => !p.urgente && p.total >= 300);

console.log(encontrar);