const logger = require('../utils/logger');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const { Pet, Owner, Visit,Type } = require('../sequelize/models');

exports.getPets = catchAsync(async (req, res, next) => {
    logger.info("GET api /pets")
    const pets = await Pet.findAll(
        {
            attributes: ['id', 'name', 'birthDate'],
            include: [
                {
                    model: Owner, as: 'owner'
                },
                {
                    model:Type,
                    as:'type'
                },
                {
                    model: Visit,
                    as: 'visits'
                }
            ]
        });
    res.status(200).json(pets);
});

exports.getPet = catchAsync(async (req, res, next) => {
    logger.info("GET api /pet")
    const pet= await Pet.findOne(
        {
            attributes: ['id', 'name', 'birthDate'],
            include: [
                {
                    model: Owner, as: 'owner'
                },
                {
                    model:Type,
                    as:'type'
                },
                {
                    model: Visit,
                    as: 'visits'
                }
            ]
        });
    res.status(200).json(pet);
});

exports.createPet = catchAsync(async (req, res, next) => {
    logger.info("START POST api /pets");
    const { name, birthDate, owner: { id: ownerId }, type: { id: typeId } } = req.body;
    const newPet = await Pet.create({ name, birthDate, ownerId, typeId });
    logger.info(`Created new pet with id ${newPet.id}`);
    res.status(201).json(newPet);
});


exports.updatePet = catchAsync(async (req, res, next) => {
    logger.info("START PUT api /pets");
    const petId = req.params.id;
    const { name, birthDate, type: { id: typeId } } = req.body;
    const [updatedPet] = await Pet.update(
        { name, birthDate, typeId },
        {
            where: { id: petId }
        });
    if (updatedPet === 0) {
        return next(AppError('No pet found with that ID', 404));
    }
    logger.info(`Updated pet with id ${petId}`);
    res.status(201).json({ petId, ...req.body });
});

exports.deletePet = catchAsync(async(req,res,next)=>{
    logger.info("START DELETE api /pets");
    const petId = req.params.id;
    const isDeleted = await Pet.destroy({where:{id:petId}}) === 1;
    if (!isDeleted) {
        return next(AppError('No pet found with that ID', 404));
    }
    logger.info(`Deleted pet with id ${petId}`);
    res.status(204).json();
})
