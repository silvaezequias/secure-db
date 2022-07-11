## Set Method

This method is used to define data in the database.

```javascript
db.set('data-name', 'data-value'); // setting data directly
db.set({ data_name: 'data value' }); // setting objects directly
db.set([ 'data1', 'data2'... ]); // setting arrays directly
```

This method overwrites data that is already saved.
* The first parameter can be a `String` or a `Number`.
* The second parameter cannot be a `Function` or `Class`.

### Example

```javascript
/* setting data directly */
const db = require('secure-db');

db.set('wallet.money', 40);
db.get('wallet'); // { money: 40 }

db.set('wallet', { money: 5000 });
db.get('wallt.money'); // 5000
```

```javascript
/* setting objects directly */
const db = require('secure-db');

db.set({ wallet: { money: 40 } });
db.get('wallet.money') // 40

db.set({ users: ['Mark', 'Joana']});
db.get('users[0]'); // 'Mark'
```

```javascript
/* setting arrays directly */
const db = require('secure-db');

db.set([ 'Mark', 'Steve', 'George', 'Peter' ]);
db.get(1); // 'Steve' 

db.set([ 'Mark', 'Steve', 'George', 'Peter' ]);
db.get('3'); // 'Peter'
```