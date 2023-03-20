import UserModel from '../model/User.model.js';
export const getUserInfo = async (req, res, next) => {
  try {
    const data = await UserModel.findById(req.user.id).exec();
    const { username, file } = data;
    return res.status(200).json({ username, file });
  } catch (error) {
    return next(error);
  }
};
