import axios from 'axios'
import { baseUrl } from '../config'

export const login = async ({ email, password }) => {
  try {
    const result = await axios.post(`${baseUrl}/auth/login`, {
      email,
      password,
    })
    return {
      token: result?.data?.token,
      user: result?.data?.user,
      status: result.status,
    }
  } catch (err) {
    console.error(err)
  }
}
