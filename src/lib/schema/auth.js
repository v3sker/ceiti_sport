import * as yup from "yup";

// AUTH SCHEMAS
export function getLoginSchema(t) {
  return yup.object().shape({
    email: yup.string()
      .required(t('validation.email.required'))
      .email(t('validation.email.invalid')),
    password: yup.string()
      .required(t('validation.password.required'))
      .min(6, t('validation.password.min', { min: 6 }))
      .max(20, t('validation.password.max', { max: 20 })),
  })
}

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