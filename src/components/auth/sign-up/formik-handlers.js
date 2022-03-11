import { register } from '../../../api'

const submitValues = (callback, handler) => (values, { resetForm }) => {
  values.email = values.email.toLowerCase()
  values.birthday = '2001-02-14'
  values.fullName = `${values.firstname} ${values.lastname}`
  callback(values, resetForm, handler)
}

const callRegisterApi = async (data, callback, handler) => {
  handler.init()
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
      handler.error(res?.err?.response?.data?.message)
    }
    // res.status === 200 && callback()
  } catch (err) {
    console.log({ err })
  } finally {
    handler.stopLoading()
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
  phone: '+96123456712',
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
