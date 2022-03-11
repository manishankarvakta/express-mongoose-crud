const express = require('express');
const route = express.Router();
const services = require('../services/render');
const userController = require('../controller/user');


/*
* @description Root Route
* @method GET/
*/ 
route.get('/', services.homeRoute);

/*
* @description AddUser Route
* @method GET/
*/ 
route.get('/add-user', services.addUser);

/*
* @description updateUser Route
* @method GET/
*/ 
route.get('/update-user', services.updateUser);


// API Route
route.post('/api/users', userController.create);
route.get('/api/users', userController.find);
route.put('/api/users/:id', userController.update);
route.delete('/api/users/:id', userController.delete);

module.exports = route;
