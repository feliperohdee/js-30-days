const nomes = ["  joão  ", "MARIA", "pedro", "  ANA  "];

// a) Use map para limpar espaços (trim) e padronizar (primeira letra maiúscula)

const arrumar = nomes.map(n => {
	let s = n.trim().toLowerCase();
	s = s.charAt(0).toUpperCase() + s.slice(1)
	return s
	
});

console.log(arrumar);

// b) Use filter para encontrar nomes que NÃO começam com vogal (após padronização)

const naoComecamComVogal = arrumar.filter(n => {
  return !["A", "E", "I", "O", "U"].includes(n.charAt(0));
});

console.log(naoComecamComVogal);