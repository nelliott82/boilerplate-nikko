const router = require('express').Router();

router.use('/companies', require('./companies'));
router.use('/processes', require('./processes'));
router.use('/actualtime', require('./actualTime'));

router.use(function (req, res, next) {
    const error = new Error('Not found.');
    error.status(404);
    next(error);
})

module.exports = router;
