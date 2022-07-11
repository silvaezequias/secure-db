## Exists method

This method is to check if a database exists or not.

```javascript
db.exists('database-name');
// or
db.exists('database-name', 'child-database-name');
```
This method returns boolean.
* The parameters can be a `String` or a `Number`.

```javascript
const { Database, exists } = require('secure-db');

const top = new Database('top-database');
const intermediate = new Database('top-database', 'intermediate-database');
const lastTier = new Database('top-database', 'intermediate-database', 'last-tier-database');

// databases only come into existence when some data is set in it
top.set('any', 'data');
intermediate.set('any', 'data');
lastTier.set('any', 'data');

exists('top-database'); // true
exists('intermediate-database'); // false

exists('top-database', 'intermediate-database'); // true
exists('top-database', 'last-tier-database'); // false

exists('top-database', 'intermediate-database', 'last-tier-database'); // true
```