const { SHA256 } = require('crypto-js');
const bcrypt = require('bcryptjs');
var password = '123abc!';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$22nJUeoEqylcgGOdEUzVx.n7mPEwfGDgypM9LR3CmdDOXeiNjK41y';

bcrypt.compare(password, hashedPassword), (err, res) => {
    console.log(res)
});