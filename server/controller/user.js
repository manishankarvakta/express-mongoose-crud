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
    User.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message: err.message || 'Problem finding user'})
    })
}


// update user 
exports.update = (req, res)=>{
    // validate request
    if(!req.body){
        res.status(400)
        .send({message: 'content can not be empty!'});
        return;
    }

    const id = req.params.id;
      
    User
    .findOneAndUpdate(id, req.body, {new: true})
    .then(data=>{
        if(!data){
            res.status(500)
            .send({message: `Can't update user with id ${id}. Maybe user not found.`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: `Error update user informations.`})

    })
}


// delete user 
exports.delete = (req, res)=>{
    const id = req.params.id;
      
    User
    .findOneAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(500)
            .send({message: `Can't Delete user with id ${id}. Maybe user not found.`})
        }else{
            res.send({message: "User was delete successfully"})
        }
    })
    .catch(err=>{
        res.status(500).send({message: `Error Delete user with id ${id}.`})

    })
}