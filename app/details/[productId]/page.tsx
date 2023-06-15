"use client";

import { useState, useEffect } from "react";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import getProductById from "@/app/api/getProductById";
import LikeButton from "@/app/[searchTerm]/components/LikeButton";

type Params = {
  params: {
    productId: string;
  };
};

export default function Details({ params: { productId } }: Params) {
  const [product, setProduct] = useState<ProductWithQuantity>();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const productData = await getProductById(productId);
      productData.quantity = quantity;
      setProduct(productData);
    }

    fetchData();
  }, [productId, quantity]);

  function handleQuantityChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity >= 1 && newQuantity <= 9) {
      setQuantity(newQuantity);
    }
  }

  function AddToLocalStorage() {
    const productsJSON = localStorage.getItem("cart");
    const existingProducts = productsJSON ? JSON.parse(productsJSON) : [];
    const existingProduct = existingProducts.find(
      (existingProduct: any) => existingProduct.id === product?.id
    );

    if (existingProduct) {
      // Om produkten redan finns i varukorgen, öka antalet
      existingProduct.quantity += quantity;
    } else {
      // Annars, lägg till produkten i varukorgen
      existingProducts.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(existingProducts));
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="relative lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          {/* Image selector */}
          <div className="mx-auto hidden w-full max-w-2xl sm:block lg:max-w-none aspect-h-3 aspect-w-3">
            <img
              className="object-cover  h-full"
              src={product.imageUrl}
              alt="Logotyp"
            />
          </div>
          {/* Product info */}
          
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>
            <div className="mt-5">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price} Kr
              </p>
            </div>
            <div>
              <h2 className="mt-5">{product.brand}</h2>
            </div>
            <div className="mt-6 mb-10">
              <h3 className="sr-only">Description</h3>
              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          </div>
            {/*Add to basket & favourites*/}

            <div className="absolute bottom-0">
  
            <select
              className="mt-5 w-15 h-10 border border-gray-600 rounded outline-0 text-center"
              value={product.quantity}
              data-product-id={product.id}
              onChange={handleQuantityChange}
            >
              {Array.from({ length: 9 }, (_, i) => i + 1).map((quantity) => (
                <option key={quantity} value={quantity}>
                  {quantity}
                </option>
              ))}
            </select>
            <div className="mt-6 flex">
              <form className="flex">
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-lime-100 px-8 py-3 text-base font-medium hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-200 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  onClick={AddToLocalStorage}
                >
                  Lägg till i varukorgen
                </button>
              </form>
              <div
              
                className="ml-4 flex items-center justify-center rounded-md px-3 py-3 bg-gray-100 hover:opacity-70"
              >
                <LikeButton />
                {/* <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" /> */}
                <span className="sr-only">Add to favorites</span>
              </div>
            </div>
            </div>


            {/* <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>
              <div className="divide-y divide-gray-200 border-t"></div>
            </section> */}
            
          </div>
        </div>
      </div>
    </div>
  );
}
