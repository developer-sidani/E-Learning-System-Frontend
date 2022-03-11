import { register } from '../../../api'

const submitValues = (callback) => (values, { resetForm }) => {
  values.email = values.email.toLowerCase()
  values.birthday = '2001-02-14'
  values.fullName = `${values.firstname} ${values.lastname}`
  callback(values, resetForm)
}

const callRegisterApi = async (data, callback) => {
  console.log(data)
  try {
    // console.log(data)
    const res = await register(
      data,
    )
    console.log({ res })
    if (res?.status === 200) {
      callback()
    } else {
      //  send error
    }
    // res.status === 200 && callback()
  } catch (err) {
    console.log({ err })
  }
}

const initialValues = {
  user: '',
  photo: '',
  email: '',
  password: '',
  confirm_password: '',
  firstname: '',
  lastname: '',
  phone: '',
  birthday: '',
  address: '',
  country: '',
  gender: '',
  isNotified: true,
  keepMeUpdated: true,
}
export {
  initialValues,
  submitValues,
  callRegisterApi,
}
