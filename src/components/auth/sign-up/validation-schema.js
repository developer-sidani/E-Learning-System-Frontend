import * as Yup from 'yup'

export const SignUpSchema = Yup.object().shape({
  user: Yup.string().min(5, 'must be at least 5 characters').required('Required'),
  photo: Yup.string(),
  email: Yup.string().email('Must be a valid email').required('Required'),
  password: Yup.string().required('Required').matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
  ),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  gender: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  interests: Yup.array().min(1).required('Required'),
})
