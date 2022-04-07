import React from 'react'

const incentives = [
  {
    name: 'Quick results',
    imageSrc: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    description: 'Unlike learning in a traditional environment, eLearning can offer quick results and feedback thanks to the different evaluation methods that are often used. ',
  },
  {
    name: 'Better access to learning',
    imageSrc: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    description: 'In an eLearning environment, instructors and learners can easily connect with the help of online tools such as a Learning Management System and more.',
  },
  {
    name: 'Affordability of materials',
    imageSrc: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description:
      'With eLearning, however, materials can be gained online and this can make the process a lot more affordable. The ease of updating online course material, too.',
  },
]
const IncentivesComponent = () => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
      <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
        <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Learn+ The Best Place To Learn From Home
            </h2>
            <p className="mt-4 text-gray-500">
              As an alternative to traditional classroom course work, eLearning is becoming increasingly popular as well.
              It can allow students to learn and study at times that are easy to fit into their schedule
              while also permitting teachers to focus on their curriculum in a fun, new way.
            </p>
          </div>
          <div
            data-aos="fade-down"
            // data-aos-easing="linear"
            data-aos-duration="700"
            className="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
              alt=""
              className="object-center object-cover"
            />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
          {incentives.map((incentive, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={(index * 500).toString()}
              className="sm:flex lg:block"
            >
              <div className="sm:flex-shrink-0">
                {incentive.imageSrc}
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default IncentivesComponent
