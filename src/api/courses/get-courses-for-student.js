import axios from 'axios'
import { baseUrl } from '../config'

export const getCoursesForStudent = async (userId) => {
  try {
    const res = await axios.get(`${baseUrl}/users/${userId}/courses?limit=1000`)
    return {
      courses: res.data.data.docs,
      status: res.data.statusCode,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
