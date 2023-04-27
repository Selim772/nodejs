const { Wood } = require('../models/wood.js');

exports.readAllWoods = async (req, res) => {
  try {
    const woods = await Wood.findAll();
    res.status(200).json(woods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des types de bois.' });
  }
};

exports.readByHardness = async (req, res) => {
  const { hardness } = req.params;

  try {
    const woods = await Wood.findAll({ where: { hardness } });

    res.status(200).json(woods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des essences de bois.' });
  }
};

exports.createWood = async (req, res) => {
  const { filename } = req.file;
  const pathname = `${req.protocol}://${req.get("host")}/uploads/${filename}`;
  const { name, hardness, ...rest } = JSON.parse(req.body.datas);

  try {
    const wood = await Wood.create({ name, hardness, image: pathname, ...rest });

    res.status(201).json(wood);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de l\'essence de bois.' });
  }
};
