export {
  login, register, forgetPassword, resetPassword, verifyEmail, sendVerifyEmail,
} from './auth'
export { getFaqs } from './faqs'
export { getCategories } from './categories'
export { getTerms } from './terms'
export { contactUs } from './contact-us'
export { getCourse } from './get-course'
export { getReviews } from './get-reviews'
export { getUser } from './get-user'
export { getCart, updateCart } from './cart'
export { searchData, getSearchForUser } from './searchData'

export { getSectionsLectures } from './get-sections'

export {
  getCoursesForStudent, getCoursesForInstructor, getCoursesByCategory, getCourseById, getCourses, getCoursesForCategory,
} from './courses'
export { getBilling, createBilling } from './billing'
export { getSectionsWithLectures } from './sections'
export { createPayment } from './payment'
export { getLastWatched, setLastWatched } from './lectures'
