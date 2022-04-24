import React, { Fragment, useCallback, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import {
  DocumentAddIcon, FolderAddIcon, FolderIcon, HashtagIcon, TagIcon,
} from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const projects = [
  { id: 1, name: 'Workflow Inc. / Website Redesign', url: '#' },
  // More projects...
]
const recent = [projects[0]]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const SearchComponent = ({ open, setOpen }) => {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const filteredProjects = query === ''
    ? []
    : projects.filter((project) => project.name.toLowerCase().includes(query.toLowerCase()))
  const onKeyboardHandler = useCallback((e) => {
    if (e.key === 'Enter') {
      router.push(`/search?keyword=${query}`)
      setOpen(false)
    }
  }, [query, router])
  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="form"
            className="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all"
            onChange={(item) => (window.location = item.url)}
          >
            <div className="relative">
              <SearchIcon
                className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-900 text-opacity-40"
                aria-hidden="true"
              />
              <Combobox.Input
                onKeyUp={onKeyboardHandler}
                className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Search..."
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>

            {(query === '' || filteredProjects.length > 0) && (
              <Combobox.Options
                static
                className="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto"
              >
                <li className="p-2">
                  {query === '' && (
                    <h2 className="mt-4 mb-2 px-3 text-xs font-semibold text-gray-900">Recent searches</h2>
                  )}
                  <ul className="text-sm text-gray-700">
                    {(query === '' ? recent : filteredProjects).map((project) => (
                      <Combobox.Option
                        key={project.id}
                        value={project}
                        className={({ active }) => classNames(
                          'flex cursor-default select-none items-center rounded-md px-3 py-2',
                          active && 'bg-gray-900 bg-opacity-5 text-gray-900',
                        )}
                      >
                        {({ active }) => (
                          <button
                            type="button"
                            className="flex flex-wrap flex-row"
                            onClick={() => router.push(`/search?keyword=${project?.name}`)}
                          >
                            <FolderIcon
                              className={classNames(
                                'h-6 w-6 flex-none text-gray-900 text-opacity-40',
                                active && 'text-opacity-100',
                              )}
                              aria-hidden="true"
                            />
                            <span className="ml-3 flex-auto truncate">{project.name}</span>
                            {active && <span className="ml-3 flex-none text-gray-500">Jump to...</span>}
                          </button>
                        )}
                      </Combobox.Option>
                    ))}
                  </ul>
                </li>
              </Combobox.Options>
            )}

          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export default SearchComponent
