const axios = require('axios')


exports.homeRoute = (req, res) =>{
    res.render('index');
}

exports.userRoute = (req, res) =>{
    axios.get('http://localhost:3000/api/users')
    .then(function(responce){
        res.render('users', {users: responce.data});
    })
    .catch(err=>{
        res.send(err)
    })   
}

exports.addUser = (req, res) =>{
    res.render('add-user');
}

exports.updateUser = (req, res) =>{
    axios.get('http://localhost:3000/api/users', {params: {id : req.query.id}})
    .then(function(userdata){
        res.render('update-user', {user: userdata.data});
    })
    .catch(err=>{
        res.send(err)
    })
}