const express = require('express');
const router = express();

router.get('/woods', (req, res) => {
    res.send('Liste des essences de bois');
  });

module.exports = router;