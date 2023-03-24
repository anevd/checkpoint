// Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов.
// Ожидаемый результат:
// ([1, 2], [2, 3]) => [2]
// (['a', 'b'], ['b', 'c'], ['b', 'e', 'c']) => ['b']

const createArr = (arr) => {
	let result = [];
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j < arr[0].length; j++) {
			for (let k = 0; k < arr[i].length; k++) {
				if (arr[0][j] === arr[i][k] && arr[0][j] !== undefined && result.includes(arr[0][j]) === false) {
					result.push(arr[0][j]);
				}
			}
		}
	}
	return result;
};

console.log(
	createArr([
		[1, 2],
		[2, 3],
	])
);

console.log(
	createArr([
		["a", "b"],
		["b", "c"],
		["b", "e", "c"],
	])
);
