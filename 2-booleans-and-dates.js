// 1.1 Declare as variáveis firstName, lastName, country, city, age, isMarried, year e atribua valores a elas. Use o operador typeof para verificar os diferentes tipos de dados.
let firstName = "Ana";
let lastName = "Carolina";
let country = "Brasil";
let city = "Jaragua do Sul";
let age = 27;
let isMarried = true;
let year = 2025

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 1.2 Verifique se o typeof de '10' é igual a 10.

console.log(typeof '10' == typeof 10);

// 1.3 Verifique se parseInt('9.8') é igual a 10.

console.log(parseInt('9.8') == 10);

// 1.4 O valor booleano é verdadeiro ou falso.
// A: Escreva três instruções em JavaScript que resultem em um valor truthy.
let numero = 1;
console.log(Boolean (numero));

let nome = "Ana";
console.log(Boolean (nome));

let lista = [];
console.log(Boolean (lista));

// B: Escreva três instruções em JavaScript que resultem em um valor falsy.

let numero0 = 0;
console.log(Boolean (numero0));

let texto = "";
console.log(Boolean (texto));

let nada = null;
console.log(Boolean (nada));

// 1.5 Descubra o resultado da seguinte expressão de comparação primeiro sem usar console.log(). Depois de decidir o resultado, confirme-o usando console.log().
		

		// 4 > 3 -  TRUE

		console.log(4 > 3);

		// 4 >= 3 -  TRUE

		console.log(4 >= 3);

		// 4 < 3. - FALSE

		console.log(4 < 3);

		// 4 <= 3 - FALSE

		console.log(4 <= 3);

		// 4 == 4 - TRUE

		console.log(4 == 4);

		// 4 === 4 - TRUE

		console.log(4 === 4);

		// 4 != 4 - FALSE

		console.log(4 != 4);

		// 4 !== 4 - FALSE

		console.log(4 !== 4);

		// 4 != '4' - false

		console.log(4 != '4');

		// 4 == '4' - true

		console.log(4 == '4');

		// 4 === '4' - FALSE

		console.log(4 === '4');

		// Encontre o comprimento de 'python' e 'jargon' e faça uma declaração de comparação falsy.

		let palavra1 = 'python';
		let palavra2 = 'jargon';

		console.log(palavra1.length != palavra2.length);  

// 1.6 Descubra o resultado das seguintes expressões primeiro sem usar console.log(). Depois de decidir o resultado, confirme-o usando console.log().
		
		// 4 > 3 && 10 < 12 TRUE
		console.log(4 > 3 && 10 < 12);

		// 4 > 3 && 10 > 12 FALSE
		console.log(4 > 3 && 10 > 12);

		// 4 > 3 || 10 < 12 TRUE
		console.log(4 > 3 || 10 < 12);

		// 4 > 3 || 10 > 12 TRUE
		console.log(4 > 3 || 10 > 12);

		// !(4 > 3) FALSE
		console.log(!(4 > 3));

		// !(4 < 3) TRUE
		console.log(!(4 < 3));

		// !(false) TRUE
		console.log(!(false));

		// !(4 > 3 && 10 < 12) FALSE'
		console.log(!(4 > 3 && 10 < 12));

		// !(4 > 3 && 10 > 12) TRUE
		console.log(!(4 > 3 && 10 > 12));

		// !(4 === '4') TRUE
		console.log(!(4 === '4'));

		// Não existe 'on' tanto em 'dragon' quanto em 'python'. FALSE
		let palavraOn1 = 'dragon';
		let palavraOn2 = 'python';

		console.log(!palavraOn1.includes('on') && !palavraOn2.includes('on'));
		
