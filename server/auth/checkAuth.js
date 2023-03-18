import jwt from 'jsonwebtoken';
import {} from 'jsonwebtoken';
import ENV from '../config.js';

export default (req, res, next) => {
  console.log('start');
  const token = req.cookies.access_token;

  if (!token) {
    return res.json('no token available');
  }

  return jwt.verify(token, ENV.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.json('invalid token');
    }
    req.user = decoded;
    return next();
  });
};
