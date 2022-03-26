import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { XIcon, UserIcon } from '@heroicons/react/outline'

const MobileNav = ({
  categories,
  resources,
  profile,
  reroute,
}) => (
  <Transition
    as={Fragment}
    enter="duration-200 ease-out"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="duration-100 ease-in"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-[100]">
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
            </div>
            <div className="-mr-2">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid grid-cols-1 gap-7">
              {categories.map((category, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => reroute.specific(category.href)}
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                    <category.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-4 text-base font-medium text-gray-900">{category.name}</div>
                </button>
              ))}
              {profile?.token && (
                <button
                  type="button"
                  onClick={reroute.myAccount}
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white"
                  >
                    <UserIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-4 text-base font-medium text-gray-900">My Account</div>
                </button>
              )}
            </nav>
          </div>
        </div>
        <div className="py-6 px-5">
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => reroute.specific('teach-with-us')}
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Teach With Us
            </button>

            <button type="button" className="text-base font-medium text-gray-900 hover:text-gray-700">
              Docs
            </button>
            {resources.map((resource, index) => (
              <button
                key={index}
                type="button"
                onClick={() => reroute.specific(resource.href)}
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {resource.name}
              </button>
            ))}
          </div>
          {profile?.token ? (
            <div className="mt-6">
              <button
                type="button"
                onClick={reroute.logout}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="mt-6">
              <button
                type="button"
                onClick={reroute.signUp}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </button>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {' '}
                <button
                  type="button"
                  onClick={reroute.signIn}
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Sign in
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </Popover.Panel>
  </Transition>
)

export default MobileNav
