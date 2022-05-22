## Sub Method

This method is used to subtract a value from a number.

```javascript
db.sub('data-name', number);
```

This method also removes text from a string.
* The first parameter can be a `String` or a `Number`.
* The second parameter can only be a `Number`.

### Example

```javascript
const db = require('secure-db');

db.set('my_money', 500);
db.sub('my_money', 20); // 480
```
