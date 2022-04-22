import React, { useState } from 'react'
import {
  Disclosure,
} from '@headlessui/react'
import {
  BellIcon,
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'
// eslint-disable-next-line import/no-cycle
import {
  ProfileSection, PasswordSection, NotificationSection, BillingComponent,
} from '.'

const user = {
  name: 'Debbie Lewis',
  handle: 'deblewis',
  email: 'debbielewis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
}
const subNavigation = [
  {
    name: 'Profile', icon: UserCircleIcon,
  },
  {
    name: 'Password', icon: KeyIcon,
  },
  {
    name: 'Notifications', icon: BellIcon,
  },
  {
    name: 'Billing', icon: CreditCardIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MyAccountComponent = () => {
  const [tab, setTab] = useState(subNavigation[0])
  return (

     <div>
       <Disclosure as="div" className="relative bg-sky-700 pb-32 overflow-hidden">
         {({ open }) => (
           <>
             <div
               aria-hidden="true"
               className={classNames(
                 open ? 'bottom-0' : 'inset-y-0',
                 'absolute inset-x-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:inset-y-0',
               )}
             >
               <div className="absolute inset-0 flex">
                 <div className="h-full w-1/2 bg-primary" />
                 <div className="h-full w-1/2 bg-secondary" />
               </div>
               <div className="relative flex justify-center">
                 <svg
                   className="flex-shrink-0"
                   width={1750}
                   height={308}
                   viewBox="0 0 1750 308"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path d="M284.161 308H1465.84L875.001 182.413 284.161 308z" fill="#0A003C" />
                   <path d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#9C4DF4" />
                   <path d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#9C4DF4" />
                   <path d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z" fill="#0A003C" />
                 </svg>
               </div>
             </div>
             <header className="relative py-10">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h1 className="text-3xl font-bold text-white">Settings</h1>
               </div>
             </header>
           </>
         )}
       </Disclosure>

       <main className="relative -mt-32">
         <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
           <div className="bg-white rounded-lg shadow overflow-hidden">
             <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
               <aside className="py-6 lg:col-span-3">
                 <nav className="space-y-1">
                   {subNavigation.map((item) => (
                     <button
                       key={item.name}
                       type="button"
                       onClick={() => setTab(item)}
                       className={classNames(
                         item === tab
                           ? 'bg-teal-50 border-[#0A003C] text-[#9C4DF4] hover:bg-teal-50 hover:text-teal-700'
                           : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                         'group border-l-4 px-3 py-2 flex items-center text-sm font-medium w-full',
                       )}
                       aria-current={item === tab ? 'page' : undefined}
                     >
                       <item.icon
                         className={classNames(
                           item === tab
                             ? 'text-teal-500 group-hover:text-teal-500'
                             : 'text-gray-400 group-hover:text-gray-500',
                           'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                         )}
                         aria-hidden="true"
                       />
                       <span className="truncate">{item.name}</span>
                     </button>
                   ))}
                 </nav>
               </aside>
               {tab.name === 'Profile' && (
                 <ProfileSection user={user} />
               )}
               {tab.name === 'Password' && (
                 <PasswordSection />
               )}
               {tab.name === 'Notifications' && (
                 <NotificationSection />
               )}
               {tab.name === 'Billing' && (
                 <BillingComponent />
               )}
             </div>
           </div>
         </div>
       </main>
     </div>

  )
}

export default MyAccountComponent
