import axios from 'axios'
import { baseUrl } from '../config'

export const verifyEmail = async ({ verificationToken }) => {
  try {
    const result = await axios.post(`${baseUrl}/auth/verify-email/`, {
      verificationToken,
    })
    return {
      res: result.data,
    }
  } catch (err) {
    return {
      error: err?.response?.data,
    }
  }
}
