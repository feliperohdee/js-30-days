# Prova de JavaScript - Arrays, Strings e Booleanos

## **Parte 1 - Operações Fundamentais**

### 1. Filter - Números pares e ímpares
```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a) Filtre apenas os números pares
// b) Filtre apenas os números ímpares
```

### 2. Find - Encontrar elemento
```javascript
const usuarios = [
  { id: 1, nome: "Ana", idade: 25 },
  { id: 2, nome: "Bruno", idade: 30 },
  { id: 3, nome: "Carlos", idade: 22 }
];
// a) Use find para encontrar o usuário com nome "Bruno"
// b) Use find para encontrar o primeiro usuário maior de idade (>= 18)
```

### 3. FindIndex - Encontrar posição
```javascript
const frutas = ["maçã", "banana", "laranja", "uva", "pêra"];
// a) Use findIndex para encontrar a posição de "laranja"
// b) Use findIndex para encontrar a posição da primeira fruta com mais de 4 letras
```

### 4. IndexOf - Buscar índice simples
```javascript
const cores = ["azul", "vermelho", "verde", "azul", "amarelo"];
// a) Use indexOf para encontrar a primeira ocorrência de "azul"
// b) Verifique se "roxo" existe no array usando indexOf
```

### 5. Includes - Verificar existência
```javascript
const linguagens = ["JavaScript", "Python", "Java", "C++"];
// a) Verifique se "Python" está no array
// b) Verifique se "PHP" está no array
```

## **Parte 2 - Negações Simples**

### 6. Filter com negação - NÃO múltiplos
```javascript
const numeros = [2, 3, 4, 6, 7, 8, 9, 12, 15];
// Filtre números que NÃO são múltiplos de 3
```

### 7. Find com negação - NÃO encontrar
```javascript
const produtos = [
  { nome: "Notebook", categoria: "eletrônicos", disponivel: true },
  { nome: "Mesa", categoria: "móveis", disponivel: false },
  { nome: "Mouse", categoria: "eletrônicos", disponivel: true }
];
// Use find para encontrar o primeiro produto que NÃO está disponível
```

### 8. FindIndex com negação - NÃO atende condição
```javascript
const notas = [8, 9, 7, 5, 8, 6, 4];
// Use findIndex para encontrar a posição da primeira nota que NÃO é aprovação (< 6)
```

### 9. Includes com negação - Verificar ausência
```javascript
const convidados = ["João", "Maria", "Pedro", "Ana"];
const presentes = ["João", "Carlos", "Maria"];
// Use includes com negação para encontrar quem da lista de convidados NÃO está presente
```

### 10. Some e Every - Testes lógicos
```javascript
const idades = [16, 22, 19, 25, 17];
// a) Use some para verificar se existe algum menor de idade
// b) Use every para verificar se todos são maiores de idade
// c) Use some com negação para verificar se existe alguém que NÃO é maior de idade
```

## **Parte 3 - Combinações e Strings**

### 11. String methods com arrays
```javascript
const nomes = ["  joão  ", "MARIA", "pedro", "  ANA  "];
// a) Use map para limpar espaços (trim) e padronizar (primeira letra maiúscula)
// b) Use filter para encontrar nomes que NÃO começam com vogal (após padronização)
```

### 12. FindIndex com strings
```javascript
const emails = ["user@gmail.com", "admin@empresa.com", "test@yahoo.com", "suporte@empresa.com"];
// a) Use findIndex para encontrar o primeiro email que NÃO é do domínio "empresa.com"
// b) Use find para encontrar um email que contenha "admin"
```

### 13. Múltiplos métodos combinados
```javascript
const vendedores = [
  { nome: "Carlos", vendas: [100, 200, 150] },
  { nome: "Ana", vendas: [300, 250, 400] },
  { nome: "Bruno", vendas: [50, 75, 25] }
];
// a) Use find para encontrar o vendedor que tem pelo menos uma venda > 300
// b) Use findIndex para encontrar a posição do vendedor que NÃO tem nenhuma venda > 200
```

### 14. Filter + Find combinados
```javascript
const tarefas = [
  { id: 1, titulo: "Estudar JS", concluida: false, prioridade: "alta" },
  { id: 2, titulo: "Fazer compras", concluida: true, prioridade: "baixa" },
  { id: 3, titulo: "Exercitar", concluida: false, prioridade: "média" },
  { id: 4, titulo: "Trabalhar", concluida: false, prioridade: "alta" }
];
// a) Filtre tarefas NÃO concluídas, depois use find para pegar a primeira de prioridade "alta"
// b) Use some para verificar se existe alguma tarefa de prioridade "alta" que NÃO está concluída
```

## **Parte 4 - Lógica Complexa**

### 15. Negação com múltiplas condições
```javascript
const funcionarios = [
  { nome: "João", depto: "TI", salario: 5000, ativo: true },
  { nome: "Maria", depto: "RH", salario: 3000, ativo: false },
  { nome: "Pedro", depto: "TI", salario: 4000, ativo: true },
  { nome: "Ana", depto: "Vendas", salario: 3500, ativo: true }
];
// a) Use filter para encontrar funcionários que NÃO são do TI E que NÃO ganham menos de 4000
// b) Use find para encontrar funcionário que NÃO está inativo OU que NÃO é do RH
```

