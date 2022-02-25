import axios from 'axios'
import { baseUrl } from '../config'

export const login = async ({ email, password }) => {
  try {
    const result = await axios.post(`${baseUrl}/auth/login`, {
      email,
      password,
    })
    return {
      token: result?.data?.data?.token,
      user: result?.data?.data?.user,
      status: result.status,
    }
  } catch (err) {
    return {
      message: err.response.data.message,
      status: err.response.data.statusCode,
    }
  }
}
