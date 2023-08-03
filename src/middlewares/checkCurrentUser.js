export default function checkCurrentUser(req, res, next) {
  if (Number(req.params.id) === req.session.user.id) return next();
  return res.sendStatus(403);
}
