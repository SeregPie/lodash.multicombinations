import _ from 'lodash';

export default function(collection, n) {
	let array = _.values(collection);
	let recur = ((array, n) => {
		if (--n < 0) {
			return [[]];
		}
		let combinations = [];
		array = array.slice();
		while (array.length) {
			let value = array[0];
			recur(array, n).forEach(combination => {
				combination.unshift(value);
				combinations.push(combination);
			});
			array.shift();
		}
		return combinations;
	});
	return recur(array, n);
}
