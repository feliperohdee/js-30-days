const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

if (webTechs.includes('Sass')) {
	console.log('Sass é um pré-processador de CSS');
} else {
	webTechs.push('Sass');
}

console.log(webTechs);

export default webTechs;