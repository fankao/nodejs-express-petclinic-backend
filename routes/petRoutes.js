const express = require('express');
const petApi = require('../apis/petApi')
const router = express.Router();

router
    .route('/')
    .get(petApi.getPets)

module.exports = router;