// Exercícios: Nível 1

// 1.1 Obtenha a entrada do usuário usando prompt(“Digite sua idade:”). Se o usuário tiver 18 anos ou mais, dê o feedback: 'Você tem idade suficiente para dirigir', mas se não tiver 18, dê outro feedback informando para esperar o número de anos que ele precisa para completar 18.

let idade = prompt("Digite sua idade");
idade = Number(idade);

17 < idade
? console.log('Você tem idade suficiente para dirigir.')
: console.log('Faltam ' + (18 - idade), 'anos para você poder dirigir.');

// 1.2 Compare os valores de myAge e yourAge usando if…else. Com base na comparação, registre o resultado no console informando quem é mais velho (eu ou você). Use prompt(“Digite sua idade:”) para obter a idade como entrada.

let yourAge = prompt("Digite sua idade");
yourAge = Number(yourAge);
let myAge = 27;

if(myAge < yourAge){
	console.log('Você é ' +(yourAge - myAge), 'anos mais velho que eu.');
} else {
	console.log('Você é ' +(myAge - yourAge), 'anos mais novo que eu.');
}

// 1.3 Se a for maior que b, retorne 'a é maior que b', senão 'a é menor que b'. Tente implementar isso de duas maneiras:
// usando if else
// operador ternário.

let a = 4;
let b = 3;

if(a > b){
	console.log('a é maior que b');
} else{
	console.log('a é menor que b');
};

let a1 = 4;
let b1 = 3;

a > b
? console.log('a é maior que b')
: console.log('a é menor que b');


// 1.4 Números pares são divisíveis por 2 e o resto é zero. Como você verifica se um número é par ou ímpar usando JavaScript?

let numero = prompt("Digite um número");
numero = Number(numero);

numero % 2 === 0 
? console.log(numero + ' é um número par')
: console.log(numero + ' é um número impar');


// Exercícios: Nível 2

// Escreva um código que possa dar notas aos alunos de acordo com suas pontuações:

let nota = Number(prompt("Digite sua pontuação"));

switch(true){
	case (nota >= 80 && nota <= 100):
		console.log('Você tirou nota A');
		break;	
	case (nota >= 70 && nota <= 89):
		console.log('Você tirou nota B');
		break;
	case (nota >= 60 && nota <= 69):
		console.log('Você tirou nota C');
		break;
	case (nota >= 50 && nota <= 59):
		console.log('Você tirou nota D');
		break;
	case (nota >= 0 && nota <= 49):
		console.log('Você tirou nota F');
		break;
	default:
    console.log("Nota inválida");
}

// Verifique se a estação é Outono, Inverno, Primavera ou Verão. Se a entrada do usuário for:

let mes = prompt("Digite o mês").toLowerCase();

switch (mes) {
	case 'setembro':
	case 'outubro':
	case 'novembro':
		console.log("A estação é Primavera");
		break;
	case 'dezembro':
	case 'janeiro':
	case 'fevereiro':
		console.log("A estação é Verão");
		break;	
	case 'março':
	case 'abril':
	case 'maio':
		console.log("A estação é Outono");
		break;
	case 'junho':
	case 'julho':
	case 'agosto':
		console.log("A estação é Inverno");
		break;
	default:
    console.log("Mês inválido");
}

// Verifique se um dia é final de semana ou dia útil. Seu script receberá o dia como entrada.

let dia = prompt("Qual é o dia hoje?").toLowerCase();

switch (dia){
	case 'segunda':
	case 'terca':
	case 'quarta':
	case 'quinta':
	case 'sexta':
		console.log(dia + ' é um dia de trabalho');
		break;
	case 'sabado':
	case 'domingo':
		console.log(dia + ' é um final de semana');
		break;
	default:
	console.log('Dia inválido');		
}

// Exercícios: Nível 3

// Escreva um programa que informe o número de dias em um mês.

let mes1 = prompt("Digte um mês").toLowerCase();

switch (mes1){
	case 'janeiro':
	case 'março':
	case 'maio':	
	case 'julho':
	case 'agosto':
	case 'outubro':
	case 'dezembro':
		console.log(mes1 + ' tem 31 dias.');
		break;
	case 'abril':	
	case 'junho':
	case 'setembro':
	case 'novembro':
		console.log(mes1 + ' tem 30 dias.');
		break;	
	case 'fevereiro':
		console.log(mes1 + ' tem 28 dias.');		
		break;
	default:
	console.log('Mês inválido');
}

// Escreva um programa que informe o número de dias em um mês, agora considerando o ano bissexto.

let mes2 = prompt("Digte um mês").toLowerCase();

switch (mes2){
	case 'janeiro':
	case 'março':
	case 'maio':	
	case 'julho':
	case 'agosto':
	case 'outubro':
	case 'dezembro':
		console.log(mes2 + ' tem 31 dias.');
		break;
	case 'abril':	
	case 'junho':
	case 'setembro':
	case 'novembro':
		console.log(mes2 + ' tem 30 dias.');
		break;	
	case 'fevereiro':
		console.log(mes2 + ' tem 29 dias.');		
		break;
	default:
	console.log('Mês inválido');
}