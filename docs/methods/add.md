## Add Method

The `add` method is used to add a number to another or to concatenate a string, it is the junction of the `concat` method and the `sum`.

```javascript
db.add('data-name', 'data-value');
```

* The first parameter must necessarily be a `String` or a `Number`.

### Example

```javascript
const db = require('secure-db');

db.set('money', 3400);
db.add('money', 1000); // money = '4400'

db.set('name', 'Jhon');
db.add('name', ' William'); // name = 'Jhon William'
```
