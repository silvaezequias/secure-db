<div align="center">
    <p>
        <a href="https://www.npmjs.com/package/secure-db"><img src="https://i.ibb.co/XDykx23/ICON-LOGO.png" width="300" alt="SecureDB"></a>
    </p>
    <p>
    <img src="https://img.shields.io/npm/v/secure-db?color=748BD4&label=SecureDB&style=for-the-badge" alt="PACKAGE VERSION">
    <img src="https://img.shields.io/npm/dw/secure-db?color=748BD4&label=Download&style=for-the-badge" alt="PACKAGE DOWNLOADS">
    <img src="https://img.shields.io/snyk/vulnerabilities/npm/secure-db?color=748BD4&style=for-the-badge" alt="PACKAGE SIZE">
    <img src="https://img.shields.io/npm/l/secure-db?color=748BD4&style=for-the-badge" alt="PACKAGE LICENSE">
    </p>
    <br>
</div>

# SecureDB - A very intuitive local database

SecureDB is a simple and powerful local database that helps [Node.js](https://nodejs.org) developers by storing data in JSON or encrypted.

- Fast and high performance 🚀
- [Encryption using security key](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/cryptography.md) 🔒
- [Infinite separate databases](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/multiple_databases.md) 💯

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Recommended Node.js 16.15 or higher, stable version.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install secure-db
```

```javascript
const { Database } = require('secure-db');
const db = new Database('my-database');
```

## Example Usage

```javascript
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

It is possible to create multiple databases:

```javascript
/* example creating databases for a users list */
const { Database } = require('secure-db');
const user1 = new Database('users', 'user1');
const user2 = new Database('users', 'user2');
const user3 = new Database('users', 'user3');

user1.set({ name: 'Mark', age: 32 });
user3.set('name', 'Joana');

user1.get('name'); // 'Mark'
user2.get('name'); // undefined

user1.get('name'); // 'Mark'
```

Following the previous example, it is possible to know which databases exist:

```javascript
/* example returning all databases that exist within the user list */
const { getDatabases } = require('secure-db');

getDatabases('users', (user_list) => {
    user_list // ['user1', 'user2', 'user3']
});
```

## Table of contents 

- [Get Started](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/first_steps.md);
- [Basic code](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/first_steps.md#create-the-code);
- ([Saving](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/saving_data.md)) and ([Getting](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/getting_data.md)) data;
- [Managing arrays](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/arrays.md);
- [Resetting the database](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/resetting.md);
- [Deleting individual data](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/deleting_data.md);
- [Create multiple databases](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/multiple_databases.md);
- [Database sections](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/multiple_databases.md#database-section);
- [Getting the list of existing databases](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/multiple_databases.md#database-list);
- [Deleting the database completely](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/multiple_databases.md#remove-database);
- [Manage data security](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/cryptography.md);
- [Enabling encryption on the database](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/cryptography.md);
- [Setting the environment variables and the Security Key](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/cryptography.md);
- [Changing encryption mode](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/cryptography.md);
- [Changing the output](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/cryptography.md);
- [Setting different keys for each database](https://github.com/secure-db/secure-db/tree/master/docs/v3/usage/cryptography.md);

---

- [Become a Sponsor](patreon.com/ezequiaslopes)
- [Support Server on Discord](https://discord.gg/gAy6kZzeaR)
- [Changelogs](https://github.com/secure-db/secure-db/blob/master/CHANGELOG.md)
- [Documentation](https://github.com/secure-db/secure-db/tree/master/docs)
- [More Examples](#example-usage)
- [GitHub](https://github.com/secure-db/secure-db#readme)
- [npm](https://www.npmjs.com/package/secure-db)

## FAQ

See the [FAQ](https://discord.gg/FAEFJrRxST) and please add your own questions if you think they would help others.