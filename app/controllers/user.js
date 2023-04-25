const bcrypt = require('bcrypt');
const { User } = require('../models/user.js');

exports.signup = async (req, res) => {

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ ...req.body, password: hashedPassword });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création du compte utilisateur.' });
  }
};

exports.login = (req, res) => {
  res.send("You are logged in");
};