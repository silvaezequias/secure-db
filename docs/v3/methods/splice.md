## Splice Method

This method is used to remove an element from an array.

```javascript
db.splice('data-name', 'element');
```

This method only works if the saved data is an array.
* The first parameter can be a `String` or a `Number`.
* The second parameter cannot be a `Function` or a `Class`.

### Example

```javascript
const db = require('secure-db')

db.set('users', [ 'Pedro', 'Jorge', 'Jhon' ]);
db.splice('users', 'Jorge'); // [ 'Pedro', 'Jhon' ]
```
