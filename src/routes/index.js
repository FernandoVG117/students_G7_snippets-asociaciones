const express = require('express');
const routerStudent = require('./student.router');
const routerDegree = require('./degree.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/students', routerStudent);
router.use('/degrees', routerDegree);

//


module.exports = router;