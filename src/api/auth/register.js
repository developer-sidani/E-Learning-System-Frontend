import axios from 'axios'
import { baseUrl } from '../config'

export const register = async (
  {
    fullName,
    username,
    email,
    password,
    phone,
    birthday,
    country,
    gender,
    address,
    isNotified,
    keepMeUpdated,
  },
) => {
  try {
    const result = await axios.post(`${baseUrl}/auth/register`, {
      info: {
        fullName,
        user: username,
        email,
        password,
        language: '621424ccf1545d230c4e8623', // keep same here
        phone,
        role: '62142475f1545d230c4e8620', // keep it here the same
        birthday,
        country,
        gender,
        address,
        type: 'Student', // keep same here
        isNotified,
        keepMeUpdated,
      },
    })
    return {
      data: result?.data?.data,
      message: result?.data?.message,
      status: result?.data?.statusCode,
    }
  } catch (err) {
    return {
      message: err.response.data.message,
      status: err.response.data.statusCode,
    }
  }
}
