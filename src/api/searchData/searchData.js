import axios from 'axios'
import { baseUrl } from '../config'

export const searchData = async (
  {
    term,
    userId,
  },
) => {
  try {
    let res
    if (userId) {
      console.log('oj')
      res = await axios.post(`${baseUrl}/searchData`, {
        term,
        userId,
      })
    } else {
      res = await axios.post(`${baseUrl}/searchData`, {
        term,
      })
    }

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

export const getSearchForUser = async (token) => {
  try {
    const res = await axios.get(`${baseUrl}/users/searchData`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return {
      status: res.data.statusCode,
      data: res.data.data,
    }
  } catch (e) {
    return {
      error: e,
      status: e.statusCode,
    }
  }
}
