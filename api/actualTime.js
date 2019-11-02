// This is just for example later.

const router = require('express').Router();
const { ActualTime } = require('../server/db');

router.get('/', async (req, res, next) => {
  /* etc */
  try {
    const actualTime = await ActualTime.findAll();
    res.send(actualTime);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', function(req, res, next) {
  /* etc */
});

router.post('/', function(req, res, next) {
  /* etc */
});

router.delete('/:id', function(req, res, next) {
  /* etc */
});

router.get('/me', (req, res, next) => {
  res.json(req.user);
});

router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});

router.put('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then(user => {
      if (!user) {
        res.status(401).send('User not found');
      } else if (!user.hasMatchingPassword(req.body.password)) {
        res.status(401).send('Incorrect password');
      } else {
        req.login(user, err => {
          if (err) next(err);
          else res.json(user);
        });
      }
    })
    .catch(next);
});

router.delete('/logout', (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.sendStatus(204);
});

module.exports = router;
