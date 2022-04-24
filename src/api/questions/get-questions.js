import axios from 'axios'
import { baseUrl } from '../config'

export const getQuestions = async (lectureId) => {
  try {
    // {{url}}/lectures/626421edece06f001d01a095/questions
    const res = await axios.get(`${baseUrl}/lectures/${lectureId}/questions`)
    return {
      res: res.data.data.docs,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
