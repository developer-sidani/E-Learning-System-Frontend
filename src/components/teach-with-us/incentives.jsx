import React from 'react'

// const incentivesFunction = [
//   {
//     name: 'Teach your way',
//     imageSrc: 'assets/images/teach-with-us/teach-your-way.jpg',
//     description: "Publish the course you want, the way you want, and always have of control your own content.",
//   },
//   {
//     name: 'Inspire learners',
//     imageSrc: 'assets/images/teach-with-us/inspire-learners.jpg',
//     description: "Teach what you know and help learners explore their interests, gain new skills, and advance their careers.",
//   },
//   {
//     name: 'Get rewarded',
//     imageSrc: 'assets/images/teach-with-us/get-rewarded.jpg',
//     description:
//       "Expand your professional network, build your expertise, and earn money on each paid enrollment.",
//   },
// ]

const ConsoleLog = ({ children }) => {
  console.log(children)
  return false
}

const incentives = ({ incentivesFunction }) => (
 <div className="bg-white">
    <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="bg-gray-50 rounded-2xl px-6 py-16 sm:p-16">
        <div className="max-w-xl mx-auto lg:max-w-none">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              So many reasons to start
            </h2>
          </div>

          <div className="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
            {incentivesFunction?.map((incentive) => (

              <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                <ConsoleLog>
              {incentive.name}
                </ConsoleLog>
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img className="w-16 h-16 mx-auto" src={incentive.imageSrc} alt="" />
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
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
