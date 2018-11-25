module.exports = (req, res, next) => {
  if (!req.user) {
    retrun(res.status(401).send({ error: "You must log in!" }));
  }
  next();
};
