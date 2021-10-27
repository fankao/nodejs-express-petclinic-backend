const express = require('express');
const ownerApi = require('../apis/ownerApi')
const router = express.Router();

router
    .route('/')
    .get(ownerApi.getOwners)

module.exports = router;
