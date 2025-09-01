const produtos = [
  { nome: "Notebook", categoria: "eletrônicos", disponivel: true },
  { nome: "Mesa", categoria: "móveis", disponivel: false },
  { nome: "Mouse", categoria: "eletrônicos", disponivel: true }
];
// Use find para encontrar o primeiro produto que NÃO está disponível

const disponibilidade = produtos.find(p => {
	return p.disponivel === false
});
console.log(disponibilidade);