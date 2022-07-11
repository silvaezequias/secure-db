# Secure Encryption
One of the good features of this package is the possibility of encrypting data.

## Configuring encryption

First create a file to store your environment variables.
In that file, enter your security key right after `SECURE_DB`.

```js
# .env
SECURE_DB=my_secret_security_key
```

Now set the key in your database

```js
# index.js
const db = require('secure-db');
db.security(process.env.SECURE_DB);
```

Setting the encryption mode. There are 2 encryption modes available:<br>
`deep` is deeper processing mode, heavier encryption.<br>
`soft` is a smoother and lighter processing mode, shallow encryption
```js
# index.js
const db = require('secure-db');

db.security({
    key: process.env.SECURE_DB,
    mode: 'deep'
})

```

Set output of encrypted data
```js
# index.js
const db1 = require('secure-db');
const db2 = new db.Database('database-2');

db1.security({
    key: process.env.SECURE_DB,
    mode: 'deep',
    output: 'base64'
});

db2.security({
    key: process.env.SECURE_DB,
    mode: 'deep',
    output: 'hex'
});
```

With the output in `base64` the data, after encrypted, will be saved in base64 in its respective file. And it's the same thing with the output in `hex`.