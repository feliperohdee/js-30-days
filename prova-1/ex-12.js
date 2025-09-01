const emails = ["admin@empresa.com","user@gmail.com", "test@yahoo.com", "suporte@empresa.com"];

// a) Use findIndex para encontrar o primeiro email que NÃO é do domínio "empresa.com"

const empresa = emails.findIndex(e => {
	return !e.endsWith("empresa.com");
})
console.log(empresa);

// b) Use find para encontrar um email que contenha "admin"

const encontrar = emails.find(e => e.includes("admin"));
console.log(encontrar);