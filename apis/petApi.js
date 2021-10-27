const Pet = require('../sequelize/models').Pet;
const Owner = require('../sequelize/models').Owner;
const Visit = require('../sequelize/models').Visit;
const logger = require('../utils/logger');
const catchAsync = require('../utils/catchAsync');

exports.getPets = catchAsync(async (req, res, next) => {
    logger.info("Call api get pets")
    const pets = await Pet.findAll(
        {
            attributes: ['id', 'name', 'birthDate'],
            include: [
                {
                    model: Owner, as: 'owner'
                },
                {
                    model: Visit,
                    as: 'visits'
                }
            ]
        });
    res.status(200).json(pets);
})