const notas = [8, 9, 7, 5, 8, 6, 4];
// Use findIndex para encontrar a posição da primeira nota que NÃO é aprovação (< 6)

const reprovacao = notas.findIndex(n => !(n >= 6));
console.log(reprovacao);