## Get Method

This method is used to retrieve a value that is saved in the database.

```javascript
db.get('data-name');
```

This method works with all type of saved data.
* The first parameter can be a `String` or a `Number`.

### Example

```javascript
const db = require('secure-db');

db.set('user', { name: 'Louis', age: 45, money: 20 });
db.get('user'); // { name: 'Louis', age: 45, money: 20 }
db.get('user.name'); // 'Louis'
db.get('user.age'); // 45
```
