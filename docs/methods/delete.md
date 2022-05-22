## Delete Method

This method is used to delete some data from the database.

```javascript
db.delete('data-name');
```

This method works with all types of saved data.
* The first parameter can be a `String` or a `Number`.

### Example

```javascript
const db = require('secure-db');

db.set('name', 'Jhon');
db.set('my_money', 700);

db.delete('name');
db.get('name');; // undefined
db.all(); // [ { ID: 'my_money', data: 700 } ]
```
