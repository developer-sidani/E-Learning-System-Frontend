import React, { Fragment, useMemo } from 'react'
import {
  Disclosure, Menu, Popover, Transition,
} from '@headlessui/react'
import { ChevronDownIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import {
  MenuIcon, XIcon,
  CodeIcon,
  BriefcaseIcon,
  CameraIcon,
  PhotographIcon,
  UserIcon,
  CogIcon,
  BookOpenIcon,
} from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Badge } from '@mui/material'

const user = {
  name: 'Guest',
  email: '',
  photoUrl: 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/images%2Fuser.png?alt=media&token=11e4daf6-bffa-4e1d-8359-260f96c87514',
}
const categories = [
  {
    name: 'Development',
    // description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: CodeIcon,
  },
  {
    name: 'Business',
    // description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: BriefcaseIcon,
  },
  {
    name: 'Personal development',
    // description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: UserIcon,
  },
  {
    name: 'IT & Software',
    // description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: CogIcon,
  },
  {
    name: 'Design',
    // description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: PhotographIcon,
  },
  {
    name: 'Photography & Video',
    // description: 'Get detailed reports that will help you make more informed decisions ',
    href: '#',
    icon: CameraIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const profile = useSelector(({ profile }) => profile)
  const cart = useSelector(({ cart }) => cart)
  const getTotal = cart.reduce((acc, { price }) => acc + price, 0)
  const userData = profile?.user?.info
  const router = useRouter()
  const resources = [
    {
      name: 'Contact Us',
      description: 'Get all of your questions answered in our forums or contact support.',
      handleClick() {
        router.push('/contact-us')
      },
    },
    {
      name: 'About Us',
      description: 'Learn how to maximize our platform to get the most out of it.',
      handleClick() {
        router.push('/about-us')
      },
    },
    {
      name: 'FAQs',
      description: 'See what meet-ups and other events we might be planning near you.',
      handleClick() {
        router.push('/faqs')
      },
    },
    {
      name: 'Terms of Use',
      description: 'Understand how we take your privacy seriously.',
      handleClick() {
        router.push('/terms-of-use')
      },
    },
  ]
  const userNavigation = useMemo(() => profile
    ?.token ? [
      {
        name: 'My Courses',
        handleClick() {
          router.push('/my-courses')
        },
        icon: BookOpenIcon,
      },
      {
        name: 'My Account',
        handleClick() {
          router.push('/my-account')
        },
        icon: UserIcon,
      },
      {
        name: 'Logout',
        handleClick() {
          localStorage.clear()
          router.reload()
        },
        icon: UserIcon,
      },
    ] : [
      {
        name: 'Sign In',
        handleClick() {
          router.push('/auth/sign-in')
        },
        icon: BookOpenIcon,
      },
      {
        name: 'Sign Up',
        handleClick() {
          router.push('/auth/sign-up')
        },
        icon: UserIcon,
      },
    ], [profile, router])

  return (
    <Disclosure as="nav" className="bg-primary" aria-label="Global">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <button type="button" className="flex-shrink-0 flex items-center" onClick={() => router.push('/')}>
                  <img
                    className="h-10 w-auto"
                    src="https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/images%2Flogo%2Flogo-for-navbar.svg?alt=media&token=2fe0d94c-3ae8-4c8b-ac17-c03f0c08c1dc"
                    alt="Workflow"
                  />
                </button>
                <div className=" hidden lg:ml-8 lg:flex lg:space-x-4">
                  <Popover.Group as="nav" className="hidden md:flex space-x-10">
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'text-primary bg-sky-200' : 'text-white bg-primary',
                              'group bg-white rounded-md inline-flex items-center rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-sky-200 hover:text-primary',
                            )}
                          >
                            <span>Categories</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500',
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-50 pl-2 mt-3 transform w-max max-w-md lg:max-w-2xl lg:ml-0 lg:left-40 lg:-translate-x-1/2">
                              <div className="ml-8 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                  {categories.map((category, index) => (
                                    <button
                                      key={index}
                                      type="button"
                                      onClick={() => {}}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                        <category.icon className="h-6 w-6" aria-hidden="true" />
                                      </div>
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">{category.name}</p>
                                        <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    <button
                      type="button"
                      onClick={() => router.push('/teach-with-us')}
                      className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-sky-200 hover:text-primary"
                    >
                      Teach With Us
                    </button>
                    <a href="#" className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-sky-200 hover:text-primary">
                      Docs
                    </a>

                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'text-primary bg-sky-200' : 'text-white bg-primary',
                              'group bg-white rounded-md inline-flex items-center rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-sky-200 hover:text-primary',
                            )}
                          >
                            <span>More</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500',
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  {resources.map((resource, index) => (
                                    <button
                                      type="button"
                                      key={index}
                                      onClick={resource.handleClick}
                                      // href={resource.href}
                                      className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                                    >
                                      <p className="text-base font-medium text-gray-900">{resource.name}</p>
                                      <p className="mt-1 text-sm text-gray-500">{resource.description}</p>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </Popover.Group>
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
                <Disclosure.Button
                  className="flex-shrink-0 p-1 text-sky-200 rounded-full hover:text-white focus:outline-none"
                >
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <Popover className="relative">
                  {() => (
                    <>
                      <Popover.Button
                        className="flex-shrink-0 p-1 text-white rounded-full hover:text-sky-200 focus:outline-none"
                      >
                        <Badge color="secondary" badgeContent={cart.length}>
                          <ShoppingCartIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </Badge>
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 left-[-200%] transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {cart?.map((x, index) => index < 3 && (
                                  <a
                                    key={index}
                                    href={x.href}
                                    className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                                  >

                                    <div className="grid grid-cols-2 h-full w-full">
                                      {/* TODO if loading  animate-pulse opacity-0 bg-gray-800 */}
                                      <div className="w-28">
                                        <img className="" src={x.image} alt="" />
                                      </div>
                                      <div>
                                        <div>
                                          <p className="text-base font-medium text-gray-900">{x.name}</p>
                                        </div>
                                        <div>
                                          <p className="mt-1 text-sm text-gray-500">{`$${x.price}`}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                              ))}
                              {cart.length > 3 && (
                                <p className="text-sm text-gray-500 -my-2">{`+${cart.length - 3} more`}</p>
                              )}
                              <hr />
                              <p className="text-base font-bold text-center text-gray-900">
                                Total price:
                                $
                                {getTotal}

                              </p>
                              <button type="button" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-white hover:text-primary hover:border-primary">Go to cart</button>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Menu as="div" className="ml-4 relative flex-shrink-0">
                  <div>
                    <Menu.Button
                      className="bg-sky-500 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-500 focus:ring-white"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src={userData?.photoUrl || user?.photoUrl} alt="" />
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
                    <Menu.Items
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    >
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <button
                              type="button"
                              onClick={item.handleClick}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700 w-full',
                              )}
                            >
                              {item.name}
                            </button>
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
            <div className="mt-6 px-5">
              <nav className="grid grid-cols-1 gap-7">
                {categories.map((category, index) => (
                  <button
                    type="button"
                    key={index}
                    className="p-3 flex items-center rounded-lg text-base font-medium text-white hover:text-sky-200"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                      <category.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="ml-4 text-base font-medium text-white">{category.name}</div>
                  </button>
                ))}
              </nav>
            </div>
            <div className="py-6 px-5">
              <div className="pt-6 pb-3 border-t border-sky-500">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={userData?.photoUrl || user.photoUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">{userData?.fullName || user.name}</div>
                    <div className="text-xs text-clip max-w-xs font-medium text-sky-200">{userData?.email || user.email}</div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full p-1 text-white hover:text-sky-200 focus:outline-none"
                  >
                    <span className="sr-only">View Cart</span>
                    <Badge color="primary" badgeContent={cart.length}>
                      <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                    </Badge>
                  </button>
                </div>
                {profile?.token && (
                  <div className="mt-3 px-2">
                    <button
                      type="button"
                      onClick={() => router.push('/my-courses')}
                      className="p-3 flex items-center rounded-lg text-base font-medium text-white hover:text-sky-200"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-md bg-indigo-500 text-white">
                        <BookOpenIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-sm font-medium text-white">My Courses</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => router.push('/my-account')}
                      className="p-3 flex items-center rounded-lg text-base font-medium text-white hover:text-sky-200"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-md bg-indigo-500 text-white">
                        <UserIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-sm font-medium text-white">My Account</div>
                    </button>
                  </div>
                )}
              </div>
              {profile?.token ? (
                <div className="mt-6">
                  <button
                    onClick={() => {
                      localStorage.clear()
                      router.reload()
                    }}
                    type="button"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="mt-6">
                  <button
                    onClick={() => router.push('/auth/sign-up')}
                    type="button"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </button>
                  <p className="mt-6 text-center text-base font-medium text-white">
                    Existing customer?
                    {' '}
                    <button
                      type="button"
                      onClick={() => router.push('/auth/sign-in')}
                      className="text-indigo-400 hover:text-indigo-500"
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
