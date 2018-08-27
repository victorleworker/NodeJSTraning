const { ObjectID } = require('mongodb');
var { mongoose } = require('./../server/db/mongoose');
var { Todo } = require('./../server/models/todo');
const { User } = require('../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

//Todo.findOneAndRemove()
//Todo.FindByIdAndRemove
Todo.findByIdAndRemove('5b6a6525f644623d10def62a').then((todo) => {
    console.log(todo);
})