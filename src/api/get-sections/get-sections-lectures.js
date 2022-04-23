import axios from 'axios'
import { baseUrl } from '../config'

export const getSectionsLectures = async (courseId) => {
  try {
    const res = await axios.get(`${baseUrl}/courses/${courseId}/sections-lectures`)
    return {
      res: res.data,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
