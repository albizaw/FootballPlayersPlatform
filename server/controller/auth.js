import User from '../model/User.model.js';
import bcrypt from 'bcrypt';
import ENV from '../config.js';
import {} from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(401).json('username and password are required');
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
      file: req.body.file ? req.body.file : '',
    });

    await newUser.save();
    return res.status(201).json('New user created');
  } catch (error) {
    return res.status(401).json('Error');
  }
};

export const login = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(401).json('username and password are required');
  }

  try {
    const user = await User.findOne({ username: req.body.username }).exec();

    if (!user) {
      return res.status(500).json('User not found');
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(500).json('Password are not same');
    }

    const details = {
      id: user._id,
      username: user.username,
    };

    const token = jwt.sign(details, ENV.JWT_SECRET, {
      expiresIn: '24h',
    });

    console.log(ENV.JWT_SECRET);

    return res
      .cookie('access_token', token, { httpOnly: false })
      .status(201)
      .json({ message: 'login success', token });
  } catch (error) {
    return res.status(500).json('Error');
  }
};

export const logout = async (req, res) => {
  res.clearCookie('access_token');
  return res.status(200).json({ message: 'You are log out' });
};

export const isLogIn = async (req, res) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(500).json(false);
  }

  return jwt.verify(token, ENV.JWT_SECRET, (err) => {
    if (err) {
      return res.status(500).json(false);
    } else {
      return res.status(201).json(true);
    }
  });
};
