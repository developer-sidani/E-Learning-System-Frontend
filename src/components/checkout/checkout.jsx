import React, {
  memo,
  useCallback, useEffect, useRef, useState,
} from 'react'
import { Formik, Form } from 'formik'
import { StarIcon, TrashIcon } from '@heroicons/react/solid'
import {
  TextField,
} from '@mui/material'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { deleteAll, deleteCart } from '../../slices/cart'
import { createBilling, createPayment, getBilling } from '../../api'
import { wait } from '../../utils'
import { CoursesContainer } from '../home'

function classNames(...classes) {
  return classes.filter(Boolean)
    .join(' ')
}

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

const CheckoutSchema = Yup.object()
  .shape({
    address: Yup.string()
      .required('Required'),
    // Personal
    firstname: Yup.string()
      .required('Required'),
    lastname: Yup.string()
      .required('Required'),
    email: Yup.string()
      .email('Must be a valid email')
      .required('Required'),
    phone: Yup.string()
      .required('Required'),

    // Billing
    nameOnCard: Yup.string()
      .required('Required'),
    cardNumber: Yup.string()
      .max(16)
      .required('Required'),
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

const Checkout = () => {
  const [data, setData] = useState()
  const profile = useSelector(({ profile }) => profile)
  const myData = useSelector(({ cart }) => cart)
  const cart = myData?.data || []
  const subTotal = cart?.reduce((acc, { price }) => {
    if (price === 'Free') {
      return acc
    } if (typeof price === 'string') {
      return acc + parseFloat(price.replace('$', ''))
    }
    return acc + price
  }, 0)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const cartArray = cart.map(({ id }) => id)
  const fetchUserBilling = useCallback(async () => {
    try {
      const response = await getBilling(profile.user.id)
      setData(response)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [profile.user.id])
  const createBillingCallback = useCallback(async (data, callback, err) => {
    setLoading(true)
    try {
      const response = await createBilling(data)
      if (response.status === 200) {
        callback()
      } else {
        err()
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])
  const createPaymentCallback = useCallback(async (data, callback, err) => {
    setLoading(true)
    try {
      const response = await createPayment(data, cartArray, subTotal)
      if (response.status === 200) {
        callback()
      } else {
        err()
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [cartArray, subTotal])
  useEffect(() => {
    fetchUserBilling()
  }, [])
  const Loader = memo(() => {
    const circleCommonClasses = 'h-5 w-5 bg-primary rounded-full'

    return (
      <div className="flex h-96">
        <div className="m-auto flex">
          <div className={`${circleCommonClasses} mr-1 animate-bounce`} />
          <div className={`${circleCommonClasses} mr-1 animate-bounce200`} />
          <div className={`${circleCommonClasses} animate-bounce400`} />
        </div>
      </div>
    )
  })
  const Visa = memo(() => (
      <svg className="h-8 w-auto sm:flex-shrink-0 sm:h-6" viewBox="0 0 36 24" aria-hidden="true">
      <rect width={36} height={24} fill="#224DBA" rx={4} />
      <path
        fill="#fff"
        d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
      />
      </svg>
  ))
  const MasterCard = memo(() => (
    <svg className="h-8 w-auto sm:flex-shrink-0 sm:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143 88.78">
        <title>Mastercard logo</title>
        <polygon points="52.16 79.29 90.83 79.29 90.83 9.49 52.16 9.49 52.16 79.29" fill="#ff5f00" />
        <path d="M495.12,512A44.38,44.38,0,0,1,512,477.1a44.39,44.39,0,1,0,0,69.8A44.39,44.39,0,0,1,495.12,512" transform="translate(-440.5 -467.61)" fill="#eb001b" />
        <path d="M583.5,512A44.15,44.15,0,0,1,512,546.9a44.52,44.52,0,0,0,0-69.8A44.15,44.15,0,0,1,583.5,512Z" transform="translate(-440.5 -467.61)" fill="f#f79e1b" />
    </svg>
  ))

  const submitValues = (values, { resetForm }) => {
    values.expiration = values.expiration.split('/')
    values.expiration[1] = `20${values.expiration[1]}`
    values.expiration = values.expiration.reverse()
    values.expiration[2] = '01'
    values.expiration = values.expiration.join('-')
    if (data?.isValid) {
      createPaymentCallback(values, async () => {
        toast.success('Congrats, you can now go to your courses!')
        await wait(500)
        resetForm()
        dispatch(deleteAll())
        await router.push('/my-courses')
      }, () => {
        toast.error('Please Check Entered Data!')
      })
    } else {
      createBillingCallback(values, () => {
        createPaymentCallback(values, async () => {
          toast.success('Congrats, you can now go to your courses!')
          await wait(500)
          resetForm()
          dispatch(deleteAll())
          await router.push('/my-courses')
        }, () => {
          toast.error('Please Check Entered Data!')
        })
      }, () => {
        toast.error('Please Check Entered Data!')
      })
    }
  }

  return (

    <div className="">
      <div className="max-w-2xl mx-auto pt-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>
        <Formik
          enableReinitialize={data?.isValid}
          initialValues={{
            userId: profile?.user?.id,
            firstname: data?.data?.nameOnCard || '',
            lastname: data?.data?.nameOnCard || '',
            email: data?.data?.email || '',
            phone: data?.data?.cardNumber || '',
            paymentType: 'Master Card',
            nameOnCard: data?.data?.nameOnCard || '',
            cardNumber: data?.data?.cardNumber || '',
            expiration: data?.data?.expiration || '',
            address: data?.data?.expiration || '',
            cvc: data?.data?.cvc || '',
          }}
          validationSchema={!data?.isValid ? CheckoutSchema : null}
          onSubmit={submitValues}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
          }) => (

            <Form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
              {loading ? (<Loader />) : (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <>
                  {data.isValid ? (
                    <div className="bg-white shadow sm:rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Payment method</h3>
                        <div className="mt-5">
                          <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
                            <h4 className="sr-only">Visa</h4>
                            <div className="sm:flex sm:items-start">
                              {data?.data?.paymentType?.startsWith('Master') ? <MasterCard /> : <Visa />}
                              <div className="mt-3 sm:mt-0 sm:ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                    Ending with
                                      {' '}
                                  {/* eslint-disable-next-line no-unsafe-optional-chaining */}
                                    {data?.data?.cardNumber?.toString()?.substring(data?.data?.cardNumber?.toString()?.length - 4)}
                                </div>
                                <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                                  <div>Expires 12/20</div>
                                  <span className="hidden sm:mx-2 sm:inline" aria-hidden="true">
                                    &middot;
                                  </span>
                                  <div className="mt-1 sm:mt-0">Last updated on 22 Aug 2017</div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
                              <button
                                onClick={() => router.push('/my-account')}
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                              >
                                Edit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
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
                          <div className="col-span-4">
                            <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                              Address
                            </label>
                            <div className="mt-1">
                              <TextField
                                onBlur={handleBlur}
                                error={Boolean(touched.address && errors.address)}
                                fullWidth
                                helperText={touched.address && errors.address}
                                name="address"
                                onChange={handleChange}
                                required
                                value={values.address}
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
                  )}
                </>
              )}
              <div className="mt-10 lg:mt-0">
                <h2 className="text-lg font-medium text-gray-900">Cart summary</h2>

                <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <h3 className="sr-only">Items in your cart</h3>
                  <ul role="list" className="divide-y divide-gray-200">
                    {cart.map((product) => (
                      <li key={product.id} className="flex py-6 px-4 sm:px-6">
                        <div className="flex-shrink-0">
                          <img src={product?.image_240x135} alt={product?.imageAlt} className="w-28 rounded-md" />
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
                              <div className="flex items-center mt-4">
                                {[0, 1, 2, 3, 4].map((ratings) => (
                                  <StarIcon
                                    key={ratings}
                                    className={classNames(
                                      product.rating > ratings ? 'text-yellow-400' : 'text-gray-300',
                                      'h-5 w-5 flex-shrink-0',
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                            </div>

                            <div className="flex-shrink-0 flow-root">
                              <button
                                onClick={() => dispatch(deleteCart(product?.id))}
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
                              {product.price}
                            </p>

                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                    {subTotal !== 0
                      ? (
                  <div className="flex items-center justify-between border-gray-200 pt-6">
                        <dt className="text-base font-medium">Total</dt>
                        <dd className="text-base font-medium text-gray-900">
                          $
                          {subTotal}
                        </dd>
                  </div>
                      )
                      : (
                        <div className="flex items-center justify-center border-gray-200 pt-6">
                              Your cart is empty
                        </div>
                      )}
                  </dl>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <button
                      disabled={subTotal === 0}
                      type="submit"
                      className={
                      subTotal === 0 ? 'w-full bg-gray-400 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white'
                        : 'w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500'
                      }
                    >
                      Confirm order
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="mb-24">
          {/* Related courses */}
          <div className="flex items-center justify-between space-x-4 mt-10">
            <h2 className="text-lg font-medium text-gray-900">Frequently Bought Together</h2>
          </div>

          {/* TODO add courses slider  */}
          <CoursesContainer courses={[]} loading />
        </div>

      </div>

    </div>
  )
}

export default Checkout
