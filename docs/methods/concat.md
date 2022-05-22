## Concat Method

This method is used to concatenate one value in front of another value, be it number or string.
```javascript
db.concat('data-name', 'data-value');
```

This method will probably not work if the data is an `Object` or an `Array`.

* The first parameter must necessarily be a `String` or a `Number`.
* The second parameter can be a `String` or a `Number`.

```javascript
const db = require('secure-db');

db.set('name', 'Sabrina');
db.concat('name', ' and Paul'); // name = 'Sabrina and Paul'

db.set('my_money', 3100);
db.concat('my_money', 4012); // my_money = "31004012"
```
