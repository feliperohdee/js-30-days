const frases = [
  "JavaScript é incrível",
  "Aprender programação é fundamental", 
  "Arrays são muito úteis",
  "Boolean logic pode ser confusa"
];
// a) Use find para encontrar a primeira frase que NÃO contém a palavra "é"

const encontrar = frases.find(f => !(f.includes("é")));
console.log(encontrar);

// b) Use findIndex para encontrar a posição da frase que tem mais de 25 caracteres

const encontrar2 = frases.findIndex(f => f.length > 25);
console.log(encontrar2);

// c) Use filter para pegar frases que NÃO começam com vogal

const naoComecamComVogal = frases.filter(n => {
  return !["A", "E", "I", "O", "U"].includes(n.charAt(0));
});

console.log(naoComecamComVogal);