// 	1.7 Use o objeto Date para realizar as seguintes atividades:

		// Qual é o ano hoje?
		let ano = new Date();
		console.log(ano.getFullYear());

		// Qual é o mês hoje como um número?
		let mes = new Date();
		console.log(mes.getMonth());

		// Qual é a data de hoje?
		let data = new Date();
		console.log(data);

		// Qual é o dia de hoje como um número?
		let hoje = new Date();
		console.log(hoje.getDay());

		// Quais são as horas agora?
		let hora = new Date();
		console.log(hora.getHours());

		// Quais são os minutos agora?
		let min = new Date();
		console.log(min.getMinutes());

		// Descubra o número de segundos decorridos desde 1º de janeiro de 1970 até agora.
		let tempo = new Date().getTime();
		console.log(tempo);

		// Exercícios: Nível 2

		// 1.1 Escreva um script que solicite ao usuário para inserir a base e a altura de um triângulo e calcule a área do triângulo (área = 0.5 * b * h).

		let base = prompt("Digite a base");
		let altura = prompt("Digite a altura");

		base = Number(base);
		altura = Number(altura);

		let area = 0.5 * base * altura;

		console.log('A área do triângulo é ' + area);

		// 1.2 Escreva um script que solicite ao usuário para inserir o lado a, o lado b e o lado c de um triângulo e calcule o perímetro do triângulo (perímetro = a + b + c).

		let ladoA = prompt("Digite o lado A");
		let ladoB = prompt("Digite o lado B");
		let ladoC = prompt("Digite o lado C");

		ladoA = Number(ladoA);
		ladoB = Number(ladoB);
		ladoC = Number(ladoC);

		let perimetro = ladoA + ladoB + ladoC;

		console.log('O perímetro do triângulo é ' + perimetro);

		// 1.3 Obtenha o comprimento e a largura usando prompt e calcule a área de um retângulo (área = comprimento * largura) e o perímetro do retângulo (perímetro = 2 * (comprimento + largura)).

		let comprimento = prompt("Digite o comprimento");
		let largura = prompt("Digite a largura");

		comprimento = Number(comprimento);
		largura = Number(largura);

		let area1 = comprimento * largura;
		let perimetro1 = 2 * (comprimento + largura);

		console.log('A área do retângulo é ' + area1);
		console.log('O perímetro do retângulo é ' + perimetro1);

		// 1.4 Obtenha o raio usando prompt e calcule a área de um círculo (área = pi * r * r) e a circunferência de um círculo (c = 2 * pi * r), onde pi = 3.14.

		let raio = prompt("Digite o raio");

		raio = Number(raio);
		pi = (3.14);

		let area2 = pi * raio * raio;
		let circunferencia = 2 * pi * raio;

		console.log('A área do círculo é ' + area2);
		console.log('A circunferência do círculo é ' + circunferencia);

		// 1.5 Calcule a inclinação, a intersecção com o eixo x e a intersecção com o eixo y de y = 2x - 2.
	 


		// 1.6 A inclinação é m = (y₂-y₁)/(x₂-x₁). Encontre a inclinação entre o ponto (2, 2) e o ponto (6, 10).
		
		// 1.7 Compare a inclinação das duas questões acima.

		// 1.8 Calcule o valor de y (y = x² + 6x + 9). Tente usar diferentes valores de x e descubra para qual valor de x, y é 0.
		
		// 1.9 Escreva um script que solicite ao usuário para inserir as horas e a taxa por hora. Calcule o pagamento da pessoa.

		let horas = prompt("Digite as horas");
		let taxa = prompt("Digite a taxa por hora");

		horas = Number(horas);
		taxa = Number(taxa);

		let ganho = horas * taxa;

		console.log('Seu ganho semanal é ' + ganho);

		// Se o comprimento do seu nome for maior que 7, diga "seu nome é longo", senão diga "seu nome é curto".

		let nome1 = prompt("Digite seu nome");
		nome1 = String(nome1);

			nome1.length > 7
				? console.log("Seu nome é longo")
				: console.log("Seu nome é curto");
			

		// Compare o comprimento do seu primeiro nome com o do seu sobrenome e você deve obter esta saída.

		let firstName1 = prompt("Digite seu primeiro nome");
		let lastName1 = prompt("Digite seu sobrenome");

			firstName1.length > lastName1.length
				? console.log('Seu primeiro nome, ' + firstName1 , 'é mais longo que seu sobrenome, ' + lastName1)
				: console.log('Seu primeiro nome, ' + firstName1 , 'é mais curto que seu sobrenome, ' + lastName1);
			

		// Declare duas variáveis, myAge e yourAge, e atribua valores iniciais a elas. 

		let myAge = 27;
		let yourAge = prompt("Digite sua idade");	
		yourAge = Number(yourAge);

		let comparar = Math.abs(myAge - yourAge);

		if(myAge === yourAge){
			console.log('Temos a mesma idade')
		} else{
			myAge > yourAge
				? console.log('Eu sou ' + comparar , 'anos mais velho que você.')
				: console.log('Eu sou ' + comparar , 'anos mais novo que você.');
		}
			

		// Usando prompt, obtenha o ano em que o usuário nasceu e, se o usuário tiver 18 anos ou mais, permita que ele dirija; caso contrário, diga ao usuário para esperar uma certa quantidade de anos.

		let anoNascimento = prompt("Digite o ano em que você nasceu:");
		anoNascimento = Number(anoNascimento);

		let anoAtual = new Date().getFullYear(); 
		let idade = anoAtual - anoNascimento;

		idade >= 18 
		? console.log("Você tem " + idade + " anos. Você tem idade suficiente para dirigir.")
		: console.log("Você tem " + idade + " anos. Você ainda não pode dirigir. Espere mais " + (18 - idade) + " anos.");
		
		// Escreva um script que solicite ao usuário para inserir o número de anos. Calcule o número de segundos que uma pessoa pode viver. Suponha que alguém viva exatamente cem anos.

		let anos = prompt("Digite o número de anos que você viveu:");
		anos = Number(anos);

		let segundosPorAno = 365 * 24 * 60 * 60;

		let totalSegundos = anos * segundosPorAno;
  
		console.log('Você viveu ' + totalSegundos , 'segundos');


		// Exercícios: Nível 3

		// 1. Crie um formato de hora legível por humanos usando o objeto Date. A hora e o minuto devem sempre ter dois dígitos (7 horas deve ser 07 e 5 minutos deve ser 05).
		// AAAA-MM-DD HH:mm, ex: 2020-01-02 07:05

		let now = new Date();
		let year1 = now.getFullYear();
		let month = (now.getMonth() + 1).toString().padStart(2, '0');
		let date = now.getDate();
		let hours = now.getHours();
		let minutes = now.getMinutes(); 

		console.log(`${date}/${month}/${year1} ${hours}:${minutes}`);