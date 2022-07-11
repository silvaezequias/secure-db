## All Method

The all method is used to return all data saved in the database.

```javascript
db.all();
```

This method works with all types of data that can be saved.

### Example

```javascript
const db = require('secure-db');

db.set('my_money', 800);
db.set('user', 'David');
db.set('afk-mode', false);

db.all();
/*
[
  { ID: 'my_money', data: 800 },
  { ID: 'user', data: 'David' },
  { ID: 'afk-mode', data: false }
]
*/
```

```javascript
const db = require('secure-db');

db.set([ 'Mark', 'Steve', 'George', 'Peter' ]);

db.all();
/*
[
  { ID: '0', data: 'Mark' },
  { ID: '1', data: 'Steve' },
  { ID: '2', data: 'George' },
  { ID: '3', data: 'Peter' }
]
*/
```
