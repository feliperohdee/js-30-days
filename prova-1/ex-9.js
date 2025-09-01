const convidados = ["João", "Maria", "Pedro", "Ana"];
const presentes = ["João", "Carlos", "Maria"];

// Use includes com negação para encontrar quem da lista de convidados NÃO está presente

const encontrar = convidados.filter(convidado => !presentes.includes(convidado));
console.log(encontrar);