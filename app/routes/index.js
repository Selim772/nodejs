const express = require('express')
const router = express();
const userRoutes = require('./user.js') //Ce fichier n’existe pas encore.

router.use("/auth", userRoutes)
const woodRoutes = require('./wood.js');

router.use("/wood", woodRoutes);

router.post('/signup', function (req, res) {
    res.send('You are signup');
    });
    router.post('/login', function (req, res) {
    res.send('You are login');
    });
    router.get('/woods', (req, res) => {
    res.send('Liste des essences de bois');
    });

module.exports = router