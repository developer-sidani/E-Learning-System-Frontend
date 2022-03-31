import React, { Fragment, useState } from 'react'
import {
  StarIcon, ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon,
} from '@heroicons/react/solid'
import {
  Dialog, Disclosure, Menu, Popover, Tab, Transition,
} from '@headlessui/react'
import {
  MenuIcon, SearchIcon, ShoppingBagIcon, XIcon,
} from '@heroicons/react/outline'
import Pagination from './pagination'
import Stars from './stars'

const searchkey = 'test'
const course = {
  rating: '4.0',

}

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
// const subCategories = [
//   { name: 'Totes', href: '#' },
//   { name: 'Backpacks', href: '#' },
//   { name: 'Travel Bags', href: '#' },
//   { name: 'Hip Bags', href: '#' },
//   { name: 'Laptop Sleeves', href: '#' },
// ]
const filters = [
  {
    id: 'topic',
    name: 'Topic',
    options: [
      { value: 'Development', label: 'Development', checked: false },
      { value: 'Business', label: 'Business', checked: false },
      { value: 'Personal', label: 'Personal', checked: false },
      { value: 'Photography', label: 'Photography', checked: false },
      { value: 'Graphic Design', label: 'Graphic Design', checked: false },
    ],
  },
  {
    id: 'level',
    name: 'Level',
    options: [
      { value: 'AllLevels', label: 'All Levels', checked: false },
      { value: 'Beginner', label: 'Beginner', checked: false },
      { value: 'Intermediate', label: 'Intermediate', checked: false },
      { value: 'Expert', label: 'Expert', checked: false },
    ],
  },
  {
    id: 'language',
    name: 'Language',
    options: [
      { value: 'english', label: 'English', checked: true },
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: 'paid', label: 'Paid', checked: false },
      { value: 'free', label: 'Free', checked: false },
    ],
  },

  {
    id: 'rating',
    name: 'Rating',
    options: [
      { value: '5', label: '5 stars', checked: false },
      { value: '4', label: '4 stars', checked: false },
      { value: '3', label: '3 stars', checked: false },
      { value: '2', label: '2 stars', checked: false },
    ],
  },
]
const products = [
  {
    id: 1,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 2,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 2,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  // more...
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Component5 = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">

      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div
                className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto"
              >
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>
                  {/* <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href} className="block px-2 py-3">
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul> */}

                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button
                              className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                            >
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  />
                                 {section.id == 'rating' ? <Stars value={option.value} /> : null}

                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                Search Result for
{' '}
{searchkey}
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button
                    className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Sort
                    <ChevronDownIcon
                      className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
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
                    className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm',
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View grid</span>
                <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                {/* <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button
                            className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                          >
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                />
                                {section.id == 'rating' ? <Stars value={option.value} /> : null}

                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>

                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}

              </form>

              {/* Product grid */}
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
                {products.map((product) => (
                  <a key={product.id} href={product.href} className="group text-sm">
                    <div
                      className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75"
                    >
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
                    <p className="text-gray-500 italic">{product.availability}</p>
                    <p className="mt-2 font-medium text-gray-900">{product.price}</p>
                  </a>
                ))}
              </div>
            </div>

          </section>
        </main>
            <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {products.map((product) => (
                            <li key={product.id} className="flex py-6">
                              <div className="h-44 w-72 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href={product.href}>{product.name}</a>
                                    </h3>
                                    <p className="ml-4">{product.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">
                                            Qty
                                            {' '}
                                            {product.quantity}
                                  </p>

                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
            </div>

            <Pagination />

      </div>
    </div>
  )
}

export default Component5
