import * as yup from "yup";


// AUTH SCHEMAS
export const LoginSchema = yup.object().shape({
  email: yup.string()
    .required("Email is required")
    .email("Invalid email"),
  password: yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
})

export const RegisterSchema = yup.object().shape({
  name: yup.string()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters")
    .max(50, "First name must be at most 50 characters"),
  surname: yup.string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters")
    .max(50, "Last name must be at most 50 characters"),
  email: yup.string()
    .required("Email is required")
    .email("Invalid email"),
  password: yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be at most 50 characters"),
  passwordConfirmation: yup.string()
    .required("Password confirmation is required")
    .min(6, "Password confirmation must be at least 6 characters")
    .max(50, "Password confirmation must be at most 50 characters"),
})