// Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
// Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

const clearArray = (arr) => {
	return arr.filter((el) => Boolean(el) !== false);
};

console.log(clearArray([0, 1, false, 2, undefined, "", 3, null]));
