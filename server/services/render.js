const axios = require('axios')


exports.homeRoute = (req, res) =>{
    res.render('index');
}

exports.userRoute = (req, res) =>{
    res.render('users');
}

exports.addUser = (req, res) =>{
    res.render('add-user');
}

exports.updateUser = (req, res) =>{
    res.render('update-user');
}