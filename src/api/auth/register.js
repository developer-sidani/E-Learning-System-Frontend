import axios from 'axios'
import { baseUrl } from '../config'

export const register = async (
  {
    fullName,
    user: username,
    email,
    password,
    phone,
    birthday,
    country,
    gender,
    address,
    isNotified,
    keepMeUpdated,
    photoUrl,
    interests,
  },
) => {
  try {
    const result = await axios.post(`${baseUrl}/auth/register`, {
      info: {
        fullName,
        username,
        email,
        password,
        language: '621424ccf1545d230c4e8623', // keep same here
        phone,
        birthday,
        country,
        gender,
        address,
        type: 'Student', // keep same here
        isNotified,
        keepMeUpdated,
        photoUrl,
      },
      studentDetails: {
        interests,
      },
    })
    return {
      result,
    }
  } catch (err) {
    return {
      err,
    }
  }
}
