import axios from 'axios'
import { baseUrl } from '../config'

export const getFaqs = async () => {
  try {
    const res = await axios.get(`${baseUrl}/faqs`)
    return {
      res: res.data,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
