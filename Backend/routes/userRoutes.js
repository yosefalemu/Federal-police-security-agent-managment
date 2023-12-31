const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middlewares/authentication");
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateProfile,
  updateUserPassword,
  uploadImage
} = require("../controllers/usersController");

router
  .route("/")
  .get( authenticateUser, authorizePermissions("admin", "manager"), getAllUsers);

  router
    .route("/uploadImage")
    .post(
      uploadImage
    );

router.route("/showMe").get(authenticateUser, showCurrentUser);
router
  .route("/updateUser/:id")
  .patch(authenticateUser, authorizePermissions("admin"), updateUser);
router.route("/updateProfile").patch(authenticateUser, updateProfile)
router.route("/updateUserPassword").patch(authenticateUser, updateUserPassword);

router.route("/:id").get(authenticateUser, getSingleUser);

module.exports = router;
