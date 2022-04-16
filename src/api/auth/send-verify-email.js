import axios from 'axios'
import { baseUrl } from '../config'

export const sendVerifyEmail = async ({ email }) => {
  try {
    const result = await axios.post(`${baseUrl}/auth/send-verify-email`, {
      email,
    })
    return {
      response: result.data,
    }
  } catch (err) {
    return {
      message: err?.response?.data?.message,
      status: err?.response?.data?.statusCode,
    }
  }
}
