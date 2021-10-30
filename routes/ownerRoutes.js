const express = require('express');
const ownerApi = require('../apis/ownerApi')
const router = express.Router();

router
    .route('/')
    .get(ownerApi.getOwners)
    .post(ownerApi.createOwner)

router
    .route('/:id')
    .get(ownerApi.getOwner)
    .put(ownerApi.updateOwner)
    .delete(ownerApi.deleteOwner)

module.exports = router;
