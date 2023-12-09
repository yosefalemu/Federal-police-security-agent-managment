const UserSchema = require("../models/usersModal");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const sendEmail = require("../utils/sendEmail");

// @desc    Register a new user
// @route   POST /api/v1/users/register
// @access  Public
const createUser = async (req, res) => {
  const { name, username, email, password, confirmPassword } = req.body;
  if (password) {
    if (password !== confirmPassword) {
      throw new BadRequestError("passwords doesnot match");
    }
  }
  const userExists = await UserSchema.findOne({
    $or: [{ email }, { username }],
  });
  if (userExists) {
    if (userExists.username === username) {
      throw new BadRequestError("username taken");
    } else {
      throw new BadRequestError("email taken");
    }
  }
  const user = await UserSchema.create(req.body);

  if (user) {
    const token = user.createJWT();
    user.token = token;
    await user.save();

    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      token,
    });
  } else {
    res.status(400);
    throw new BadRequestError("Invalid user data");
  }
};

// @desc    Login user
// @route   POST /api/v1/user/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    throw new BadRequestError("email required");
  }
  if (!password) {
    throw new BadRequestError("password required");
  }
  const user = await UserSchema.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid creditials");
  }
  const validPassword = await user.comparePassword(password);
  if (validPassword) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      profilepicture: user.profilepicture,
      token: user.token,
    });
  } else {
    throw new UnauthenticatedError("wrong password");
  }
};

// @desc    Get All Users
// @route   Get /api/v1/user
// @access  Public
const getAllUsers = async (req, res) => {
  const users = await UserSchema.find({});
  if (users) {
    res.status(201).json(users);
  } else {
  }
};
// @desc    Get Single User
// @route   Get /api/v1/user/:id
// @access  Public
const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserSchema.findById(id);
    if (!user) {
      throw new BadRequestError(`there is no user with id ${id}`);
    }
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getSingleUser,
};
