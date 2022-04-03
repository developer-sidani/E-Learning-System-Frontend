import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import {
  HeartIcon,
  MenuIcon,
  MinusSmIcon,
  PlusSmIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  XIcon,
} from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import {course} from './data.js'

  // const product = {
  //   name: 'Zip Tote Basket',
  //   price: '$140',
  //   rating: 4,
  //   images: [
  //     {
  //       id: 1,
  //       name: 'Angled view',
  //       src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
  //       alt: 'Angled front view with bag zipped and handles upright.',
  //     },
  //     // More images...
  //   ],
  //   colors: [
  //     { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
  //     { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
  //     { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  //   ],
  //   description: `
  //     <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  //   `,
  //   section: [
  //     {
  //       name: 'Intro to Course and Python',
  //       items: [
  //         'Multiple strap configurations',
  //         'Spacious interior with top zip',
  //         'Leather handle and tabs',
  //         'Interior dividers',
  //         'Stainless strap loops',
  //         'Double stitched construction',
  //         'Water-resistant',
  //       ],
  //     },
  //     {
  //       name: 'Setup',
  //       items: [
  //         'Multiple strap configurations',
  //         'Spacious interior with top zip',
  //         'Leather handle and tabs',
  //         'Interior dividers',
  //         'Stainless strap loops',
  //         'Double stitched construction',
  //         'Water-resistant',
  //       ],
  //     },
  //     {
  //       name: 'Learning Numpy',
  //       items: [
  //         'Multiple strap configurations',
  //         'Spacious interior with top zip',
  //         'Leather handle and tabs',
  //         'Interior dividers',
  //         'Stainless strap loops',
  //         'Double stitched construction',
  //         'Water-resistant',
  //       ],
  //     },
  //     {
  //       name: 'Intro to Pandas',
  //       items: [
  //         'Multiple strap configurations',
  //         'Spacious interior with top zip',
  //         'Leather handle and tabs',
  //         'Interior dividers',
  //         'Stainless strap loops',
  //         'Double stitched construction',
  //         'Water-resistant',
  //       ],
  //     },
  //   ],
  // }
  // const relatedProducts = [
  //   {
  //     id: 1,
  //     name: 'Zip Tote Basket',
  //     color: 'White and black',
  //     href: '#',
  //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
  //     imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  //     price: '$140',
  //   },
  //   // More products...
  // ]
  

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const Sections = () => {
    
    return (

                   <div className="border-t divide-y divide-gray-200">
                    {course.section.map((detail) => (
                      <Disclosure as="div" key={detail.name}>
                        {({ open }) => (
                          <>
                            <h3>
                              <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                                <span
                                  className={classNames(
                                    open ? 'text-indigo-600' : 'text-gray-900',
                                    'text-sm font-medium'
                                  )}
                                >
                                  {detail.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusSmIcon
                                      className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusSmIcon
                                      className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                              <ul role="list">
                                {detail.items.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </div> 
    )
  }

  export { Sections } 
  