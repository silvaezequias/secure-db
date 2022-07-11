## Save Data

To get the data saved in the database, the recommended method is `get`
```js
const db = require('secure-db');

db.set('Felipe', { age: 32 });
db.set('Book', 'Harry Potter');
db.set('List', [ 'item1', 'item2', 'item3' ]);
db.set('open', true);

/* getting data individually */
db.get('Felipe'); // { age: 32 };
db.get('Book'); // 'Harry Potter';
db.get('list'); // [ 'item1', 'item2', 'item3' ];
db.get('open'); // true;


/* Getting data inside other data */
db.get('Felipe.age'); // 32;
db.get('List[0]'); // 'item1';
db.get('List[1]'); // 'item2';
db.get('List[3]'); // 'item3';

/* taking multiple data at once */
db.get(['Felipe', 'List']);
// [ 
//     { age: 32 }, 
//     [ 'item1', 'item2', 'item3' ]
// ]


/* getting all the data at once */
db.all();
// [
//     ['Felipe', { age: 32 }],
//     ['Book', 'Harry Potter'],
//     ['list', [ 'item1', 'item2', 'item3' ]],
//     ['open', true]
// ]

db.toObject();
// {
//     Felipe: { age: 32 },
//     Book: 'Harry Potter',
//     list: [ 'item1', 'item2', 'item3' ],
//     open: true
// }
```