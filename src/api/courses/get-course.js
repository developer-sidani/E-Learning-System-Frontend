import axios from 'axios'
import { baseUrl } from '../config'

export const getCourseById = async (courseId) => {
  try {
    const res = await axios.get(`${baseUrl}/courses/${courseId}`)
    return {
      data: res.data.data,
      status: res.data.statusCode,
    }
  } catch (err) {
    return {
      res: err.response.data,
    }
  }
}
export const getCourses = async (page, limit) => {
  try {
    const res = await axios.get(`${baseUrl}/courses?page=${page}&limit=${limit}`)
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
export const getCoursesForCategory = async (category, page, limit) => {
  try {
    const res = await axios.get(`${baseUrl}/categories/${category}/courses?limit=${limit}&page=${page}`)
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
