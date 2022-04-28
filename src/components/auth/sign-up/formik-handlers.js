import moment from 'moment'
import { register } from '../../../api'

const dateFormat = 'yyyy-MM-DD'

const submitValues = (callback, handler, photoUrl) => (values, { resetForm }) => {
  values.email = values.email.toLowerCase()
  values.photoUrl = photoUrl || 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/images%2Fuser.png?alt=media&token=84d78ce0-3b98-4506-af71-e7599f0a2bb0'
  values.birthday = moment(values.birthday).format(dateFormat)
  values.fullName = `${values.firstname} ${values.lastname}`
  callback(values, resetForm, handler)
}

const callRegisterApi = async (data, callback, handler) => {
  handler.init()
  try {
    const res = await register(
      data,
    )
    console.log({ res })
    if (res?.status === 200 || res?.result?.status === 200) {
      await handler.success(callback)
    } else {
      handler.error(res?.err?.response?.data?.message)
    }
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
  phone: '',
  address: '',
  country: '',
  gender: '',
  isNotified: true,
  keepMeUpdated: true,
  birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
  interests: [],
}
export {
  initialValues,
  submitValues,
  callRegisterApi,
}
