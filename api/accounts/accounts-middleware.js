const Account = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  let {name, budget} = req.body;
  if(typeof name !== 'string' || name.trim() === ''){
    res.status(400).json({ message: 'name and budget are required'})
    return
  }
  if(budget === ''){
    res.status(400).json({ message: 'name and budget are required'})
  }
  if(typeof budget!== 'number'){
    res.status(400).json({ message: 'budget has to be a number'})
    return
  }
  if(name.trim().length < 3 || name.trim().length > 100){
    res.status(400).json({ message: 'between 3 and 100'})
  } 
  req.account = { name: name.trim(), budget: budget}
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  Account.getAll()
    .then(accounts => {
      const takenName = accounts.filter(account => account.name === req.body.name)
      if(takenName.length >= 1){
        res.status(400).json({ message: 'name is taken' })
        return;
      }
      next();
    })
    .catch(err => next(err))
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  Account.getById(req.params.id)
    .then(account => {
      if(account == null) {
        res.status(404).json({ message: 'account not found' });
        return;
      }
      req.account = account;

      next();

    })
    .catch(err => next(err));
}
