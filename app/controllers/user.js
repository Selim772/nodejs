const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user.js');

exports.signup = (req, res) => {
  res.send('You are signup');
  }

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "L'adresse e-mail ou le mot de passe est incorrect." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "L'adresse e-mail ou le mot de passe est incorrect." });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.status(200).json({ message: "Vous êtes connecté", token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue lors de l'authentification de l'utilisateur." });
  }
};
