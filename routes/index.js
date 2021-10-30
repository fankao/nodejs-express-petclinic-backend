const express = require('express');
const ownerRoutes = require('./ownerRoutes');
const petRoutes = require('./petRoutes');

const router = express();

router.use('/api/owners', ownerRoutes);

router.use('/api/pets', petRoutes);

module.exports = router;