import axios from 'axios'
import { baseUrl } from '../config'

export const getUser = async (userId) => {
  try {
    const res = await axios.get(`${baseUrl}/users/${userId}`)
    return {
      res: res.data,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
