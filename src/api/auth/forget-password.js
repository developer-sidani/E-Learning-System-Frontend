import axios from 'axios'
import { baseUrl } from '../config'

export const forgetPassword = async ({ email }) => {
  try {
    const res = await axios.post(`${baseUrl}/auth/forgot-password`, {
      email,
    })
    return {
      res: res.data,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
