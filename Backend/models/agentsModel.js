const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SecurityAgentSchema = new mongoose.Schema(
  {
    agentName: {
      type: String,
      required: [true, "please provide the name"],
      minlength: [3, "name must be minimum length of 3"],
      maxlength: [50, "name must be maximum length of 50"],
    },
    managerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserSchema",
      required: true,
    },
    agentsLogo: {
      type: String,
      required: [true, "please provide the profile picture"],
    },
    address: {
      city: {
        type: String,
        required: [true, "please provide city name"],
      },
      woreda: {
        type: String,
        required: [true, "please provide woreda"],
      },
      kebele: {
        type: String,
        required: [true, "please provide kebele"],
      },
      employees: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "EmployeeSchema",
        },
      ],
    },
  },
  { timestamps: true }
);

SecurityAgentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

SecurityAgentSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, username: this.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

SecurityAgentSchema.methods.comparePassword = async function (
  candidatePassword
) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("SecurityAgentSchema", SecurityAgentSchema);
