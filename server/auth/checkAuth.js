import jwt from 'jsonwebtoken';
import {} from 'jsonwebtoken';
import ENV from '../config.js';

export default (req, res, next) => {
  const token = req.cookies.access_token;
  // console.log(token);
  if (!token) {
    return res.status(401).json('no token available');
  }

  return jwt.verify(token, ENV.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json('invalid token');
    }

    req.user = decoded;
    return next();
  });
};
