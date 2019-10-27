// This is just for example later.

const router = require('express').Router();

router.get('/', function (req, res, next) { /* etc */});

router.put('/:id', function (req, res, next) { /* etc */});

router.post('/', function (req, res, next) { /* etc */});

router.delete('/:id', function (req, res, next) { /* etc */});

module.exports = router;
