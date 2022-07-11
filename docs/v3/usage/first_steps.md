# Quick Start

## Install the library
In the folder where your node project is, install the basic library, which will install the dependencies and basic plugins to work on the backend.

```
$ npm install secure-db
```

## Create the code 
You can check all the contents at https://github.com/secure-db/secure-db/tree/master/docs/v3.

Create a file for you to work better with the package
```js
# index.js
const db = require('secure-db');

// Saves data to the database
db.set('Felipe', { age: 30 }); // Felipe: { age: 30 }

// Pushing an element to an array
db.push('Felipe.books', 'Harry Potter'); // Felipe: { books: ['Harry Potter'] }

// Add in a number
db.sum('Felipe.age', 3); // Felipe: { age: 33 }

// Subtract a number
db.sub('Felipe.age', 2); // Felipe: { age: 31 }

// Returns saved data
db.get('Felipe'); // Felipe: { age: 31, books: ['Harry Potter'] }
db.get('Felipe.books'); // Felipe: { books: ['Harry Potter'] }
```
