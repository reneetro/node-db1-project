const router = require('express').Router()

const Account = require('./accounts-model');

const {checkAccountId, checkAccountNameUnique, checkAccountPayload} = require('./accounts-middleware');

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  Account.getAll()
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(err => next(err));
})

router.get('/:id', checkAccountId, (req, res) => {
  // DO YOUR MAGIC
  res.status(200).json(req.account);
})

router.post('/', checkAccountNameUnique, checkAccountPayload, (req, res, next) => {
  // DO YOUR MAGIC
  Account.create(req.account)
    .then(account => {
      res.status(201).json(account);
    })
    .catch(err => next(err));

})

// router.put('/:id', (req, res, next) => {
//   // DO YOUR MAGIC
// });

// router.delete('/:id', (req, res, next) => {
//   // DO YOUR MAGIC
// })

// router.use((err, req, res, next) => { // eslint-disable-line
//   // DO YOUR MAGIC
// })

module.exports = router;
