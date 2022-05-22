# Has Method

This method is used to check if a data exists in the database.

```javascript
db.has('data-name');
```

The return of this method will always be of the Boolean type
* The parameters can be a `String` or a `Number`.

### Example

```javascript
const db = require('secure-db')

db.set('Felipe', { age: 20 })

db.has('Lucas'); // false
db.has('Felipe'); // true
db.has('Felipe.age'); // true
```
