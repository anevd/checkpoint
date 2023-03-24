// Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.

const createArray = (n) => {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		let item = "";
		for (let j = 1; j <= i; j++) item += i;
		arr.push(item);
	}
	return arr;
};

console.log(createArray(9));
