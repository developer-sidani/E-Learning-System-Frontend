import axios from 'axios'
import { baseUrl } from './config'

export const changePassword = async ({
  oldPassword, newPassword,
}, token) => {
  console.log(
    oldPassword,
    newPassword,
  )
  try {
    const result = await axios.patch(`${baseUrl}/users/change-password`, {
      oldPassword,
      newPassword,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return {
      message: result.data.message,
      status: result.data.statusCode, // 203
    }
  } catch (err) {
    return {
      message: err.response.data.message,
      status: err.response.data.statusCode,
    }
  }
}
