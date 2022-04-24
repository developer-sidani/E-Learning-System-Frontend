import axios from 'axios'
import { baseUrl } from './config'

export const getBilling = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/billings/${id}`)
    return {
      data: res.data.data,
      isValid: res.data.data.id !== -1,
      status: res.data.statusCode,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}

export const createBilling = async ({
  userId, nameOnCard, cardNumber, paymentType,
  expiration, cvc, address, email,
}) => {
  try {
    const result = await axios.post(`${baseUrl}/billings`, {
      userId,
      nameOnCard,
      cardNumber,
      paymentType,
      expiration,
      cvc,
      address,
      email,
    })
    return {
      status: result.data.statusCode,
    }
  } catch (err) {
    return {
      message: err.response.data.message,
      status: err.response.data.statusCode,
    }
  }
}
