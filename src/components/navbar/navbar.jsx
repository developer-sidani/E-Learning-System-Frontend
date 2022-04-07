import React, { Fragment } from 'react'
import {
  Disclosure, Menu, Transition,
} from '@headlessui/react'
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const user = {
  name: 'Floyd Miles',
  email: 'floy.dmiles@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' },
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Logout', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => (
  <Disclosure as="nav" className="bg-primary" aria-label="Global">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center px-2 lg:px-0">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden lg:ml-8 lg:flex lg:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-sky-200 hover:text-primary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative text-gray-400">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full bg-white border-transparent py-2 pl-10 pr-3 text-base leading-5 focus:outline-none focus:ring-0 focus:border-white text-gray-900 placeholder-gray-400 sm:text-sm rounded-md"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center lg:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-sky-200 hover:bg-sky-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="hidden lg:ml-4 lg:flex lg:items-center">
              <button
                type="button"
                className="flex-shrink-0 p-1 text-sky-200 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-500 focus:ring-white"
              >
                <span className="sr-only">Notifications</span>
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="ml-4 relative flex-shrink-0">
                <div>
                  <Menu.Button className="bg-sky-500 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-500 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="lg:hidden">
          <div className="pt-2 pb-3 px-2 space-y-1">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-sky-200 hover:text-primary"
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-sky-500">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">{user.name}</div>
                <div className="text-sm font-medium text-sky-200">{user.email}</div>
              </div>
              <button
                type="button"
                className="ml-auto flex-shrink-0 rounded-full p-1 text-sky-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-500 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 px-2">
              {userNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md py-2 px-3 text-base font-medium text-sky-200 hover:bg-sky-200 hover:text-primary"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
)

export default Navbar
