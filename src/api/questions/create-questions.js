import axios from 'axios'
import { baseUrl } from '../config'

export const createQuestion = async ({
  userId,
  lectureId,
  content,

}) => {
  try {
    const result = await axios.post(`${baseUrl}/questions`, {
      userId,
      lectureId,
      content,
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
