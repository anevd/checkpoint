// Напишите функцию, которая разделяет массив на части заданного размера.
// Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

const splitArray = (arr, n) => {
	let result = [];
	for (let i = 0; i < arr.length; i += n) {
		let newArr = [];
		for (let j = i; j < i + n; j++) {
			if (arr[j] !== undefined) {
				newArr.push(arr[j]);
			}
		}
		result.push(newArr);
	}
	return result;
};

console.log(splitArray([1, 2, 3, 4, 5], 2));
