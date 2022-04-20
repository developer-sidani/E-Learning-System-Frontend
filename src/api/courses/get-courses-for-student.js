import axios from 'axios'
import { baseUrl } from '../config'

export const getCoursesForStudent = async (userId, limit, page) => {
  try {
    const res = await axios.get(`${baseUrl}/users/${userId}/courses?limit=${limit}&page=${page}`)
    return {
      res,
      courses: res.data.data.docs,
      status: res.data.statusCode,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
