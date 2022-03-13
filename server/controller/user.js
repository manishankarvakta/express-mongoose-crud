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
        if(data){
            res.redirect('/users');

        }
    })
    .catch(err=>{
        res.status(500).send({message: err.message || 'there is some problem for create user'})
    })
}


// get users
exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;
        User.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: `User does not found with id ${id}`});
            }else{
                res.send(data);
            }
        })
        .catch(err=>{
            res.status(500).send({message: `Error Retriving user with id ${id}`})
        })
    }else{
        User.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message: err.message || 'Problem finding user'})
        })
    }
}


// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
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