## Sum Method

This method is used to add one number to another. 

```javascript
db.sum('data-name', number);
```

This method only works with numbers.
* The first parameter can be a `String` or a `Number`.
* The second parameter can only be a `Number`.


## Example

```javascript
const db = require('secure-db');

db.set('my_money', 30);
db.sum('my_money', 126); // 156
```
