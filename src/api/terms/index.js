import axios from 'axios'
import { baseUrl } from '../config'

export const getTerms = async () => {
  try {
    const res = await axios.get(`${baseUrl}/terms-and-conditions`)
    return {
      res: res.data,
    }
  } catch (err) {
    return {
      error: err.response.data,
    }
  }
}
