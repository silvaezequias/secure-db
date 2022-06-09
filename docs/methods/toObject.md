## ToObject Method

The toObject method is used to return all data saved in the database as objects.

```javascript
db.toObject();
```

This method works with all types of data that can be saved.

### Example

```javascript
const db = require('secure-db');

db.set('my_money', 800);
db.set('user', 'David');
db.set('afk-mode', false);

db.toOjbect();
/*
{
    my_money: 800,
    user: 'David',
    "afk-mode": false
}
*/
```

```javascript
const db = require('secure-db');

db.set([ 'Mark', 'Steve', 'George', 'Peter' ]);

db.toObject();
/*
{
    0: 'Mark',
    1: 'Steve',
    2: 'George',
    3: 'Peter'
}
*/
```
