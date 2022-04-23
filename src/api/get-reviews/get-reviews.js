import axios from 'axios'
import { baseUrl } from '../config'

export const getReviews = async (courseId) => {
  try {
    const res = await axios.get(`${baseUrl}/courses/${courseId}/reviews`)
    return {
      res: res.data.data.docs,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
