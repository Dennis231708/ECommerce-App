
const express = require('express');

const {handleErrors} = require('./middlewares')
const router = express.Router();
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin')
const {requireEmail, requirePassword, requirePasswordConfirmation, requireEmailExists, requireValidPassswordForUser} = require('./validators');
const usersRepo = require('../../repositories/users');

router.get('/signup',(req, res)=>{
    res.send(signupTemplate({req}));
});


router.post('/signup',
handleErrors(signupTemplate), 
[requireEmail, requirePassword, requirePasswordConfirmation],
    async (req, res) =>{

    const { email, password } = req.body;

    const user = await usersRepo.create({email, password});


    req.session.userId = user.id;

    res.redirect('/admin/products');
});

router.get('/signout',(req, res)=> {
    req.session = null;
    res.send('You have been logged out.')

});

router.get('/signin', (req, res) => {
    res.send(signinTemplate({}));

});

router.post('/signin',
handleErrors(signinTemplate),
[requireEmailExists,requireValidPassswordForUser],
 async (req, res) => {
    const {email} = req.body;

    const user = await usersRepo.getOneBy({email});

    req.session.userId = user.id;
    res.redirect('/admin/products');

});

module.exports = router;