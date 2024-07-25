import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Phone Number is required";
  }else if (!/^\d{10,15}$/.test(values.email)) {
    errors.email = "Phone Number is invalid";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
}
