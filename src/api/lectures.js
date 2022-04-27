import axios from 'axios'
import { baseUrl } from './config'

export const getLastWatched = async (token, courseId) => {
	try {
		const res = await axios.get(`${baseUrl}/lectures/last-watched/${courseId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return {
			data: res.data.data,
			status: res.data.statusCode,
		}
	} catch (e) {
		return e
	}
}
export const setLastWatched = async (lectureId, timeWatched, token) => {
	try {
		const res = await axios.post(
			`${baseUrl}/student-learning`,
			{
				lectureId,
				timeWatched,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		)
		return {
			data: res.data.data,
			status: res.data.statusCode,
		}
	} catch (e) {
		return e
	}
}
