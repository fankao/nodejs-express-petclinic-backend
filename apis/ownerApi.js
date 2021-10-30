const models = require('../sequelize/models');
const logger = require('../utils/logger');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


const { Owner, Pet, Visit, Type } = models;

exports.getOwners = catchAsync(async (req, res, next) => {
    logger.info('Call api getOwners')
    const owners = await Owner.findAll({
        include: [
            {
                model: Pet,
                as: 'pets',
                attributes: ['id', 'name', 'birthDate'],
                include: [
                    {
                        model: Type,
                        as: 'type'
                    },
                    {
                        model: Visit,
                        as: 'visits',
                    }
                ]
            }
        ]
    });
    res.status(200).json(owners);
});
exports.getOwner = catchAsync(async (req, res, next) => {
    logger.info('Call api getOwner')
    const ownerId = req.params.id;
    const owner = await Owner.findOne({
        where: {
            id: ownerId
        },
        include: [
            {
                model: Pet,
                as: 'pets',
                attributes: ['id', 'name', 'birthDate'],
                include: [
                    {
                        model: Type,
                        as: 'type'
                    },
                    {
                        model: Visit,
                        as: 'visits',
                    }
                ]
            }
        ]
    });
    res.status(200).json(owner);
});
exports.createOwner = catchAsync(async (req, res, next) => {
    logger.info('Call api createOwner');
    const newOwner = await Owner.create(req.body);
    logger.info(`Created new owner with id ${newOwner.id}`);
    res.status(201).json(newOwner);
});

exports.updateOwner = catchAsync(async (req, res, next) => {
    logger.info('Call api updateOwner');
    const ownerId = req.params.id;
    const [updatedOwner] = await Owner.update(req.body, {
        where: {
            id: ownerId
        }
    });
    if (updatedOwner === 0) {
        return next(new AppError('No owner found with that ID', 404));
    }
    logger.info(`Updated owner id ${ownerId}`);
    const owner = await Owner.findOne({
        where: {
            id: ownerId
        }
    });
    res.status(201).json(owner);
});

exports.deleteOwner = catchAsync(async (req, res, next) => {
    logger.info('Call api deleteOwner');
    const ownerId = req.params.id;
    const isDeleted = await Owner.destroy({
        where: {
            id: ownerId
        }
    }) === 1;
    if (!isDeleted) {
        return next(new AppError('No owner found with that ID', 404));
    }
    logger.info(`Deleted owner with id ${ownerId.id}`);
    res.status(204)
});
