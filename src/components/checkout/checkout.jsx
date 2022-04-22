import React, { useRef, useState } from 'react'
import { Formik, Form } from 'formik'
import { TrashIcon } from '@heroicons/react/solid'
import {
  TextField,
} from '@mui/material'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://img-c.udemycdn.com/course/125_H/1331946_ed41_4.jpg',
    imageAlt: 'Front of men\'s Basic Tee in black.',
  },
  // More products...
]
const paymentMethods = [
  {
    id: 'master-card',
    title: 'Master Card',
  },
  {
    id: 'visa-card',
    title: 'Visa Card',
  },
]

const CheckoutSchema = Yup.object().shape({
  // Personal
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  email: Yup.string().email('Must be a valid email').required('Required'),
  phone: Yup.string().required('Required'),

  // Billing
  nameOnCard: Yup.string().required('Required'),
  cardNumber: Yup.string().max(16).required('Required'),
  expiration: Yup.string()
    .typeError('Not a valid expiration date. Example: MM/YY')
    .max(5, 'Not a valid expiration date. Example: MM/YY')
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      'Not a valid expiration date. Example: MM/YY',
    )
    .required('Expiration date is required'),
  cvc: Yup.string()
    .min(3)
    .max(3)
    .required('Required'),
})

const submitValues = () => (values, { resetForm }) => {
  console.log(values)
  // resetForm()
}

const Checkout = () => {
  const profile = useSelector(({ profile }) => profile)
  const myData = useSelector(({ cart }) => cart)
  const cart = myData?.data || []
  const subTotal = cart?.reduce((acc, { price }) => acc + price, 0)
  const dispatch = useDispatch()
  const router = useRouter()
  console.log(cart)
  return (

    <div className="">
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>
        <Formik
          initialValues={{
            userId: profile?.user?.id,
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            paymentType: 'Master Card',
            nameOnCard: '',
            cardNumber: '',
            expiration: '',
            cvc: '',

          }}
          validationSchema={CheckoutSchema}
          onSubmit={submitValues()}
        >
          {({
            values, errors, touched, handleChange, handleBlur,
          }) => (

        <Form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">Contact information</h2>
              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <div className="mt-1">
                    <TextField
                      onBlur={handleBlur}
                      error={Boolean(touched.firstname && errors.firstname)}
                      fullWidth
                      helperText={touched.firstname && errors.firstname}
                      name="firstname"
                      onChange={handleChange}
                      required
                      value={values.firstname}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <div className="mt-1">
                    <TextField
                      onBlur={handleBlur}
                      error={Boolean(touched.lastname && errors.lastname)}
                      fullWidth
                      helperText={touched.lastname && errors.lastname}
                      name="lastname"
                      onChange={handleChange}
                      required
                      value={values.lastname}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <TextField
                      onBlur={handleBlur}
                      error={Boolean(touched.phone && errors.phone)}
                      fullWidth
                      helperText={touched.phone && errors.phone}
                      name="phone"
                      onChange={handleChange}
                      required
                      value={values.phone}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <TextField
                    onBlur={handleBlur}
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    name="email"
                    onChange={handleChange}
                    required
                    value={values.email}
                  />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">Payment</h2>

              <fieldset className="mt-4">
                <legend className="sr-only">Payment type</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                    <div key={paymentMethod.id} className="flex items-center">
                      {paymentMethodIdx === 0 ? (
                        <input
                          id={paymentMethod.id}
                          name="paymentType"
                          type="radio"
                          onChange={handleChange}
                          value="Master Card"
                          defaultChecked
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                      ) : (
                        <input
                          id={paymentMethod.id}
                          name="paymentType"
                          type="radio"
                          onChange={handleChange}
                          value="visa"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                      )}

                      <label htmlFor={paymentMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                        {paymentMethod.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>

              <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                <div className="col-span-4">
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                    Card number
                  </label>
                  <div className="mt-1">
                    <TextField
                      onBlur={handleBlur}
                      error={Boolean(touched.cardNumber && errors.cardNumber)}
                      fullWidth
                      helperText={touched.cardNumber && errors.cardNumber}
                      name="cardNumber"
                      onChange={handleChange}
                      required
                      value={values.cardNumber}
                    />

                  </div>
                </div>

                <div className="col-span-4">
                  <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                    Name on card
                  </label>
                  <div className="mt-1">
                    <TextField
                      onBlur={handleBlur}
                      error={Boolean(touched.nameOnCard && errors.nameOnCard)}
                      fullWidth
                      helperText={touched.nameOnCard && errors.nameOnCard}
                      name="nameOnCard"
                      onChange={handleChange}
                      required
                      value={values.nameOnCard}
                    />
                  </div>
                </div>

                <div className="col-span-3">
                  <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                    Expiration date (MM/YY)
                  </label>
                  <div className="mt-1">
                    <TextField
                      onBlur={handleBlur}
                      error={Boolean(touched.expiration && errors.expiration)}
                      fullWidth
                      helperText={touched.expiration && errors.expiration}
                      name="expiration"
                      onChange={handleChange}
                      required
                      value={values.expiration}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                    CVC
                  </label>
                  <div className="mt-1">
                    <TextField
                      onBlur={handleBlur}
                      error={Boolean(touched.cvc && errors.cvc)}
                      fullWidth
                      helperText={touched.cvc && errors.cvc}
                      name="cvc"
                      onChange={handleChange}
                      required
                      value={values.cvc}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Cart summary</h2>

            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {cart.map((product) => (
                  <li key={product.id} className="flex py-6 px-4 sm:px-6">
                    <div className="flex-shrink-0">
                      <img src={product.image_125_H} alt={product.imageAlt} className="w-20 rounded-md" />
                    </div>

                    <div className="ml-6 flex-1 flex flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                              {product.title}
                            </a>
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">{product?.instructor?.name}</p>
                          <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                        </div>

                        <div className="ml-4 flex-shrink-0 flow-root">
                          <button
                            type="button"
                            className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <TrashIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="flex-1 pt-2 flex items-end justify-between">
                        <p className="mt-1 text-sm font-medium text-gray-900">
$
{product.price}
                        </p>

                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">
                  $
                  {subTotal}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium">Total</dt>
                  <dd className="text-base font-medium text-gray-900">
                    $
                    {subTotal}
                  </dd>
                </div>
              </dl>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        </Form>
          )}
        </Formik>

      </div>
    </div>
  )
}

export default Checkout
