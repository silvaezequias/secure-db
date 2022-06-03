## GetDatabases Method

This method serves to return the name of all [`Databases`](https://github.com/secure-db/secure-db/blob/master/docs/database.md) that exist.

```javascript
db.getDatabases('database-name', callback function <optional>);
```

If there is no child database, the returned value will be an empty Array.
* The parameters can be a `String` or a `Number`.
* The last parameter must be a `Callback Function`.

### Example

```javascript
const { Database, getDatabases } = require('secure-db');

const Felipe = new Database('users', 'Felipe');
const Lucas = new Database('users', 'Lucas');

Felipe.set('age', 45);
Lucas.set('age', 19);

var userList = getDatabases('users');
// userList = ['Felipe', 'Lucas']
```


```javascript
const { Database, getDatabases } = require('secure-db');

const books = new Database('users', 'Felipe', 'books');
const movies = new Database('users', 'Felipe', 'movies');
const friends = new Database('users', 'Felipe', 'friends');

books.set('harry potter', 'the best');
movies.set('Titanic', 'bruh...');
friends.set('George', 'the best');

getDatabases('users', user_list => {
  // user_list = [ 'Felipe' ]
});

var itemList = getDatabases('users', 'Felipe');
// itemList = [ 'books', 'movies', 'friends' ]

getDatabases('users', 'Felipe', 'books', item_list => {
  // item_list = []
});
```