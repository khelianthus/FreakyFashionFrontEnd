'use client';

import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { calculateTotalProductPrice, calculateQuantityPrice } from '../components/Basket';
import Link from 'next/link';

export default function Checkout() {
  const [products, setProducts] = useState<ProductWithQuantity[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const productsJSON = localStorage.getItem('cart');
    const parsedProducts = productsJSON ? JSON.parse(productsJSON) : [];
    setProducts(parsedProducts);
  }, []);

  const totalProductPrice = calculateTotalProductPrice(products)

  const shippingCost = 29;

  const taxAmount  = (parseFloat(totalProductPrice) * 0.1).toFixed(2);

  function calculateTotalPrice(products: ProductWithQuantity[]) {
    let totalProductPrice = 0;

    products.forEach((product: ProductWithQuantity) => {
      const price = product.price * product.quantity;
      totalProductPrice += price;
    });

    let totalPrice = totalProductPrice + shippingCost + Number(taxAmount);

    return totalPrice.toFixed(2);
  }

  function removeProduct(event: React.MouseEvent<HTMLButtonElement>) {
    const productId = event.currentTarget.getAttribute('data-product-id');
    if (productId) {
      const productsJSON = localStorage.getItem('cart');
      if (productsJSON) {
        const existingProducts = JSON.parse(productsJSON);
        const updatedProducts = existingProducts.filter(
          (product: ProductWithQuantity) => product.id !== parseInt(productId)
        );
  
        const totalQuantity = updatedProducts.reduce((total: number, product: ProductWithQuantity) => total + product.quantity, 0);
        setCartQuantity(totalQuantity);
  
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
        setProducts(updatedProducts); 
      }
    }
  }

  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity >= 1 && newQuantity <= 9) {
      setQuantity(newQuantity);
      const productId = event.currentTarget.getAttribute('data-product-id');
      if (productId) {
        updateQuantity(parseInt(productId), newQuantity);
      }
    }
  };

  const updateQuantity = (productId: number, quantity: number) => {
    const updatedProducts = products.map((product: ProductWithQuantity) => {
      if (product.id === productId) {
        return { ...product, quantity }; 
      }
      return product;
    });
  
    const totalQuantity = updatedProducts.reduce((total, product) => total + product.quantity, 0);
    setCartQuantity(totalQuantity);
  
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const totalPrice = calculateTotalPrice(products)

  return (
    <div className="bg-white">
      {/* Background color split screen for large screens */}
      <div className="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block" aria-hidden="true" />
      <div className="fixed right-0 top-0 hidden h-full w-1/2 bg-gray-50 lg:block" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
        <h1 className="sr-only">Order information</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-gray-50 px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
        >
          <div className="mx-auto max-w-lg lg:max-w-none">
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Ordersammanfattning
            </h2>

            <ul role="list" className="divide-y divide-gray-200 text-sm font-medium text-gray-900">
              {products.map((product: ProductWithQuantity) => (
                <li key={product.id} className="flex items-start space-x-4 py-6">
                  <Link href={`/details/${product.id}`}>
                    <img
                      src={product.imageUrl}
                      className="h-20 w-20 flex-none rounded-md object-cover object-center"
                    />
                  </Link>
                  <div className="flex-auto space-y-1">
                    <h3>{product.name}</h3>
                    <p className="text-gray-500">{product.color}</p>
                    <select
                      className="w-15 h-8 border border-gray-300 outline-0 rounded text-sm/[1] cursor-pointer"
                      value={product.quantity}
                      data-product-id={product.id}
                      onChange={handleQuantityChange}
                    >
                      {Array.from({ length: 9 }, (_, i) => i + 1).map((quantity) => (
                        <option key={quantity} value={quantity}>{quantity}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col items-end justify-between text-sm">
                  <p className="flex-none text-base font-medium">{calculateQuantityPrice(product)} kr</p>                                       
                    <div className="flex">
                      <button
                        onClick={removeProduct}
                        data-product-id={product.id}
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Ta bort
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <dl className="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Summa</dt>
                <dd>{totalProductPrice} kr</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Frakt</dt>
                <dd>{shippingCost} kr</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Moms</dt>
                <dd>{taxAmount} kr</dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt className="text-base">Totalt</dt>
                <dd className="text-base">{totalPrice} kr</dd>
              </div>
            </dl>

            <Popover className="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
              <div className="relative z-10 border-t border-gray-200 bg-white px-4 sm:px-6">
                <div className="mx-auto max-w-lg">
                  <Popover.Button className="flex w-full items-center py-6 font-medium">
                    <span className="mr-auto text-base">Totalt</span>
                    <span className="mr-2 text-base">{totalPrice} kr</span>
                    <ChevronUpIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <Transition.Root as={Fragment}>
                <div>
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-y-full"
                    enterTo="translate-y-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-y-0"
                    leaveTo="translate-y-full"
                  >
                    <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
                      <dl className="mx-auto max-w-lg space-y-6">
                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Summa</dt>
                          <dd>{totalProductPrice} kr</dd>
                        </div>

                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Frakt</dt>
                          <dd>{shippingCost} kr</dd>
                        </div>

                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Moms</dt>
                          <dd>{taxAmount} kr</dd>
                        </div>
                      </dl>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </Popover>
          </div>
        </section>

        <form className="px-4 pb-36 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <section aria-labelledby="contact-info-heading">
              <h2 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                Kontaktinformation
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-4"> 

                <div className="sm:col-span-2">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Förnamn
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Efternamn
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email adress
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

              </div>

            </section>           

            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2 id="shipping-heading" className="text-lg font-medium text-gray-900">
                Leveransadress
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">                

                <div className="sm:col-span-3">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Adress
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    Stad
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                    Region
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="region"
                      name="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                    Postnummer
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="postal-code"
                      name="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="billing-heading" className="mt-10">
              <h2 id="billing-heading" className="text-lg font-medium text-gray-900">
                Faktureringsinformation
              </h2>

              <div className="mt-6 flex items-center">
                <input
                  id="same-as-shipping"
                  name="same-as-shipping"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <div className="ml-2">
                  <label htmlFor="same-as-shipping" className="text-sm font-medium text-gray-900">
                    Samma som fraktinformation
                  </label>
                </div>
              </div>
            </section>

            <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
              >
                Fortsätt
              </button>
              <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                Du kommer inte att debiteras förrän nästa steg.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
