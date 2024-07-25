import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Name is required";
  }
   if (!values.phone) {
    errors.phone = "Phone Number is required";
  } else if (!/^\d{10,15}$/.test(values.phone)) {
    errors.phone = "Phone Number is invalid";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
}
