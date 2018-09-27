const router = require('express').router();

router.use(function (req, res, next) {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});