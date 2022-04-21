import axios from 'axios'
import { baseUrl } from '../config'

export const getCoursesForStudent = async (userId, limit, page) => {
  try {
    const res = await axios.get(`${baseUrl}/users/${userId}/courses?limit=${limit}&page=${page}`)
    return {
      data: {
        totalDocs: res.data.data.totalDocs,
        limit: res.data.data.totalDocs,
        totalPages: res.data.data.totalDocs,
        page: res.data.data.totalDocs,
        pagingCounter: res.data.data.totalDocs,
        hasPrevPage: res.data.data.totalDocs,
        hasNextPage: res.data.data.totalDocs,
        nextPage: res.data.data.totalDocs,
      },
      courses: res.data.data.docs,
      status: res.data.statusCode,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
