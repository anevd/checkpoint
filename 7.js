// Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
// Ожидаемый результат:
// ([1, 2, 3], [1, 2, 3]) => true
// ([1, 2, 3], [1, 2, 3, 4]) => false

const compareArrays = (arr1, arr2) => {
	return arr1.length === arr2.length && arr1.every((el, index) => el === arr2[index]);
};

console.log(compareArrays([1, 2, 3], [1, 2, 3]));
console.log(compareArrays([1, 2, 3], [1, 2, 3, 4]));
