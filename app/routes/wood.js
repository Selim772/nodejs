// const express = require('express');
// const router = express();

// router.get('/woods', (req, res) => {
//     res.send('Liste des essences de bois');
//   });

// module.exports = router;

const express = require("express");
const router = express();
const userCtrl = require("../controllers/wood.js");

router.post("/wood", userCtrl.wood);


module.exports = router;