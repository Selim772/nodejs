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
const auth = require("../middleware/auth.js")

router.get("/", auth, woodCtrl.readAll);
router.get("/:hardness", auth, woodCtrl.readByHardness);

router.post("/wood", userCtrl.wood);
router.get('/:hardness', woodController.getWoodsByHardness);


module.exports = router;