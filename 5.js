// Напишите функцию, возвращает новый массив без предоставленных значений.
// Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]

const removeElements = (arr1, arr2) => {
	return arr1.filter((el) => arr2.indexOf(el) === -1);
};

console.log(removeElements([1, 2, 3, 1, 2], [1, 2]));
