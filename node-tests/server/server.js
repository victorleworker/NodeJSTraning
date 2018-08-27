const express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

//Get /users
// Give user a name prop and age pro
app.get('/users', (req, res) => {
    res.send([{
        name: 'Mike',
        age: 27
    },
    {
        name: 'Jen',
        age: 26
    }
    ])
});
app.listen(3000);

module.exports.app = app;