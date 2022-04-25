import * as Yup from 'yup'

export const ProfileSchema = Yup.object().shape({
  username: Yup.string().min(5, 'must be at least 5 characters').required('Required'),
  // photo: Yup.string(),
  // email: Yup.string().email('Must be a valid email').required('Required'),
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  gender: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  birthday: Yup.string().required('Required'),
  // interests: Yup.array().min(1).required('Required'),
})

export const PasswordSchema = Yup.object().shape({

  oldPassword: Yup.string().required('Required'),

  newPassword: Yup.string().required('Required').matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
  ),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match').required('Required'),

})

export const BillingSchema = Yup.object().shape({

  email: Yup.string().email('Must be a valid email').required('Required'),
  address: Yup.string().required('Required'),
  name_on_card: Yup.string().required('Required'),
  card_number: Yup.string().min(14).max(16).required('Required'),
  expiration: Yup.string()
    .typeError('Not a valid expiration date. Example: MM/YY')
    .max(5, 'Not a valid expiration date. Example: MM/YY')
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      'Not a valid expiration date. Example: MM/YY',
    )
    .required('Expiration date is required'),
  cvc: Yup.string()
    .matches(
      /\b\d{3}\b/g,
      'Must be 3 digits',
    )
    .required(),
})
