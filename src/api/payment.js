import axios from 'axios'
import { baseUrl } from './config'

export const createPayment = async ({ userId, paymentType }, coursesIds, amount) => {
	try {
		const result = await axios.post(`${baseUrl}/payments`, {
			userId,
			coursesIds,
			amount,
			paymentType,
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
