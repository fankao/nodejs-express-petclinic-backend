const express = require('express');
const petApi = require('../apis/petApi')
const router = express.Router();

router
    .route('/')
    .get(petApi.getPets)
    .post(petApi.createPet)
router
    .route('/:id')
    .get(petApi.getPet)
    .put(petApi.updatePet)
    .delete(petApi.deletePet)

module.exports = router;