// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

const countElements = (arr) => {
	let counter = 0;
	let sum = 0;
	for (let i = 0; i <= arr.length; i++) {
		if (sum <= 10) counter++;
		sum += arr[i];
	}
	return counter;
};

console.log(countElements([3, 5, 2, 4, 5]));
