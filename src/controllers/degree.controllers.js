const catchError = require('../utils/catchError');
const Degree = require('../models/Degree');
const Student = require('../models/Student');

const getAll = catchError(async(req, res) => {
    const results = await Degree.findAll({include: [Student]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Degree.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Degree.findByPk(id, { include: Student});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Degree.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Degree.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}