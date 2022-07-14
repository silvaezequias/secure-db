# Multiple Databases
One of the best features of this package is that you can create infinite databases separately.

```js
const { Database } = require('secure-db');

const User1 = new Database('user-1');
const User2 = new Database('user-2');

User1.set('name', 'Felipe');
User2.set('name', 'Rose');

User1.get('name'); // Felipe
User2.get('name'); // Rose
```

## Database Sections
To increase the level of organization, it is possible to create databases within a database, called Sections.

```js
const { Database } = require('secure-db');

const User1 = new Database('users', 'user-1');
const User2 = new Database('users', 'user-2');

User1.set('name', 'Felipe');
User2.set('name', 'Rose');

// Now these two databases are saved inside the `users` section.

const user_outside_the_section = new Database('user-1');

user_outside_the_section.get('name'); // null
User1.get('name'); // Felipe;
```

## Database List
It is possible to return a list with the names of existing databases and for that the `getDatabases` method is used.

```js

const { Database, getDatabases } = require('secure-db');

const User1 = new Database('users', 'user-1');
const User2 = new Database('users', 'user-2');
const User3 = new Database('users', 'user-3');

getDatabases('users'); // [ 'user-1', 'user-2', 'user-3' ];
getDatabases('another_section'); // [] 
```

## Remove Database
To delete a database **permanently** the `remove` method is used.

```js
const { Database, remove } = require('secure-db');

const User1 = new Database('users', 'user-1');
const User2 = new Database('users', 'user-2');
const User3 = new Database('users', 'user-3');

User1.set('name', 'Felipe');
User2.set('name', 'Rose');
User3.set('name', 'Hanna');

User1.remove();
// or
remove('users', 'user-1');

User1.get('name'); // null
User2.get('name'); // Rose
User3.get('name'); // Hanna
```