// const express = require('express');
// const router = express();

// router.get('/woods', (req, res) => {
//     res.send('Liste des essences de bois');
//   });

// module.exports = router;

const express = require('express');
const router = express.Router();

const woodController = require('../controllers/wood.js');

// Route pour récupérer les essences de bois selon leur dureté
router.get('/:hardness', woodController.getWoodsByHardness);

module.exports = router;
