import { Router } from "express";
import auth from "../middleware/auth";
import { genSalt, hash } from "bcrypt";
import { pick } from "lodash";
import { User, validate } from "../models/user";

const router = Router();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User(pick(req.body, ["name", "email", "password"]));
  const salt = await genSalt(10);
  user.password = await hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(pick(user, ["_id", "name", "email"]));
});

export default router;
