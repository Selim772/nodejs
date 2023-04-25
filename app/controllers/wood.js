const { Wood } = require('../models/wood.js');

exports.getAllWoods = async (req, res) => {
  try {
    const woods = await Wood.findAll();
    res.json(woods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des types de bois.' });
  }
};