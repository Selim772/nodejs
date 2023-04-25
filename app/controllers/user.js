// exports.signup = (req, res) => {
//   res.send("You are signup");
// };
// exports.login = (req, res) => {
//   res.send("You are logged in");
// };

const { User } = require('../models/user.js');

exports.signup = async (req, res) => {
  const { firstnName, lastName, email, password } = req.body;

  try {
    const user = await User.create({
      firstnName,
      lastName,
      email,
      password,
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création du compte utilisateur.' });
  }
};

exports.login = (req, res) => {
  res.send("You are logged in");
};