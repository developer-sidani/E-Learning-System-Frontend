import React from 'react'
import { styles } from '../tw-styles'

const ProfileSection = ({
  values, errors, handleChange, touched,
}) => (
  <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
        <p className="mt-1 text-sm text-gray-500">
          This information will be displayed publicly so be careful what you share.
        </p>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-3 sm:col-span-2">
            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">

              <input
                value={values.user}
                onChange={handleChange}
                type="text"
                name="user"
                id="user"
                className={styles.inputContainer}
                placeholder=""
              />
              {(errors.user) && touched.user ? (
                <div className="mt-2 text-pink-600 text-sm">
                  {errors.user}
                </div>
              ) : null}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default ProfileSection
