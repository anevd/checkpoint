// Напишите функцию, которая преобразует глубокий массив в одномерный.Задачу нужно решить двумя способами!
// Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

// решение 1
const convertArray1 = (arr) => {
	return arr.flat(Infinity);
};

console.log(convertArray1([1, 2, [3, 4, [5]]]));

// решение 2
const convertArray2 = (arr) => {
	return arr
		.join()
		.split(",")
		.map((el) => +el);
};
console.log(convertArray2([1, 2, [3, 4, [5]]]));

// решение 3
const convertArray3 = (arr) => {
	let result = [];
	function findArray(a) {
		a.forEach((el) => {
			if (typeof el == "object" && el.length) {
				findArray(el);
			} else result.push(el);
		});
	}
	findArray(arr);
	return result;
};
console.log(convertArray3([1, 2, [3, 4, [5]]]));
