import { get } from "config";
import { sign } from "jsonwebtoken";
import { object, string } from "joi";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  isAdmin: Boolean,
});

userSchema.methods.generateAuthToken = function () {
  const token = sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      isAdmin: this.isAdmin,
    },
    get("jwtPrivateKey")
  );
  return token;
};

const User = model("User", userSchema);

function validateUser(user) {
  const schema = object({
    name: string().max(50),
    email: string().max(255).email(),
    password: string().min(5).max(255),
  });
  const { error } = schema.validate(user);
  if (error) console.log(error);
  return user;
}

const _User = User;
export { _User as User };
export const validate = validateUser;
