import { object, string } from "joi";
import { compare } from "bcrypt";
import _ from "lodash";
import { User } from "../models/user";
import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  const error = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password.");

  const validPassword = await compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");

  const token = user.generateAuthToken();
  res.send(token);
});

function validate(req) {
  const schema = object({
    email: string().min(5).max(255).email(),
    password: string().min(5).max(255),
  });
  const { error } = schema.validate(req);
  return error ? error : null;
}

export default router;
