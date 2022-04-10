import { CheckIcon, ClockIcon } from '@heroicons/react/solid'

const courses = [
  {
    id: 1,
    name: 'Artwork Tee',
    href: '#',
    price: '$32.00',
    instructor: 'Punjab Singh',
    rating: 'stars',
    inStock: true,
    imageSrc: 'https://img-c.udemycdn.com/course/240x135/1331946_ed41_4.jpg',
    imageAlt: 'Front side of mint cotton t-shirt with wavey lines pattern.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    instructor: 'Fidel Castro',
    inStock: false,
    leadTime: '7-8 years',
    rating: 'stars',
    imageSrc: 'https://img-c.udemycdn.com/course/240x135/1331946_ed41_4.jpg',
    imageAlt: 'Front side of charcoal cotton t-shirt.',
  },
  // More courses...
]

const CartComponent = () => (
 
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
        <h1 className="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">Course Cart</h1>

        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Courses in your shopping cart
            </h2>

            <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {courses.map((course) => (
                <li key={course.id} className="flex py-6">
                  <div className="flex-shrink-0">
                    <img
                      src={course.imageSrc}
                      alt={course.imageAlt}
                      className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm">
                          <a href={course.href} className="font-medium text-gray-700 hover:text-gray-800">
                            {course.name}
                          </a>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">{course.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{course.instructor}</p>
                      <p className="mt-1 text-sm text-gray-500">{course.rating}</p>
                    </div>

                    <div className="mt-4 flex-1 flex items-end justify-between">
                      <p className="flex items-center text-sm text-gray-700 space-x-2">
                        {/* {course.inStock ? (
                          <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                        ) : (
                          <ClockIcon className="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                        )} */}

                        {/* <span>{course.inStock ? 'In stock' : `Will ship in ${course.leadTime}`}</span> */}
                      </p>
                      <div className="ml-4">
                        <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
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
                  <dd className="ml-4 text-base font-medium text-gray-900">$96.00</dd>
                </div>
              </dl>
              {/* <p className="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p> */}
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Checkout
              </button>
            </div>

            <div className="mt-6 text-sm text-center">
              <p>
                or{' '}
                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500">
                  Continue Browsing for Courses<span aria-hidden="true"> &rarr;</span>
                </a>
              </p>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
export default CartComponent