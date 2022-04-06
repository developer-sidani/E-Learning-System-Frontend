import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MapIcon,
  MenuIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  XIcon,
} from '@heroicons/react/outline'
import {
  ChevronLeftIcon, FilterIcon, MailIcon, PhoneIcon, SearchIcon,
} from '@heroicons/react/solid'

// //////////////////////////////////////////////////////////////////////

export const user = {
  name: 'Tom Cook',
  imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

// export const navigation = [
//   {
//     name: 'Dashboard', href: '#', icon: HomeIcon, current: false,
//   },
//   {
//     name: 'Calendar', href: '#', icon: CalendarIcon, current: false,
//   },
//   {
//     name: 'Teams', href: '#', icon: UserGroupIcon, current: false,
//   },
//   {
//     name: 'Directory', href: '#', icon: SearchCircleIcon, current: true,
//   },
//   {
//     name: 'Announcements', href: '#', icon: SpeakerphoneIcon, current: false,
//   },
//   {
//     name: 'Office Map', href: '#', icon: MapIcon, current: false,
//   },
// ]

// export const secondaryNavigation = [
//   { name: 'Apps', href: '#', icon: ViewGridAddIcon },
//   { name: 'Settings', href: '#', icon: CogIcon },
// ]

export const tabs = [
  { name: 'Profile', href: '#', current: true },
  { name: 'Courses', href: '#', current: false },
]
export const profile = {
  name: 'Ricardo Cooper',
  imageUrl:
      'https://img-b.udemycdn.com/user/200_H/9685726_67e7_4.jpg',
  coverImageUrl:
      'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  about: `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    `,
  Website: 'https://www.google.com/',
  Title: 'Senior Front-End Developer',
  Email: 'ricardocooper@example.com',
  Reviews: 270.111,
  Students: 410.665,

}
// export const directory = {
//   A: [
//     {
//       id: 1,
//       name: 'Leslie Abbott',
//       role: 'Co-Founder / CEO',
//       imageUrl:
//           'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 2,
//       name: 'Hector Adams',
//       role: 'VP, Marketing',
//       imageUrl:
//           'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 3,
//       name: 'Blake Alexander',
//       role: 'Account Coordinator',
//       imageUrl:
//           'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 4,
//       name: 'Fabricio Andrews',
//       role: 'Senior Art Director',
//       imageUrl:
//           'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   ],
//   B: [
//     {
//       id: 5,
//       name: 'Angela Beaver',
//       role: 'Chief Strategy Officer',
//       imageUrl:
//           'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 6,
//       name: 'Yvette Blanchard',
//       role: 'Studio Artist',
//       imageUrl:
//           'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 7,
//       name: 'Lawrence Brooks',
//       role: 'Content Specialist',
//       imageUrl:
//           'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   ],
//   C: [
//     {
//       id: 8,
//       name: 'Jeffrey Clark',
//       role: 'Senior Art Director',
//       imageUrl:
//           'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 9,
//       name: 'Kathryn Cooper',
//       role: 'Associate Creative Director',
//       imageUrl:
//           'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   ],
//   E: [
//     {
//       id: 10,
//       name: 'Alicia Edwards',
//       role: 'Junior Copywriter',
//       imageUrl:
//           'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 11,
//       name: 'Benjamin Emerson',
//       role: 'Director, Print Operations',
//       imageUrl:
//           'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 12,
//       name: 'Jillian Erics',
//       role: 'Designer',
//       imageUrl:
//           'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 13,
//       name: 'Chelsea Evans',
//       role: 'Human Resources Manager',
//       imageUrl:
//           'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   ],
//   G: [
//     {
//       id: 14,
//       name: 'Michael Gillard',
//       role: 'Co-Founder / CTO',
//       imageUrl:
//           'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 15,
//       name: 'Dries Giuessepe',
//       role: 'Manager, Business Relations',
//       imageUrl:
//           'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   ],
//   M: [
//     {
//       id: 16,
//       name: 'Jenny Harrison',
//       role: 'Studio Artist',
//       imageUrl:
//           'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 17,
//       name: 'Lindsay Hatley',
//       role: 'Front-end Developer',
//       imageUrl:
//           'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 18,
//       name: 'Anna Hill',
//       role: 'Partner, Creative',
//       imageUrl:
//           'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   ],
//   S: [
//     {
//       id: 19,
//       name: 'Courtney Samuels',
//       role: 'Designer',
//       imageUrl:
//           'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 20,
//       name: 'Tom Simpson',
//       role: 'Director, Product Development',
//       imageUrl:
//           'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   ],
//   T: [
//     {
//       id: 21,
//       name: 'Floyd Thompson',
//       role: 'Principal Designer',
//       imageUrl:
//           'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 22,
//       name: 'Leonard Timmons',
//       role: 'Senior Designer',
//       imageUrl:
//           'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 23,
//       name: 'Whitney Trudeau',
//       role: 'Copywriter',
//       imageUrl:
//           'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   ],
//   W: [
//     {
//       id: 24,
//       name: 'Kristin Watson',
//       role: 'VP, Human Resources',
//       imageUrl:
//           'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       id: 25,
//       name: 'Emily Wilson',
//       role: 'VP, User Experience',
//       imageUrl:
//           'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   ],
//   Y: [
//     {
//       id: 26,
//       name: 'Emma Young',
//       role: 'Senior Front-end Developer',
//       imageUrl:
//           'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   ],
// }

export const team = [
  {
    name: 'Leslie Alexander',
    handle: 'lesliealexander',
    role: 'Co-Founder / CEO',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Foster',
    handle: 'michaelfoster',
    role: 'Co-Founder / CTO',
    imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Dries Vincent',
    handle: 'driesvincent',
    role: 'Manager, Business Relations',
    imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    handle: 'lindsaywalton',
    role: 'Front-end Developer',
    imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
