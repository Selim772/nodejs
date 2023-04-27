const express = require("express");
const router = express();
const woodCtrl = require('../controllers/wood');
const auth = require("../middleware/auth.js")
const multer = require('../middleware/multer.js')

router.post('/signup', function (req, res) {
    res.send('You are signup');
    });

router.get("/", auth, woodCtrl.readAllWoods);
router.get("/:hardness", auth, woodCtrl.readByHardness);
router.post('/woods', woodCtrl.createWood);
router.post("/", auth, multer, woodCtrl.createWood);

module.exports = router;