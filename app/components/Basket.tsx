'use client';
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { TrashIcon } from '@heroicons/react/24/outline';

export interface BasketProps {
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export function calculateQuantityPrice(product: ProductWithQuantity) {
  let quantityPrice = product.price * product.quantity; 

  return quantityPrice;
}

export function calculateTotalProductPrice(products: ProductWithQuantity[]) {
  let totalProductPrice = 0;

  products.forEach((product: ProductWithQuantity) => {
    const price = product.price * product.quantity;
    totalProductPrice += price;
  });

  return totalProductPrice.toFixed(2);
}

export function Basket({ setCartQuantity }: BasketProps) {

  const [cartOpen, setCartOpen] = useState(false) 

  useEffect(() => {
    setCartOpen(!cartOpen);
  }, [setCartOpen]); 

  const [products, setProducts] = useState<ProductWithQuantity[]>([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const productsJSON = localStorage.getItem('cart');
    const parsedProducts = productsJSON ? JSON.parse(productsJSON) : [];
    setProducts(parsedProducts);
  }, []);

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
  
  const totalProductPrice = calculateTotalProductPrice(products);
  
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

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setCartOpen}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Varukorg</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => {
                              setCartOpen(false);
                              console.log('Closed: ', open);
                            }}
                          >
                            <span className="sr-only">Stäng panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product: any) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Link href={`/details/${product.id}`}>
                                      <img
                                        src={product.imageUrl}                                   
                                        className="h-full w-full object-cover object-center"
                                      />
                                  </Link>  
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        {product.name}
                                      </h3>
                                      <p className="ml-4">{calculateQuantityPrice(product)} kr</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
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
                                    
                                    <div className="flex">
                                      <button
                                        onClick={removeProduct}
                                        data-product-id={product.id}
                                        type="button"
                                        className="text-gray-400 hover:text-gray-600 pb-1"
                                      >
                                        <TrashIcon className="h-6 w-6" aria-hidden="true" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Summa</p>
                        <p>{totalProductPrice} kr</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Frakt och moms beräknas i kassan.</p>
                      <div className="mt-6">
                        <Link 
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        href="../checkout"
                        onClick={() => setCartOpen(false)}>
                          Kassa
                          </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          eller 
                          <br />
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setCartOpen(false)}
                          >
                            Fortsätt Handla
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
