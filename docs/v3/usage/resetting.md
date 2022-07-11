# Resetting data
It is possible to reset the data of a database by avoiding some data and keeping it safe.
```js
const db = require('secure-db');

db.set('Felipe', { age: 12 });
db.set('Book', 'Harry Potter');
db.set('Money', 683);

db.reset();

db.get('Felipe'); // null
db.all(); // []
db.toObject(); // {}
```

```js
const db = require('secure-db');

db.set('Felipe', { age: 12 });
db.set('Book', 'Harry Potter');
db.set('Money', 683);

db.reset('Book');

db.get('Book'); // 'Harry Potter'
db.get('Felipe'); // null
db.all(); // [ ['Book', 'Harry Potter'] ]
db.toObject(); // { Book: 'Harry Potter' }
```

```js
const db = require('secure-db');

db.set('Felipe', { age: 12 });
db.set('Book', 'Harry Potter');
db.set('Money', 683);

db.reset(['Book', 'Money']);

db.get('Book'); // 'Harry Potter'
db.get('Felipe'); // null
db.all(); // [ ['Book', 'Harry Potter'], [ 'Money', 683 ]]
db.toObject(); // { Book: 'Harry Potter', Money: 683 }
```