### 16. FindIndex com lógica complexa
```javascript
const pedidos = [
  { numero: 1001, cliente: "João", itens: 3, total: 250, urgente: false },
  { numero: 1002, cliente: "Maria", itens: 1, total: 100, urgente: true },
  { numero: 1003, cliente: "Pedro", itens: 5, total: 500, urgente: false },
  { numero: 1004, cliente: "Ana", itens: 2, total: 200, urgente: true }
];
// Use findIndex para encontrar a posição do primeiro pedido que NÃO é urgente E que NÃO tem total menor que 300
```

### 17. Every e Some com negações
```javascript
const avaliacoes = [
  { produto: "A", nota: 4, recomendado: true },
  { produto: "B", nota: 2, recomendado: false },
  { produto: "C", nota: 5, recomendado: true },
  { produto: "D", nota: 3, recomendado: false }
];
// a) Use every para verificar se todos os produtos NÃO têm nota menor que 2
// b) Use some para verificar se existe pelo menos um produto que NÃO é recomendado
// c) Use every com negação para verificar se NÃO é verdade que todos são recomendados
```

### 18. Busca em arrays
```javascript
const turmas = [
  { nome: "Turma A", alunos: ["João", "Maria", "Pedro"] },
  { nome: "Turma B", alunos: ["Ana", "Carlos", "Diana"] },
  { nome: "Turma C", alunos: ["Bruno", "Carla", "Eduardo"] }
];
// a) Use find para encontrar a turma que NÃO contém o aluno "João"
// b) Use findIndex para encontrar a posição da turma que contém "Ana"
// c) Use some para verificar se existe alguma turma que NÃO tem exatamente 3 alunos
```

## **Parte 5 - Casos Complexos**

### 19. Análise de dados com múltiplos métodos
```javascript
const transacoes = [
  { id: "T001", tipo: "entrada", valor: 1000, categoria: "salario", data: "2024-01-15" },
  { id: "T002", tipo: "saida", valor: 200, categoria: "alimentacao", data: "2024-01-16" },
  { id: "T003", tipo: "entrada", valor: 50, categoria: "freelance", data: "2024-01-17" },
  { id: "T004", tipo: "saida", valor: 800, categoria: "aluguel", data: "2024-01-18" },
  { id: "T005", tipo: "saida", valor: 30, categoria: "alimentacao", data: "2024-01-19" }
];
// a) Use find para encontrar a primeira transação que NÃO é de saída E que NÃO é menor que 100
// b) Use filter para pegar transações que NÃO são de alimentação, depois findIndex para encontrar a primeira de "entrada"
// c) Use some para verificar se existe transação que NÃO é de categoria "aluguel" OU "salario"
```

### 20. Desafio final - Sistema de busca complexo
```javascript
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
// b) verificarDisponibilidade(titulo): use includes no titulo E verifique se disponível
// c) encontrarIndisponivel(): use findIndex para encontrar primeiro livro NÃO disponível  
// d) verificarCategoria(categoria): use some para verificar se algum livro NÃO tem essa categoria
// e) buscarBemAvaliado(): use find para encontrar livro que NÃO tem nenhuma avaliação < 4
// f) analisarAcervo(): use every para verificar se todos os livros NÃO estão com média < 3.5
```

## **Parte Bônus - Strings e Booleanos**

### 21. Manipulação avançada de strings
```javascript
const frases = [
  "JavaScript é incrível",
  "Aprender programação é fundamental", 
  "Arrays são muito úteis",
  "Boolean logic pode ser confusa"
];
// a) Use find para encontrar a primeira frase que NÃO contém a palavra "é"
// b) Use findIndex para encontrar a posição da frase que tem mais de 25 caracteres
// c) Use filter para pegar frases que NÃO começam com vogal
```

### 22. Validação de dados
```javascript
const cadastros = [
  { email: "user@test.com", senha: "123456", ativo: true },
  { email: "invalid-email", senha: "abc", ativo: false },
  { email: "admin@site.com", senha: "securepass", ativo: true },
  { email: "test@", senha: "12345", ativo: true }
];
// a) Use find para encontrar o primeiro cadastro que NÃO tem email válido (deve conter @ e .)
// b) Use every para verificar se todos NÃO têm senhas fracas (< 6 caracteres)
// c) Use some para verificar se existe algum usuário que NÃO está ativo
```

## **Dicas**

### **Métodos que retornam elementos:**
- `find()`: retorna o elemento ou `undefined`
- `filter()`: retorna novo array
- `includes()`: retorna `true/false`

### **Métodos que retornam posições:**
- `indexOf()`: retorna índice ou `-1`
- `findIndex()`: retorna índice ou `-1`

### **Métodos de teste:**
- `some()`: retorna `true` se PELO MENOS UM atende
- `every()`: retorna `true` se TODOS atendem

### **Negações importantes:**
- `!array.includes(item)` - item NÃO está no array
- `array.findIndex(x => !condicao)` - primeiro que NÃO atende
- `!array.every(condicao)` - NÃO é verdade que todos atendem
- `array.some(x => !condicao)` - existe algum que NÃO atende
