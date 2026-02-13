const requestLogger = (req, res, next) => {
  const start = Date.now();
  (`${req.method} ${req.url}`);

  res.on("finish", () => {
    const duration = Date.now() - start;
    (`${req.method} ${req.url} -> ${res.statusCode} (${duration}ms)`);
  });

  next()

};

module.exports = requestLogger;
