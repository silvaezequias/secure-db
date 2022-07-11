# Deleting Data
If you only want to delete data from the database, the `delete` method is ideal for you.

```js
const db = require('secure-db');

db.set('Felipe', { age: 47 });
db.set('Book', 'Harry Potter');
db.set('Money', 5783);

db.delete('Felipe');

db.get('Felipe'); // null;
db.get('Book'); // 'Harry Potter'
db.get('Money'); // 5783
```