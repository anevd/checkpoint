// Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

const removeDuplicates = (arr) => {
	return arr.filter((el, index) => arr.indexOf(el) === index);
};

console.log(removeDuplicates([1, 2, 3, 1, 2]));
