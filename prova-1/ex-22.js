const cadastros = [
  { email: "user@test.com", senha: "123456", ativo: true },
  { email: "invalid-email", senha: "abc", ativo: false },
  { email: "admin@site.com", senha: "securepass", ativo: true },
  { email: "test@", senha: "12345", ativo: true },
];
// a) Use find para encontrar o primeiro cadastro que NÃO tem email válido (deve conter @ e .)

const validos = cadastros.find(
  (e) => !(e.email.includes("@") && e.email.includes("."))
);
console.log(validos);

// b) Use every para verificar se todos NÃO têm senhas fracas (< 6 caracteres)

const verificar = cadastros.every((s) => !(s.senha.length >= 6));
console.log(verificar);

// c) Use some para verificar se existe algum usuário que NÃO está ativo

const verificar2 = cadastros.some(({ ativo }) => {
  return ativo === true;
});
console.log(verificar2);
