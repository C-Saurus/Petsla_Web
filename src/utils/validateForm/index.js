import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    username: yup
      .string()
      .min(8, 'Username must be between 8-20 characters!')
      .max(20, 'Username must be between 8-20 characters!')
      .required('Username is required!'),
  
    password: yup
      .string()
      .min(8, 'Password must be between 8-20 characters!')
      .max(20, 'Password must be between 8-20 characters!')
      .required('Password is required!'),
  });


export const registerSchema = yup.object().shape({
  firstName: yup.string().required('First name is required!'),

  lastName: yup.string().required('Last name is required!'),

  email: yup.string().required('Email is required!'),

  username: yup
    .string()
    .min(8, 'Username must be between 8-20 characters!')
    .max(20, 'Username must be between 8-20 characters!')
    .required('Username is required!'),

  password: yup
    .string()
    .min(8, 'Password must be between 8-20 characters!')
    .max(20, 'Password must be between 8-20 characters!')
    .required('Password is required!'),
});