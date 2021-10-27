const Owner = require('../sequelize/models').Owner;
const Pet = require('../sequelize/models').Pet;
const logger = require('../utils/logger');
const catchAsync = require('../utils/catchAsync');

exports.getOwners = catchAsync(async (req, res, next) => {
    logger.info('Call api getOwners')
    const owners = await Owner.findAll({
        include: [
            {
                model: Pet,
                as: 'pets'
            }
        ]
    });
    res.status(200).json(owners);
})