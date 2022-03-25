import React from 'react'

const incentives = ({ incentivesFunction }) => (

    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 pt-24 sm:px-6 lg:px-8">
      <div className="bg-gray-50 rounded-2xl px-6 py-16 sm:p-16">
        <div className="max-w-xl mx-auto lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              So many reasons to start
            </h2>
          </div>

          <div className="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
            {incentivesFunction.map((incentive) => (

            <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">

                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img className="w-18 h-18 mx-auto" src={incentive.imageSrc} alt="" />
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-2xl font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{incentive.description}</p>
                </div>
            </div>

            ))}
          </div>
        </div>
      </div>
      </div>
    </div>

)

export default incentives
