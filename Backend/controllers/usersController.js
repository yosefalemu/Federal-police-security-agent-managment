const UserSchema = require("../models/usersModel");
const { BadRequestError, UnauthenticatedError } = require("../errors");
// const sendEmail = require("../utils/sendEmail");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const {
  createTokenUser,
  attachCookiesToResponse,
  checkPermissions,
} = require("../utils");

const createUser = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  if (password) {
    if (password !== confirmPassword) {
      throw new BadRequestError("passwords doesnot match");
    }
  }
  const userExists = await UserSchema.findOne({
    $or: [{ email }],
  });
  if (userExists) {
    if (userExists.email === email) {
      throw new BadRequestError("email taken");
    }
  }
  // first registered user is an admin
  const user = await UserSchema.create(req.body);

  if (user) {
    const token = user.createJWT();
    user.token = token;
    await user.save();
    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({ res, user: tokenUser });
    res.status(StatusCodes.CREATED).json({ user: tokenUser, token });
  } else {
    res.status(400);
    throw new BadRequestError("Invalid user data");
  }
};

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
  if (user) {
    const token = user.createJWT();
    user.token = token;
  }
  const validPassword = await user.comparePassword(password);
  if (validPassword) {
    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({ res, user: tokenUser });

    res.status(StatusCodes.OK).json({ user: tokenUser, token: user.token });
  } else {
    throw new UnauthenticatedError("wrong password");
  }
};
const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};

const getAllUsers = async (req, res) => {
  const users = await UserSchema.find({});
  if (users) {
    res.status(201).json(users);
  } else {
  }
};

const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserSchema.findById(id);
    if (!user) {
      throw new BadRequestError(`there is no user with id ${id}`);
    }
    checkPermissions(req.user, user._id);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};
const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};
// update user with user.save()
const updateUser = async (req, res) => {
  const id = req.params.id;
  const {email, role } = req.body;
  // console.log(role)
  if (!role) {
    throw new CustomError.BadRequestError("Please provide new role");
  }
  const user = await UserSchema.findById(id);
  user.role = role;
console.log(user.role)
  await user.save();

  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.OK).json({ user: tokenUser });
};
const updateProfile = async (req, res) => {
  const { firstName, middleName, lastName, phonenumber, profilePicture } =
    req.body;
  if (
    !firstName ||
    !middleName ||
    !lastName ||
    !phonenumber ||
    !profilePicture
  ) {
    throw new CustomError.BadRequestError("Please provide all values");
  }
  const user = await UserSchema.findOne({ _id: req.user.userId });

  user.firstName = firstName;
  user.middleName = middleName;
  user.lastName = lastName;
  user.phonenumber = phonenumber;

  user.profilePicture = profilePicture;

  await user.save();

  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.OK).json({ user: tokenUser });
};
const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError("Please provide both values");
  }
  const user = await UserSchema.findOne({ _id: req.user.userId });

  const isPasswordCorrect = await user.comparePassword(oldPassword);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  user.password = newPassword;

  await user.save();
  res.status(StatusCodes.OK).json({ msg: "Success! Password Updated." });
};
module.exports = {
  createUser,
  loginUser,
  logout,
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateProfile,
  updateUserPassword,
};
