const express = require('express');

const router = express.Router();

const studentsApiRouter = require('./api/student.routes');

router.use('/api/students', studentsApiRouter);

module.exports = router;
