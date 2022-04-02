import axios from 'axios'
import { baseUrl } from './config'

export const getCategories = async () => {
  try {
    const res = await axios.get(`${baseUrl}/categories`)
    return {
      res: res.data,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
