var jwt = require('jsonwebtoken');
var secret =require('./config')
function verifyToken(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['token'];
  console.log(req.headers);
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, secret.secret, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    req.decoded = decoded;
    next();
  });
}
module.exports = verifyToken;
