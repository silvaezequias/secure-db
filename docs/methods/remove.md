## Remove method

This method is used to remove a database.

```javascript
<Database>.remove();
```

This method will remove your database.

> Once used, the command will delete a database forever without reverting.

* No parameters.

### Exemple

```javascript
const db = require('secure-db');

db.set('name', 'Jhon');
db.set('my_money', 700);
db.set('cooldown', 4000);

db.remove();

db.get('name'); // null
db.get('my_money') // null
db.all(); // null
```

```javascript
const db = require('secure-db');

const Felipe = new db.Database('users', 'Felipe');
const George = new db.Database('users', 'George');

Felipe.set('age', 19);
George.set('age', 23);

Felipe.remove();

db.exists('users', 'Felipe'); // false
db.exists('users', 'George'); // true
```