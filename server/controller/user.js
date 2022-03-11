var User = require('../model/user');

// create and save new user 
exports.create = (req, res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message: 'content can not be empty!'});
        return;
    }

    // new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        status: req.body.status,
    });

    // save user into database
    user
    .save(user)
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        res.status(500).send({message: err.message || 'there is some problem for create user'})
    })
}


// get users
exports.find = (req, res)=>{

}


// update user 
exports.update = (req, res)=>{

}


// delete user 
exports.delete = (req, res)=>{

}