const express = require('express');
const route = express.Router();
const services = require('../services/render')


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

module.exports = route;
