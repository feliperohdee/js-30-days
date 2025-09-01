const tarefas = [
  { id: 1, titulo: "Estudar JS", concluida: false, prioridade: "alta" },
  { id: 2, titulo: "Fazer compras", concluida: true, prioridade: "baixa" },
  { id: 3, titulo: "Exercitar", concluida: false, prioridade: "média" },
  { id: 4, titulo: "Trabalhar", concluida: false, prioridade: "alta" }
];
// a) Filtre tarefas NÃO concluídas, depois use find para pegar a primeira de prioridade "alta"

const encontrar = tarefas.filter((t) => {
	return t.concluida === false});

const encontrar2 = encontrar.find(t => t.prioridade === "alta");	

console.log(encontrar2);

// b) Use some para verificar se existe alguma tarefa de prioridade "alta" que NÃO está concluída

const encontrar3 = encontrar.some(t => !(t.prioridade === "alta"));
console.log(encontrar3);