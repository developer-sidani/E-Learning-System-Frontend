import axios from 'axios'
import { baseUrl } from '../config'

export const getSectionsWithLectures = async (courseId) => {
  try {
    const res = await axios.get(`${baseUrl}/courses/${courseId}/sections-lectures`)
    return {
      data: res.data.data,
      status: res.data.statusCode,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
