import axios from 'axios'
import { baseUrl } from '../config'

export const contactUs = async ({
  firstName,
  lastName,
  email,
  phone,
  subject,
  message,
}) => {
  try {
    const result = await axios.post(`${baseUrl}/contact-us`, {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    })
    return {
      // message: result.data.message,
      status: result.data.statusCode,
    }
  } catch (err) {
    return {
      message: err.response.data.message,
      status: err.response.data.statusCode,
    }
  }
}
