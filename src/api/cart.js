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

export const updateCart = async (coursesIds, token) => {
	try {
		const result = await axios.patch(
			`${baseUrl}/carts`,
			{
				coursesIds,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		)
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
