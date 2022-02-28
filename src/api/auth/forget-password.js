import axios from 'axios'
import { baseUrl } from '../config'

export const login = async ({ email }) => {
  try {
    return await axios.post(`${baseUrl}/auth/forgot-password`, {
      email,
    })
  } catch (err) {
    return {
      err,
    }
  }
}
