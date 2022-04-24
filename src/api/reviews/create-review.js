import axios from 'axios'
import { baseUrl } from '../config'

export const createReview = async ({
  userId,
  courseId,
  content,
  rating,
}) => {
  try {
    const result = await axios.post(`${baseUrl}/reviews`, {
      userId,
      courseId,
      content,
      rating,
    })
    return {
      message: result.data.message,
      status: result.data.statusCode,
    }
  } catch (err) {
    return {
      message: err.response.data.message,
      status: err.response.data.statusCode,
    }
  }
}
