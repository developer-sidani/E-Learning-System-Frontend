import axios from 'axios'
import { baseUrl } from '../config'

export const resetPassword = async ({ newPassword, resetToken }) => {
  try {
    const result = await axios.post(`${baseUrl}/auth/change-password`, {
      newPassword,
      resetToken,
    })
    return {
      result: result?.data,
    }
  } catch (err) {
    return {
      err: err?.response?.data,
    }
  }
}
