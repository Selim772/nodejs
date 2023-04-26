// const express = require('express');
// const router = express();

// router.get('/woods', (req, res) => {
//     res.send('Liste des essences de bois');
//   });

// module.exports = router;

const express = require("express");
const router = express();
const userCtrl = require("../controllers/wood.js");
const woodController = require('../controllers/wood');

router.post("/wood", userCtrl.wood);
router.get('/:hardness', woodController.getWoodsByHardness);


module.exports = router;