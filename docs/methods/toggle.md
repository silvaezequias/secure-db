## Toggle Method

The `toggle` method is used to toggle values in the database.

```javascript
db.toggle('data-name', [...'values']);
```

This method does not work with `Functions`, `Classes` or `Symbol`.

* The first parameter must necessarily be a `String` or a `Number`.

### Example

```javascript
const db = require('secure-db');

db.set('name', 'Steve');

function ToggleNames(){
    db.toggle('name', ['George', 'Dan', 'Mary', 'Linda', 'Steve']);
    return db.get('name');
}

db.get('name'); // 'Steve'

ToggleNames(); // 'George'
ToggleNames(); // 'Dan'
ToggleNames(); // 'Mary'
ToggleNames(); // 'Linda'
ToggleNames(); // 'Steve'
```

```javascript
const db = require('secure-db');

db.set('online', true);

db.toggle('online'); // false
db.toggle('online'); // true
```