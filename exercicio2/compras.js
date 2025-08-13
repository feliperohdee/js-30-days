const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
	let adicionar = shoppingCart.unshift('Meat');
	let remover = shoppingCart.pop();
	let adicionar1 = shoppingCart.push('Sugar');
	let tea = shoppingCart.indexOf('Tea');
	if (tea !== -1) {
		shoppingCart[tea] = 'Green Tea';
	}

console.log(shoppingCart);
 
