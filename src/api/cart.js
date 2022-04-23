import axios from 'axios'
import { baseUrl } from './config'

export const getCart = async (token) => {
  try {
    const res = await axios.get(`${baseUrl}/carts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return {
      data: res.data.data.coursesIds,
      status: res.data.statusCode,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
