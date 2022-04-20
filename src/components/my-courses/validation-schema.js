import * as Yup from 'yup'

export const QuestionSchema = Yup.object().shape({

  message: Yup.string().required('Your message could not be empty'),

})
