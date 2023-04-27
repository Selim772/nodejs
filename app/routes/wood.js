const express = require("express");
const router = express();
const userCtrl = require("../controllers/wood.js");
const woodController = require('../controllers/wood');
const auth = require("../middleware/auth.js")
const multer = require('../middleware/multer.js')

router.post('/signup', function (req, res) {
    res.send('You are signup');
    });

router.get("/", auth, woodCtrl.readAll);
router.get("/:hardness", auth, woodCtrl.readByHardness);
router.post('/woods', woodCtrl.createWood);
router.post("/", auth, multer, woodCtrl.create);

module.exports = router;