function errorHandler(err, req, res, next) {
  res.status(500);
  msg = err.message || err;
  res.send({ error: msg });
}

module.exports = errorHandler;
