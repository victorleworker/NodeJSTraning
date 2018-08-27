﻿const { ObjectID } = require('mongodb');
const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');
const jwt = require('jsonwebtoken');

var userOneId = new ObjectID();
var userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'andrew@example.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({ userOneId, access: 'auth' }, process.env.JWT_SECRET).toString()
    }]

}, {
    _id: userTwoId,
    email: 'Jen@example.com',
    password: 'userTwoPass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({ userTwoId, access: 'auth' }, process.env.JWT_SECRET).toString()
    }]
}];

const todos = [{
    _id: new ObjectID,
    text: 'Fist test todo',
    _creator: userOneId
},
{
    _id: new ObjectID,
    text: 'Second test todo',
    completed: true,
    completedAt: 333
    ,
    _creator: userTwoId
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};


const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();
        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};
module.exports = { todos, populateTodos, users, populateUsers };