## Reset Method

This method is used to reset the database.

```javascript
db.reset()
```

You can choose what data you want to keep.You can choose what data you want to keep.
* No parameters.

### Example

```javascript
const db = require('secure-db');

db.set('lucas', { age: 40 });
db.set('my_money', 210);
db.set('shop', { items: [] });
db.set('users', [ 'Pedro', 'Alfred' ]);

db.reset();

db.get('lucas'); // null
db.get('shop'); // null...
db.all(); // []
```