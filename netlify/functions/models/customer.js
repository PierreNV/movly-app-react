import { object, string, boolean } from "joi";
import { model, Schema } from "mongoose";

const Customer = model(
  "Customer",
  new Schema({
    name: {
      type: String,
      required: true,
      maxlength: 15,
    },
    isGold: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      required: true,
      maxlength: 15,
    },
  })
);

function validateCustomer(customer) {
  const schema = object({
    name: string().max(15).required(),
    phone: string().max(15).required(),
    isGold: boolean(),
  });
  const { error } = schema.validate(customer);
  if (error) console.log(error);
  return customer;
}

const _Customer = Customer;
export { _Customer as Customer };
export const validate = validateCustomer;
