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
    const res = await axios.get(`${baseUrl}/courses?page=${page}&limit=${limit}&isActive=true`)
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
    const res = await axios.get(`${baseUrl}/categories/${category}/courses?limit=${limit}&page=${page}&isActive=true`)
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

export const getBestSeller = async () => {
  try {
    const res = await axios.get(`${baseUrl}/courses/best-seller?limit=20&isActive=true`)
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
