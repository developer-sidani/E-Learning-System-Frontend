import axios from 'axios'
import { baseUrl } from '../config'

export const mailchimp = async ({
  email,
}) => {
  try {
    const result = await axios.post(`${baseUrl}/subscribe`, {
      email,
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
