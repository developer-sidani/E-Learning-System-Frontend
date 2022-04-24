import axios from 'axios'
import { baseUrl } from '../config'

export const getCoursesForInstructor = async (userId, limit, page) => {
  try {
    // {{url}}/courses/instructor/6249aebfd2414247444885fe?isActive=true

    const res = await axios.get(`${baseUrl}/courses/instructor/{userId}/?limit=${limit}&page=${page}`)
    return {
      data: {
        totalDocs: res.data.data.totalDocs,
        limit: res.data.data.limit,
        totalPages: res.data.data.totalPages,
        page: res.data.data.page,
        pagingCounter: res.data.data.pagingCounter,
        hasPrevPage: res.data.data.hasPrevPage,
        hasNextPage: res.data.data.hasNextPage,
        prevPage: res.data.data.prevPage,
        nextPage: res.data.data.nextPage,
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
