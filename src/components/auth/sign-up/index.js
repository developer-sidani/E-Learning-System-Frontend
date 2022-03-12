import { SignUpSchema } from './validation-schema'
import { callRegisterApi, submitValues, initialValues } from './formik-handlers'
import ProfileSection from './profile-section'
import PersonalInformationSection from './personal-information-section'
import NotificationsSection from './notifications-section'
import ComponentHeader from './component-header'
import ErrorAlert from './error-alert'
import SuccessModal from './success-modal'

// eslint-disable-next-line import/no-cycle
export { SignUpComponent } from './sign-up'
export {
  SuccessModal,
  SignUpSchema,
  callRegisterApi,
  submitValues,
  initialValues,
  ProfileSection,
  PersonalInformationSection,
  NotificationsSection,
  ComponentHeader,
  ErrorAlert,
}
