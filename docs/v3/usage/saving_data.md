## Save Data

The most used method to save data in the database is the `set` method.
```js
const db = require('secure-db');

/* saving data individually */
db.set('Felipe', { age: 32 }); // Felipe = { age: 32 };
db.set('Book', 'Harry Potter'); // Book = 'Harry Potter';
db.set('List', [ 'item1', 'item2', 'item3' ]); // List = [ 'item1', 'item2', 'item3' ]; 
db.set('open', true); // open = true

/* saving data within existing data */
db.set('Felipe.age', 29); // Felipe = { age: 29 };
db.set('Book.best', 'Titanic'); // Book = { best: 'Titanic' };
db.set('List[1]', 'some_item'); // List = [ 'item1', 'some_item', 'item3' ];
db.set('home.bathroom.door', false); // home = { bathroom: { door: false } };

/* setting whole objects */
var Felipe = {
    age: 20,
    profession: 'dentist',
    eye_color: 'green'
};
db.set(Felipe); // { age: 20, profession: 'dentist', eye_color: 'green' };

/* setting entire arrays */
var list = [ 
    123, 
    'item1', 
    false,
    { object: 1 }
];
db.set(list); // list = { 0: 123, 1: 'item1', 2: false, 3: { object: 1 } }
```