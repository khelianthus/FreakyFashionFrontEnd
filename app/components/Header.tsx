'use client';

import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import Search from './Search'
import { Basket } from './Basket'
import CartNotification from './CartNotification';
import getCategories from '../api/getCategories';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  const [open, setOpen] = useState(false)
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchData() {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
      }
    fetchData();
    setOpen(true)
  }, []);

  useEffect(() => {
    if (!open) {
      setOpen(prevOpen => !prevOpen); 
    }
  }, [open]);

  const handleOpenCart = () => {
    setOpen(!open);
  };
  
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    
    const fetchCartQuantity = () => {
      const serializedProducts = localStorage.getItem('cart');
      const basketquantity = serializedProducts ? JSON.parse(serializedProducts) : [];

      let quantity = 0;

      basketquantity.forEach((prod: ProductWithQuantity) => {
        quantity += prod.quantity;
      });

      setCartQuantity(quantity);
    };

    window.addEventListener("storage", fetchCartQuantity);
    return () => window.removeEventListener("storage", fetchCartQuantity);
  }, []);

  return (

    <header className="sticky top-0 z-40 bg-gradient-to-r from-lightBeige from-60% to-purple-50">
      <nav className="border-gray-200 -mb-3">

        <div className="flex flex-wrap justify-between items-center mx-auto py-4 px-6 max-w-screen-lg 2xl:max-w-screen-xl ">
          <div className="md:flex items-center">
            <Link href="/">
              <img
                src="https://plchldr.co/i/170x50?&bg=000000=FFFFFF&text=logo"
                className="h-11 mr-5 my-3"
                alt="Logo"
              /> 
            </Link>
            <Search/> 
          </div>

          <div className="flex items-center">
            <Link href="/account/login" className="-ml-3 p-4 text-gray-400 hover:text-gray-500 lg:ml-4">
              <span className="sr-only">Account</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </Link>
            <div onClick={handleOpenCart} className="group -m-2 flex items-center p-2">
              <svg
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <CartNotification cartQuantity={cartQuantity} />              
            </div>
            {open && <Basket setCartQuantity={setCartQuantity} />}        
            </div>
        </div>
      </nav>

      <Popover className="relative">
        <div className="pointer-events-none absolute inset-0 z-30 border-b border-gray-200" aria-hidden="true" />
          <div className="relative z-20">
            <div className="flex py-5 px-6 mx-auto max-w-screen-lg 2xl:max-w-screen-xl">
              <div className="-my-2 -mr-1 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            
              <Popover.Group as="nav" className="hidden md:flex justify-start divide-x divide-gray-300 space-x-3">
                <Link href="#" className="text-base text-gray-900 hover:underline underline-offset-8 decoration-2">
                  NYHETER
                </Link>
                <Link href="#" className="text-base text-gray-900 hover:underline underline-offset-8 decoration-2 pl-3">
                  TOPPLISTAN
                </Link>

                <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900 underline underline-offset-8 decoration-2': 'text-gray-900',
                          'pl-3 group inline-flex items-center rounded-md text-base hover:text-gray-900 hover:underline underline-offset-8 decoration-2 focus:outline-none'
                        )}
                      >
                        <span>KLÄDER</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-900',
                            'ml-2 h-4 w-5'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-gradient-to-r from-lightBeige from-60% to-purple-50 md:block">
                        <div className="divide-y divide-gray-300 pl-5 py-3 lg:mx-auto xl:max-w-screen-lg 2xl:max-w-screen-xl">
                        {categories.map((category) => (
                            <div key={category.id}>
                                <Link
                                    href={`/categories/${category.urlSlug}`}
                                    className="">
                                    <Popover.Button className="text-sm font-medium py-4 text-gray-600 hover:text-gray-900">{category.name}</Popover.Button>
                                </Link>
                            </div>
                          ))}
                        </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover> 
                <Link href="#" className="text-base text-gray-900 hover:underline underline-offset-8 decoration-2 pl-3">
                  ACCESSOARER
                </Link>
                <Link href="#" className="text-base text-gray-900 hover:underline underline-offset-8 decoration-2 pl-3">
                  SKOR
                </Link>
              </Popover.Group> 
            </div>
          </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 bg-gradient-to-r from-lightBeige from-60% to-purple-50 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5 sm:pb-8">
                <div className="flex items-center justify-between">
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-lightBeige p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <nav>
                    <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8">
                      {categories.map((category) => (
                        <a
                          key={category.id}
                          href={`/categories/${category.urlSlug}`}
                          className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                          <div className="ml-4 text-base font-medium text-gray-900">{category.name}</div>
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>   
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}
