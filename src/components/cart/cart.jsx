import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { deleteCart } from '../../slices/cart'

const CartComponent = () => {
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
  const router = useRouter()
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
        <h1 className="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">Course Cart</h1>

        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Courses in your shopping cart
            </h2>

            <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {cart?.map((items, index) => (
                <li key={index} className="flex py-6">
                  <div className="flex-shrink-0">
                    <img
                      src={items.image_240x135}
                      alt={items.name}
                      className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                    />
                  </div>
                  <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm">
                          <button
                            onClick={() => router.push(`/courses/${items.id}`)}
                            type="button"
                            className="font-medium text-gray-700 hover:text-gray-800"
                          >
                            {items.title}
                          </button>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">{`${items?.price}`}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => router.push(`/instructors/${items?.instructorId?.id}`)}
                      >
                        <p className="mt-1 text-sm text-gray-500 hover:text-gray-700 hover:font-bold">{items.instructorId.info.fullName}</p>
                      </button>
                      <p className="mt-1 text-sm text-gray-500">{(Math.round(items.rating * 100) / 100)?.toString()}</p>
                    </div>
                    <div className="mt-4 flex-1 flex items-end justify-between">
                      <p className="flex items-center text-sm text-gray-700 space-x-2" />
                      <div className="ml-4">
                        <button
                          onClick={() => dispatch(deleteCart(items.id))}
                          type="button"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">{`$${subTotal}`}</dd>
                </div>
              </dl>
              {/* <p className="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p> */}
            </div>

            <div className="mt-10">
              <button
                onClick={() => router.push('/checkout')}
                disabled={cart?.length === 0}
                type="button"
                className={cart?.length === 0 ? 'w-full bg-gray-400 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white'
                  : 'w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500'}
              >
                Checkout
              </button>
            </div>

            <div className="mt-6 text-sm text-center">
              <p>
                or
                {' '}
                <button type="button" onClick={() => router.push('/')} className="text-indigo-600 font-medium hover:text-indigo-500">
                  Continue Browsing for Courses
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}
export default CartComponent
