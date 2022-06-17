## GetDatabases Method

This method serves to return the name of all [`Databases`](https://github.com/secure-db/secure-db/blob/master/docs/database.md) that exist.

```javascript
/**
 * @param {string|string[]} DatabaseName - list of database names
 * @param {function|null} Callback - Call back function to return result
 * @returns {string[]} Returns an array with the names of existing databases.
 */
db.getDatabases('database-name', function callback(){});
```

If there is no child database, the returned value will be an empty Array.
* The first parameter must be a `String` or an `Array` - The array elements must be `tring`.
* The second parameter must be a `Callback Function`.

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

var itemList = getDatabases(['users', 'Felipe']);
// itemList = [ 'books', 'movies', 'friends' ]

getDatabases(['users', 'Felipe', 'books'], item_list => {
  // item_list = []
});
```