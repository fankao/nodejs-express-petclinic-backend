const express = require('express');
const ownerRoutes = require('./ownerRoutes');
const petRoutes = require('./petRoutes');

const router = express();

router.use('/petclinic/api/owners',ownerRoutes);

router.use('/petclinic/api/pets',petRoutes);

module.exports = router;