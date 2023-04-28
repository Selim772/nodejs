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

  try {
    const wood = await Wood.create({ ...JSON.parse(req.body.datas), image: pathname });
    if (filename) {
      wood.image = pathname;
      await wood.save();
    }

    res.status(201).json(wood);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de l\'essence de bois.' });
  }
};

exports.updateWood = async (req, res) => {
    const { id } = req.params;
    const { filename } = req.file;
    const updatedValues = JSON.parse(req.body.datas);
  
    try {
      let wood = await Wood.findByPk(id);
      if (!wood) {
        res.status(404).json({ message: 'Essence de bois non trouvée.' });
        return;
      }
  
      if (filename) {
        const pathname = `${req.protocol}://${req.get("host")}/uploads/${filename}`;
        updatedValues.image = pathname;
      } else {
        updatedValues.image = wood.image;
      }
  
      await wood.update(updatedValues);
  
      res.status(200).json(wood);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour de l\'essence de bois.' });
    }
  };
  

  exports.deleteWood = async (req, res) => {
    const { id } = req.params;
  
    try {
      const wood = await Wood.findByPk(id);
  
      if (!wood) {
        return res.status(404).json({ message: `L'essence de bois ${id} n'existe pas.` });
      }

      const deletedWood = await wood.destroy();
  
      if (deletedWood) {
        const imagePath = wood.image.substring(wood.image.lastIndexOf('/') + 1);
        fs.unlink(`./uploads/${imagePath}`, (err) => {
          if (err) {
            console.error(err);
          }
        });
  
        res.status(200).json({ message: `L'essence de bois ${id} a été supprimée.` });
      } else {
        res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de l\'essence de bois.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de l\'essence de bois.' });
    }
  };

  
  
  


