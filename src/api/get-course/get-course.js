import axios from 'axios'
import { baseUrl } from '../config'

export const getCourse = async (courseId) => {
  try {
    const res = await axios.get(`${baseUrl}/courses/${courseId}`)
    return {
      res: res.data,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
