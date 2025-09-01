const frutas = ["maçã", "banana", "laranja", "uva", "pêra"];

// a) Use findIndex para encontrar a posição de "laranja"

const encontrar = frutas.findIndex((f) =>  f === "laranja"
);
console.log(encontrar);

// b) Use findIndex para encontrar a posição da primeira fruta com mais de 4 letras

const frutas1 = ["maçã", "banana", "laranja", "uva", "pêra"];
const encontrar2 = frutas1.findIndex((f) =>  f.length > 4);
console.log(encontrar2);