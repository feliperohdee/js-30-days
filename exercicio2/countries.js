const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

if (countries.includes('Ethiopia')) {
	console.log('ETHIOPIA');
} else {
	countries.push('Ethiopia');
}
console.log(countries);

export default countries;
