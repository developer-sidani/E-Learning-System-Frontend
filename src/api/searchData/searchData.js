import axios from 'axios'
import { baseUrl } from '../config'

export const searchData = async (
  {
    term,
    token,
  },
) => {
  try {
    const res = await axios.post(`${baseUrl}/searchData`, {
      term,
    }, {
      headers: { Authorization: `Bearer ${token}` },
    })
    console.log(token)
    return {
      data: res.data.data.docs,
      status: res.data.statusCode,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
