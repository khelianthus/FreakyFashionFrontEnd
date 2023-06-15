'use client'

import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  HomeIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { FaTshirt } from "react-icons/fa";


const navigation = [

  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Produkter', href: '#', icon: FaTshirt, current: false }
]
const administration = [

  { id: 1, name: 'Lägg till produkt', href: '#', initial: '+', current: false },
  { id: 2, name: 'Uppdatera produkt', href: '#', initial: '-', current: false },
  { id: 3, name: 'Radera produkt', href: '#', initial: 'x', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }  

export default function AdminSideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/* <div> */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            {/* fixed */}
            <div className=" fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  > 
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button"  className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Stäng meny</span>
                        <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 pr-20">
                  {/* h-10 */}
                    <div className="flex shrink-0 items-center gap-2">
                        <span className="text-lg text-gray-700">Administration</span>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-50 text-indigo-600'
                                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">Adminstration</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {administration.map((administration) => (
                              <li key={administration.name}>
                                <a
                                  href={administration.href}
                                  className={classNames(
                                    administration.current
                                      ? 'bg-gray-50 text-indigo-600'
                                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span
                                    className={classNames(
                                        administration.current
                                        ? 'text-indigo-600 border-indigo-600'
                                        : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                      'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                    )}
                                  >
                                    {administration.initial}
                                  </span>
                                  <span className="truncate">{administration.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden  lg:flex lg:w-72 lg:flex-col">
          <div className="flex  flex-col gap-y-2 mt-4 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-10 shrink-0 items-center">
                <span className="text-lg  text-gray-700">Administration</span>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">Adminstration</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {administration.map((administration) => (
                      <li key={administration.name}>
                        <a
                          href={administration.href}
                          className={classNames(
                            administration.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <span
                            className={classNames(
                                administration.current
                                ? 'text-indigo-600 border-indigo-600'
                                : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                              'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                            )}
                          >
                            {administration.initial}
                          </span>
                          <span className="truncate">{administration.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {/* <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>

        {/* <div className="lg:pl-72"> */}
          {/* <div className="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8"> */}
            <div className="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Öppna meny</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Separator */}
              <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

               <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <div className="flex items-center gap-x-4 lg:gap-x-6">


                  {/* Separator */}
                  <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />
                </div>
              </div>
            </div>
          <main className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Your content */}
            </div>
          </main>
    </>
  )
}

