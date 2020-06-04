# lodash.multicombinations

`_.multicombinations(collection, n)`

Calculates all possible combinations with repetition of a certain size.

| argument | description |
| ---: | :--- |
| `collection` | A collection of distinct values to calculate the combinations from. |
| `n` | The number of values to combine. |

Returns a new array.

## setup

### npm

```shell
npm i lodash.multicombinations
```

### ES module

```javascript
import 'lodash.multicombinations';
import _ from 'lodash';
```

### Node

```javascript
require('lodash.multicombinations');
let _ = require('lodash');
```

### browser

```html
<script src="https://unpkg.com/lodash"></script>
<script src="https://unpkg.com/lodash.multicombinations"></script>
```

## usage

```javascript
let multicombinations = _.multicombinations([0, 1], 3);
// => [[0, 0, 0], [0, 0, 1], [0, 1, 1], [1, 1, 1]]
```

---

Also accepts array-like values.

```javascript
let multicombinations = _('abcde').multicombinations(2).map(v => _.join(v, '')).value();
// => ['aa', 'ab', 'ac', 'ad', 'ae', 'bb', 'bc', 'bd', 'be', 'cc', 'cd', 'ce', 'dd', 'de', 'ee']
```

## see also

- [lodash.combinations](https://github.com/SeregPie/lodash.combinations)
- [lodash.permutations](https://github.com/SeregPie/lodash.permutations)
- [lodash.multipermutations](https://github.com/SeregPie/lodash.multipermutations)
- [lodash.product](https://github.com/SeregPie/lodash.product)
