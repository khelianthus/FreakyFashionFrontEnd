import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react';
import getAllProducts from '@/app/api/getAllProducts'
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductList() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData: Product[] = await getAllProducts();
        setProducts(productsData);

        console.log('Productsdata:',productsData)
      } catch (error) {
        // Handle error
      }
    };

    fetchProducts();
  }, []);


  const content = (
    <ul role="list" className="divide-y divide-gray-100 mt-5">
      {products.map((product) => (
        <li key={product.category} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={product.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
              <a href={`/productinfo/${product.urlSlug}`} className="hover:underline">
                {product.color} {product.name}
              </a>
              </p>
              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                  {product.sku}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{product.category}</p>
              {/* {product.createdat ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )} */}
            </div>
            <Menu as="div" className="relative flex-none">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                <span className="sr-only">Öppna alternativ</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                  {({ active }) => (
                        <Link href={`/backoffice/productdetails/${product.urlSlug}`} 
                          className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}>
                          
                          Inspektera<span className="sr-only">, {product.name}</span>
                        </Link>
                      )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => {console.log(product.urlSlug); return(
                      
                      <a
                        href="/productdetails/${product.Id}"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        <span className="text-color-red">Radera</span><span className="sr-only">, {product.name}</span>
                      </a>

                    )}}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </li>
      ))}
    </ul>
  );

  return content;
}
