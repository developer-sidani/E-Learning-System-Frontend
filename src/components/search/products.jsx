import React from 'react'
import Stars from './stars'

const Products = ({ products }) => (
    <div className="mt-0  border-gray-200">
              {/* <h2 className="sr-only">Your order</h2> */}

                <h3 className="sr-only">Items</h3>
                {products.map((product) => (
                  <div key={product.id} className="py-10 border-b border-gray-200 flex space-x-6">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="flex-none w-28 h-28 mt-0 object-center object-cover bg-gray-100 rounded-lg sm:w-48 sm:h-48"
                    />
                    <div className="flex-auto flex flex-col pr-10">
                      <div>
                        <h4 className="font-medium text-gray-900 font-bold ">
                          <a href={product.href}>{product.name}</a>
                        </h4>
                        <p className="mt-2 text-sm w-100 text-gray-600">{product.description}</p>
                        <p className="mt-2 mb-2 text-xs w-80 text-gray-600">{product.instructor}</p>
                        <Stars value={product.rating} />
                      </div>
                      <div className="mt-1 flex-1 flex items-end">
                        <dl className="flex text-sm divide-x divide-gray-200 space-x-5 sm:space-x-6">
                          <div className="flex">
                            <dt className="font-medium text-gray-900 [width:max-content]">Total Hours:</dt>
                            <dd className="ml-2 text-gray-700">{product.duration}</dd>
                          </div>
                          <div className="pl-4 flex sm:pl-6">
                            <dt className="font-medium text-gray-900">Lectures:</dt>
                            <dd className="ml-2 text-gray-700">{product.lectures}</dd>
                          </div>
                          <div className="pl-4 flex sm:pl-6">
                            <dt className="font-medium text-gray-900">Level:</dt>
                            <dd className="ml-2 text-gray-700">{product.level}</dd>
                          </div>
                        </dl>
                      </div>
                      <p className="mt-2 mb-2 text-base font-bold w-80 text-black">{product.price}</p>

                    </div>
                  </div>
                ))}
    </div>
)

export default Products
