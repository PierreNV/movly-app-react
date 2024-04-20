import Joi, { objectId } from "joi";

export default function () {
  objectId = require("joi-objectid")(Joi);
}
