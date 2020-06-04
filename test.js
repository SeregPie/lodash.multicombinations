let _ = require('lodash');
let assert = require('assert').strict;

require('./index');

assert.deepEqual(
	_.multicombinations([1, 2, 3], 2),
	[
		[1, 1],
		[1, 2],
		[1, 3],
		[2, 2],
		[2, 3],
		[3, 3],
	],
);
assert.deepEqual(
	_.multicombinations([1, 2, 3], 3),
	[
		[1, 1, 1],
		[1, 1, 2],
		[1, 1, 3],
		[1, 2, 2],
		[1, 2, 3],
		[1, 3, 3],
		[2, 2, 2],
		[2, 2, 3],
		[2, 3, 3],
		[3, 3, 3],
	],
);
assert.deepEqual(
	_.multicombinations([1, 2, 3], 1),
	[
		[1],
		[2],
		[3],
	],
);
assert.deepEqual(
	_.multicombinations([1, 2, 3], 0),
	[
		[],
	],
);
assert.deepEqual(
	_.multicombinations([], 0),
	[
		[],
	],
);
assert.deepEqual(
	_.multicombinations([], 9),
	[],
);
