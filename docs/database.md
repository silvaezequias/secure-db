## Database Method

This method is used to create a new database separated by folder.

```javascript
new Database('database-name');
```

If you enter a name that already exists, a new database will not be created, it will save the data in the existing database.
* The parameters can be a `String` or a `Number`.

### Example

```javascript
const db = require('secure-db');

const Felipe = new db.Database('Felipe');
Felipe.set('age', 30);

db.get('age'); // null
Felipe.get('age'); // 30
```

```javascript
const db = require('secure-db');

const UsersOnline = new db.Database('users', 'registered', 'online');
UsersOnline.set('Lucas', 'working');

db.get('Lucas'); // null
UsersOnline.get('Lucas'); // working
```

```javascript
const { Database } = require('secure-db');

const db = new Database('you', 'can', 'create', 'as', 'many', 'databases', 'as', 'you', 'want')
```