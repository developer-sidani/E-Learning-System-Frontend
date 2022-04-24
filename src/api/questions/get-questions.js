import axios from 'axios'
import { baseUrl } from '../config'

export const getQuestions = async (lectureId) => {
  try {
    const res = await axios.get(`${baseUrl}/questions/${lectureId}`)
    return {
      res: res.data.data,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
