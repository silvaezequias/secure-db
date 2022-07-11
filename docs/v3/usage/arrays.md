# Arrays and List
One of the most important things when dealing with data is knowing how to deal with arrays.

```js
const db = require('secure-db');

db.set('array', []);

/* pushing items to array */
db.push('array', 'item1'); // [ 'item1' ];
db.push('array', 'item2'); // [ 'item1', 'item2' ];
db.push('array', { item: 3}); // [ 'item1', 'item2', { item: 3 } ];

/* removing items from an array */
db.splice('array', 'item1'); // [ 'item2', { item: 3 }];
db.splice('array', { item: 3 }); // [ 'item2' ];

/* joining two or more arrays */
var my_second_array = [ 'a', 'b', 'c' ];
db.concat('array', my_second_array); // [ 'item2', 'a', 'b', 'c' ]
```