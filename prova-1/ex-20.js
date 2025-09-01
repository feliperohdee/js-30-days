const biblioteca = [
  { 
    id: 1, 
    titulo: "JavaScript: The Good Parts", 
    autor: "Douglas Crockford",
    categorias: ["programacao", "web"], 
    disponivel: true,
    avaliacoes: [5, 4, 5, 3, 4]
  },
  { 
    id: 2, 
    titulo: "Clean Code", 
    autor: "Robert Martin",
    categorias: ["programacao", "boas-praticas"], 
    disponivel: false,
    avaliacoes: [5, 5, 4, 5]
  },
  { 
    id: 3, 
    titulo: "HTML & CSS", 
    autor: "Jon Duckett",
    categorias: ["web", "design"], 
    disponivel: true,
    avaliacoes: [4, 3, 4, 4, 3]
  }
];

// Implemente as seguintes funções usando os métodos apropriados:

// a) buscarPorAutor(nome): use find para encontrar livro de um autor específico

const buscarPorAutor = nome => biblioteca.find(l => l.autor === nome);
console.log(buscarPorAutor("Douglas Crockford"));
console.log(buscarPorAutor("Robert Martin"));
console.log(buscarPorAutor("Jon Duckett"));

// b) verificarDisponibilidade(titulo): use includes no titulo E verifique se disponível

const verificarDisponibilidade = titulo => {
  return biblioteca.some(l => l.titulo.includes(titulo) && l.disponivel);
};

console.log(verificarDisponibilidade("JavaScript: The Good Parts")); 
console.log(verificarDisponibilidade("Clean Code"));
 console.log(verificarDisponibilidade("HTML & CSS"));

// c) encontrarIndisponivel(): use findIndex para encontrar primeiro livro NÃO disponível  

const encontrarIndisponivel = biblioteca.findIndex(l => l.disponivel === false );
console.log(encontrarIndisponivel);

// d) verificarCategoria(categoria): use some para verificar se algum livro NÃO tem essa categoria

const verificarCategoria = categoria => biblioteca.some(l => !l.categorias.includes(categoria));

console.log(verificarCategoria("programacao")); 
console.log(verificarCategoria("design"));      
console.log(verificarCategoria("python"));     


// e) buscarBemAvaliado(): use find para encontrar livro que NÃO tem nenhuma avaliação < 4

const buscarBemAvaliado = biblioteca.find(l => l.avaliacoes.every(nota => nota >= 4));
console.log(buscarBemAvaliado); 

// f) analisarAcervo(): use every para verificar se todos os livros NÃO estão com média < 3.5

const analisarAcervo = biblioteca.every(l => {
  const media = l.avaliacoes.reduce((ac, nota) => ac + nota, 0) / (l.avaliacoes.length || 1);
  return media >= 3.5;
});
console.log(analisarAcervo); 
