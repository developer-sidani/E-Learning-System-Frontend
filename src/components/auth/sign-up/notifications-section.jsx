import React from 'react'

const NotificationsSection = ({
  handleChange, values,
}) => (
  <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
        <p className="mt-1 text-sm text-gray-500">Decide which communications you would like to receive.</p>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">

        <fieldset>
          {/* <legend className="text-base font-medium text-gray-900">By Email</legend> */}
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <div className="h-5 flex items-center">
                <input
                  checked={values.keepMeUpdated}
                  onChange={handleChange}
                  id="keepMeUpdated"
                  name="keepMeUpdated"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="newsletter" className="font-medium text-gray-700">
                  Newsletter
                </label>
                <p className="text-gray-500">Subscribe to receive recent news, courses, and offers.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  checked={values.isNotified}
                  onChange={handleChange}
                  id="isNotified"
                  name="isNotified"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>

              <div className="ml-3 text-sm">
                <label htmlFor="notifications" className="font-medium text-gray-700">
                  Notifications
                </label>
                <p className="text-gray-500">Receive all Learn+ relevent notifications.</p>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
)

export default NotificationsSection
