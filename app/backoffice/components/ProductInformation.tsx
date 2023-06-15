'use client'

import { useState, useEffect } from 'react';
import getProductById from '@/app/api/getProductById';

type Params = {
  params: {
    urlSlug: string;
  };
};

export default function ProductInformation({ params: { urlSlug } }: Params) {
  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    async function fetchData() {
      const productData = await getProductById(urlSlug);
      setProduct(productData);
    }

    fetchData();
  }, [urlSlug]);

  return (
    <div>
      {product ? (
        <div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Produktinformation</h3>
            {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Se produktens detaljer här.</p> */}
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Namn</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product.name}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Färg</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product.color}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Bild-adress</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product?.imageUrl}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Beskrivning</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {product.description}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ) : (
        <h2 className="p-2 text-xl">{`Produkt laddas...`}</h2>
      )}
    </div>
  );
}
