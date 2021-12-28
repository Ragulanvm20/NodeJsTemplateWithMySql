const express = require('express');
const router = express.Router();
module.exports = router;
const userService = require('../Services/users.service');


router.post('/register', registerUser);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.get('/userDetails',getUserDetails);


function registerUser(req, res, next) {
    userService.registerUser(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function login(req, res, next) {
    userService.authenticate(req.body)
        .then(data => res.json(data))
        .catch(next);
}

function forgotPassword(req, res, next) {
    userService.forgotPassword(req.body)
        .then(data => res.json(data))   
        .catch(next);
}

function getUserDetails(req, res, next){
    userService.getUserById(req.user)
    .then(data => res.json(data))
    .catch(next);
}