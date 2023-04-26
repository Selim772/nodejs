const { Wood } = require('../models/wood.js');

exports.getAllWoods = async (req, res) => {
  try {
    const woods = await Wood.findAll();
    res.status(200).json(woods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des types de bois.' });
  }
};

exports.findByHardness = async (req, res) => {
    const { hardness } = req.params;
  
    try {
      const woods = await Wood.findAll({ where: { hardness } });
  
      res.status(200).json(woods);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des essences de bois.' });
    }
  };