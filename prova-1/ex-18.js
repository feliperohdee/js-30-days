const turmas = [
  { nome: "Turma A", alunos: ["João", "Maria", "Pedro"] },
  { nome: "Turma B", alunos: ["Ana", "Carlos", "Diana"] },
  { nome: "Turma C", alunos: ["Bruno", "Carla", "Eduardo"] }
];
// a) Use find para encontrar a turma que NÃO contém o aluno "João"

const encontrar = turmas.find(t => !t.alunos.includes("João"));
console.log(encontrar);

// b) Use findIndex para encontrar a posição da turma que contém "Ana"

const encontrar2 = turmas.findIndex(t => t.alunos.includes("Ana"));
console.log(encontrar2);

// c) Use some para verificar se existe alguma turma que NÃO tem exatamente 3 alunos

const encontrar3 = turmas.some(t => t.alunos.length !== 3);
console.log(encontrar3);